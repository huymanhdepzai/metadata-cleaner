import { SITE } from '../content/seo';
import { COUNTRY_LANG, LANG_COOKIE } from '../i18n/detect';
import { DEFAULT_LANG, LANGUAGES } from '../i18n/languages';

/**
 * Sinh cấu hình Nginx cho VPS (scripts/prerender.mjs ghi ra deploy/nginx.conf mỗi lần build):
 *  - URL chuẩn bằng 301: http → https, www → tên miền chính, thêm "/" cuối cho đường dẫn trang.
 *  - Trang gốc "/": chuyển (302) sang ngôn ngữ phù hợp theo cookie → ngôn ngữ trình duyệt → quốc gia (nếu có GeoIP),
 *    cùng quy tắc với src/i18n/detect.ts. Bot tìm kiếm luôn nhận trang tiếng Anh (x-default).
 *  - Header cache/bảo mật, gzip, trang 404 thật.
 * Danh sách ngôn ngữ/quốc gia lấy từ mã nguồn nên không cần sửa tay khi thêm ngôn ngữ.
 */

const BOT = 'bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|validator';

/** Thẻ đầu tiên của Accept-Language → đoạn đường dẫn ngôn ngữ (thứ tự quan trọng: quy tắc riêng trước, mã gốc sau). */
export function acceptLanguageRules(): [pattern: string, lang: string][] {
  const end = '(?:[-_;,\\s]|$)';
  const rules: [string, string][] = [
    [`^\\s*zh-(?:hant|tw|hk|mo)`, 'zh-tw'],
    [`^\\s*zh${end}`, 'zh-cn'],
    [`^\\s*pt-pt${end}`, 'pt-pt'],
    [`^\\s*pt${end}`, 'pt-br'],
    [`^\\s*iw${end}`, 'he'],
    [`^\\s*in${end}`, 'id'],
  ];
  for (const l of LANGUAGES) if (!l.code.includes('-')) rules.push([`^\\s*${l.code}${end}`, l.code]);
  return rules;
}

const pad = (s: string, n = 44) => (s.length >= n ? `${s} ` : s.padEnd(n));

