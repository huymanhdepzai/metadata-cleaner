// Cờ quốc gia (SVG từ gói flag-icons, MIT) cho từng ngôn ngữ trong bộ chọn ngôn ngữ.
// Dùng ảnh SVG thay vì emoji vì Windows không hiển thị emoji cờ (chỉ hiện "VN", "JP"…).
// Chỉ import đúng các cờ cần dùng → Vite chỉ đóng gói 32 tệp này (cờ nhỏ được nhúng thẳng, cờ lớn tải khi cần).
import type { LangCode } from '../../i18n/languages';
import br from 'flag-icons/flags/4x3/br.svg';
import cn from 'flag-icons/flags/4x3/cn.svg';
import cz from 'flag-icons/flags/4x3/cz.svg';
import de from 'flag-icons/flags/4x3/de.svg';
import dk from 'flag-icons/flags/4x3/dk.svg';
import es from 'flag-icons/flags/4x3/es.svg';
import esCt from 'flag-icons/flags/4x3/es-ct.svg';
import fi from 'flag-icons/flags/4x3/fi.svg';
import fr from 'flag-icons/flags/4x3/fr.svg';
import gb from 'flag-icons/flags/4x3/gb.svg';
import gr from 'flag-icons/flags/4x3/gr.svg';
import hr from 'flag-icons/flags/4x3/hr.svg';
import hu from 'flag-icons/flags/4x3/hu.svg';
import id from 'flag-icons/flags/4x3/id.svg';
import il from 'flag-icons/flags/4x3/il.svg';
import inFlag from 'flag-icons/flags/4x3/in.svg';
import it from 'flag-icons/flags/4x3/it.svg';
import jp from 'flag-icons/flags/4x3/jp.svg';
import kr from 'flag-icons/flags/4x3/kr.svg';
import nl from 'flag-icons/flags/4x3/nl.svg';
import pl from 'flag-icons/flags/4x3/pl.svg';
import pt from 'flag-icons/flags/4x3/pt.svg';
import ro from 'flag-icons/flags/4x3/ro.svg';
import ru from 'flag-icons/flags/4x3/ru.svg';
import sa from 'flag-icons/flags/4x3/sa.svg';
import se from 'flag-icons/flags/4x3/se.svg';
import sk from 'flag-icons/flags/4x3/sk.svg';
import th from 'flag-icons/flags/4x3/th.svg';
import tr from 'flag-icons/flags/4x3/tr.svg';
import tw from 'flag-icons/flags/4x3/tw.svg';
import ua from 'flag-icons/flags/4x3/ua.svg';
import vn from 'flag-icons/flags/4x3/vn.svg';

/** Ngôn ngữ → cờ của quốc gia tiêu biểu nói ngôn ngữ đó (tiếng Anh: Anh; tiếng Ả Rập: Ả Rập Xê Út; tiếng Catalan: Catalonia). */
export const FLAGS: Record<LangCode, string> = {
  en: gb, ja: jp, es, de, fr, 'pt-BR': br, it, 'zh-CN': cn, ar: sa, hi: inFlag, id, ko: kr, nl, pl, ru, sv: se,
  th, tr, vi: vn, 'zh-TW': tw, uk: ua, he: il, cs: cz, fi, sk, ca: esCt, hr, da: dk, hu, 'pt-PT': pt, el: gr, ro,
};
