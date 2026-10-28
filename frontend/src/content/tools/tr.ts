import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Ücretsiz görüntü meta veri araçları',
    description:
      'Görüntü meta verilerini görmek, analiz etmek ve kaldırmak için tarayıcıda ücretsiz araçlar: EXIF görüntüleyici, gizlilik kontrolü, meta veri boyutu, EXIF, GPS ve C2PA kaldırma.',
    intro:
      'Tüm araçlar tarayıcınızda aynı motorla çalışır: görüntüleriniz asla yüklenmez ve hiçbir şey yeniden sıkıştırılmaz. İhtiyacınızı seçin — bir fotoğrafın içine bakın, neyi açığa çıkardığını kontrol edin veya temizleyin.',
  },
  cards: {
    cleaner: { name: 'Meta verileri kaldır', text: 'EXIF, GPS, XMP, IPTC, C2PA ve yapay zekâ istemlerini tek tıkla, kalite kaybı olmadan kaldırın.' },
    'view-metadata': { name: 'Meta verileri görüntüle', text: 'Fotoğraftaki tüm gizli alanları görün: kamera, tarih, GPS, XMP, C2PA ve yapay zekâ istemleri.' },
    'privacy-check': { name: 'Fotoğraf gizlilik kontrolü', text: 'Bir fotoğrafın neyi açığa çıkardığını öğrenin — haritada konum, kişisel veriler ve çekim zamanı.' },
    'metadata-size': { name: 'Meta veri boyutu', text: 'Bir dosyada kaç bayt meta veri olduğunu ve ne kadar riskli olduğunu ölçün.' },
    'remove-exif': { name: 'EXIF kaldır', text: 'Yönü ve renkleri koruyarak kamera, tarih ve seri numarası bilgilerini silin.' },
    'remove-gps': { name: 'GPS konumunu kaldır', text: 'Paylaşmadan önce telefon fotoğraflarındaki GPS koordinatlarını kaldırın.' },
    'remove-c2pa': { name: 'C2PA kaldır', text: 'JPG, PNG, WebP ve HEIC dosyalarından Content Credentials (C2PA) bildirimlerini kaldırın.' },
    'remove-prompts': { name: 'Yapay zekâ istemlerini kaldır', text: 'PNG dosyalarından Stable Diffusion parametrelerini ve ComfyUI iş akışlarını kaldırın.' },
    batch: { name: 'Toplu temizleme', text: 'Tek seferde 50 görüntüye kadar temizleyin ve tek bir ZIP olarak indirin.' },
  },
  groups: {
    inspect: { title: 'Fotoğraflarınızı kontrol edin', text: 'Paylaşmadan önce bir görselin neleri açığa çıkardığını görün — dosya yalnızca okunur, asla değiştirilmez.' },
    remove: { title: 'İhtiyaca göre meta verileri kaldırın', text: 'Bir biçim veya görev seçin — her rehberde temizleyici yerleşik olarak bulunur.' },
  },
  tools: {
    'view-metadata': {
      title: 'Görüntü meta verilerini çevrimiçi görüntüle — EXIF, XMP, C2PA',
      description:
        'Ücretsiz meta veri görüntüleyici: JPG, PNG, WebP ve HEIC dosyalarındaki EXIF, GPS, XMP, IPTC, C2PA ve yapay zekâ istemlerini tarayıcıda, yüklemeden görün.',
      intro:
        'Bir fotoğrafı bırakın ve içindeki tüm gizli bilgileri görün — kamera ve lens, çekim tarihi, GPS konumu, düzenleme yazılımı, Content Credentials ve yapay zekâ istemleri — kaynağa göre gruplanmış olarak. Hiçbir şey değiştirilmez veya yüklenmez.',
      steps: [
        'Bir veya daha fazla görüntüyü yukarıdaki kutuya bırakın ya da “Görüntü seç”e dokunun.',
        'Gizlilik özetini, yapay zekâ sinyallerini ve tüm meta veri alanlarını görmek için bir dosyayı açın.',
        'Alanlarda arama yapın, ardından dosyayı olduğu gibi tutmaya veya meta verileri kaldırmaya karar verin.',
      ],
      faq: [
        {
          q: 'Meta verileri görüntülemek dosyamı değiştirir mi?',
          a: 'Hayır. Dosya yalnızca okunur. Meta verileri kaldırmak için temizleyiciyi kullanın — görüntüleriniz yüklü kalır, yeniden eklemeniz gerekmez.',
        },
        {
          q: 'Hangi meta verileri görebilirim?',
          a: 'EXIF (GPS dahil), XMP, IPTC, ICC, C2PA Content Credentials, istem veya ComfyUI iş akışı içeren PNG metin chunk’ları ve dosya yapısındaki bloklar.',
        },
        {
          q: 'Fotoğraflarım yüklenir mi?',
          a: 'Hayır. Dosyaları tarayıcınız okur ve cihazınızdan asla çıkmazlar.',
        },
      ],
    },
    'privacy-check': {
      title: 'Fotoğraf gizlilik kontrolü — GPS ve kişisel verileri bulun',
      description:
        'Paylaşmadan önce bir fotoğrafın neyi açığa çıkardığını kontrol edin: haritada açılabilen GPS konumu, yazar, cihaz seri numarası, çekim zamanı ve yapay zekâ verileri. Ücretsiz, yüklemesiz.',
      intro:
        'Paylaşmadan önce bir fotoğrafın neleri ele verdiğini öğrenin. Kontrol; GPS konumu olup olmadığını (ve nereyi gösterdiğini), yazar ya da cihaz seri numarası gibi kişisel bilgileri, çekim zamanını ve yapay zekâ kaynak verilerini basit bir risk seviyesiyle gösterir.',
      steps: [
        'Paylaşmayı düşündüğünüz fotoğrafları yukarıdaki kutuya bırakın.',
        'Her dosyanın risk seviyesini ve bulunan konum, kişisel ve zaman bilgilerini okuyun.',
        'GPS konumu bulunursa başkalarının tam olarak ne göreceğini görmek için haritada açın — sonra kaldırın.',
      ],
      faq: [
        {
          q: 'Risk seviyesi nasıl belirlenir?',
          a: 'Yüksek, fotoğrafta konum olduğu anlamına gelir. Orta, konum olmadan kişisel, zaman veya yapay zekâ bilgisi olduğu anlamına gelir. Düşük, meta verilerde bunların hiçbirinin bulunmadığı anlamına gelir.',
        },
        {
          q: 'Harita otomatik olarak yüklenir mi?',
          a: 'Hayır. Koordinatlar metin olarak gösterilir. OpenStreetMap yalnızca düğmeye tıklarsanız yeni sekmede açılır; aksi hâlde konum cihazınızdan asla çıkmaz.',
        },
        {
          q: 'GPS olmadan bir fotoğraf konumumu açığa çıkarabilir mi?',
          a: 'Meta veriler yalnızca bir kaynaktır. Görüntüde görünenler — tabelalar, simge yapılar, yansımalar — da bir yeri ele verebilir ve bu kontrol bunları algılayamaz.',
        },
      ],
    },
    'metadata-size': {
      title: 'Meta veri boyutu — bir fotoğrafta ne kadar meta veri var?',
      description:
        'Bir görüntüdeki meta veri miktarını ölçün: toplam bayt, dosyadaki payı, en büyük EXIF, XMP, C2PA veya istem blokları ve gizlilik riski seviyesi. Ücretsiz, yüklemesiz.',
      intro:
        'Bir dosyanın ne kadarının görüntü değil meta veri olduğunu görün. Araç her meta veri bloğunu boyutuna göre listeler — EXIF, XMP, C2PA, gömülü önizlemeler, yapay zekâ istemleri ve iş akışları — dosyadaki payını gösterir ve gizlilik riskini değerlendirir.',
      steps: [
        'Bir veya daha fazla görüntüyü yukarıdaki kutuya bırakın.',
        'Her dosyadaki meta veri boyutunu ve payını blok blok karşılaştırın.',
        'Dosyaları küçültmek ve daha güvenli paylaşmak için meta verileri kaldırın.',
      ],
      faq: [
        {
          q: 'Bazı dosyalarda neden bu kadar çok meta veri var?',
          a: 'Gömülü önizlemeler, küçük resimli C2PA bildirimleri ve ComfyUI iş akışları onlarca ila yüzlerce kilobayt ekleyebilir; temel EXIF ise genellikle yalnızca birkaç kilobayttır.',
        },
        {
          q: 'Renk profili neden korunuyor olarak işaretli?',
          a: 'ICC renk profili renklerin doğru görüntülenmesi için gereklidir, bu yüzden temizleyici onu korur. Meta veri toplamına dahil edilmez.',
        },
        {
          q: 'Meta verileri kaldırmak görüntüyü değiştirir mi?',
          a: 'Hayır. Yalnızca meta veri blokları kaldırılır; görüntü verisi değiştirilmeden kopyalanır, böylece dosya kalite kaybı olmadan küçülür.',
        },
      ],
    },
  },
};

export default tools;