export function nginxConf(root = `/var/www/${new URL(SITE.origin).host}`): string {
  const host = new URL(SITE.origin).host;
  const cookieMap = LANGUAGES.map((l) => `    ${pad(`"~*^${l.code}$"`)}${l.code.toLowerCase()};`).join('\n');
  const browserMap = acceptLanguageRules()
    .map(([re, lang]) => `    ${pad(`"~*${re}"`)}${lang};`)
    .join('\n');
  const countryMap = Object.entries(COUNTRY_LANG)
    .map(([cc, lang]) => `    ${cc} ${lang.toLowerCase()};`)
    .join('\n');

  return `# ${SITE.name} — cấu hình Nginx (tự sinh bởi \`npm run build\` từ src/seo/nginx.ts — đừng sửa tay).
# Cài đặt lần đầu trên VPS (Ubuntu/Debian), tên miền đã trỏ A/AAAA về IP của VPS:
#   1. sudo apt install nginx certbot
#   2. Chép nội dung dist/ lên ${root}
#   3. Chứng chỉ SSL Let's Encrypt cho cả tên miền chính và www (certbot tự dừng/bật Nginx khi lấy và khi gia hạn):
#      sudo certbot certonly --standalone -d ${host} -d www.${host} \\
#        --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx"
#   4. sudo cp deploy/nginx.conf /etc/nginx/sites-available/${host}
#      sudo ln -s /etc/nginx/sites-available/${host} /etc/nginx/sites-enabled/
#      sudo rm -f /etc/nginx/sites-enabled/default
#   5. sudo nginx -t && sudo systemctl reload nginx
# Các lần cập nhật sau: chỉ cần chép lại dist/ (và nginx.conf nếu thay đổi rồi reload).
# Yêu cầu Nginx >= 1.25.1 (cú pháp "http2 on;"). Bản cũ hơn: xóa dòng "http2 on;" và dùng "listen 443 ssl http2;".

# ---------- Chọn ngôn ngữ cho trang gốc "/" ----------

# 1. Lựa chọn đã lưu (cookie "${LANG_COOKIE}", đặt khi người dùng tự đổi ngôn ngữ).
map $cookie_${LANG_COOKIE} $lang_saved {
    default "";
${cookieMap}
}

# 2. Ngôn ngữ đầu tiên của trình duyệt (Accept-Language).
map $http_accept_language $lang_browser {
    default "";
${browserMap}
}

# 3. Quốc gia theo IP. Mặc định tắt (VPS không có sẵn thông tin quốc gia). Để bật: cài module GeoIP2
#    (libnginx-mod-http-geoip2 + cơ sở dữ liệu GeoLite2-Country) rồi thay khối map dưới đây bằng:
#      geoip2 /usr/share/GeoIP/GeoLite2-Country.mmdb { $country_code country iso_code; }
map $remote_addr $country_code {
    default "";
}
map $country_code $lang_country {
    default "";
${countryMap}
}

# Ưu tiên: cookie → trình duyệt (nếu không phải tiếng Anh) → quốc gia → trình duyệt → tiếng Anh.
map "$lang_saved|$lang_browser|$lang_country" $lang_pick {
    default ${DEFAULT_LANG};
    "~^(?<l_saved>[a-z-]+)\\|"                  $l_saved;
    "~^\\|${DEFAULT_LANG}\\|(?<l_country>[a-z-]+)$"      $l_country;
    "~^\\|(?<l_browser>[a-z-]+)\\|"             $l_browser;
    "~^\\|\\|(?<l_geo>[a-z-]+)$"                $l_geo;
}

# Bot tìm kiếm / xem trước liên kết luôn nhận trang gốc tiếng Anh (x-default) để lập chỉ mục ổn định.
map $http_user_agent $is_bot {
    default 0;
    "~*(?:${BOT})" 1;
}

# Ngôn ngữ cần chuyển tới ("" = ở lại trang tiếng Anh).
map "$is_bot:$lang_pick" $root_lang {
    default "";
    "0:${DEFAULT_LANG}" "";
    "~^1:" "";
    "~^0:(?<l_target>[a-z-]+)$" $l_target;
}

# ---------- Cache ----------
# Tệp trong /assets/ có mã băm trong tên → cache 1 năm; HTML luôn kiểm tra lại để thấy bản mới ngay sau khi deploy.
map $uri $cache_control {
    default "public, max-age=0, must-revalidate";
    "~^/assets/" "public, max-age=31536000, immutable";
    "~^/og/" "public, max-age=86400";
    "~^/(?:favicon\\.svg|icon-\\d+\\.png|apple-touch-icon\\.png)$" "public, max-age=86400";
}

# ---------- http:// (mọi tên miền) → https://${host} ----------
server {
    listen 80;
    listen [::]:80;
    server_name ${host} www.${host};

    return 301 https://${host}$request_uri;
}

# ---------- https://www.${host} → https://${host} ----------
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name www.${host};

    ssl_certificate /etc/letsencrypt/live/${host}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${host}/privkey.pem;

    return 301 https://${host}$request_uri;
}

# ---------- Trang chính ----------
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name ${host};

    ssl_certificate /etc/letsencrypt/live/${host}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${host}/privkey.pem;

    root ${root};
    index index.html;

    charset utf-8;
    charset_types text/plain text/css text/xml application/javascript application/json application/manifest+json image/svg+xml;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml application/javascript application/json application/manifest+json image/svg+xml;

    add_header Cache-Control $cache_control always;
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    # URL không tồn tại → dist/404.html với mã 404 thật (không phải "soft 404").
    error_page 404 /404.html;

    # Đường dẫn trang thiếu "/" cuối → 301 (vd. /guides/what-is-exif-data → /guides/what-is-exif-data/).
    # Tệp có phần mở rộng (.png, .xml, .txt…) không bị đổi.
    rewrite ^(.*/[^/.]+)$ $1/ permanent;

    location = / {
        if ($root_lang) {
            add_header Cache-Control "private, no-store" always;
            add_header Vary "Accept-Language, Cookie" always;
            return 302 /$root_lang/$is_args$args;
        }
        try_files /index.html =404;
    }

    location / {
        try_files $uri $uri/index.html =404;
    }

    location = /404.html {
        internal;
    }

    location = /site.webmanifest {
        types { }
        default_type application/manifest+json;
    }

    # Không bao giờ phục vụ tệp ẩn (.git, .env…).
    location ~ /\\.(?!well-known/) {
        return 404;
    }
}
`;
}
