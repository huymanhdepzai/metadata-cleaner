import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'All Metadata Cleaner hakkında',
    description:
      'All Metadata Cleaner, görüntülerdeki EXIF, GPS, XMP, IPTC, C2PA ve yapay zekâ istemlerini doğrudan tarayıcıda gösteren ve kaldıran ücretsiz, gizlilik odaklı bir araçtır.',
    intro:
      'All Metadata Cleaner, görüntü dosyalarındaki gizli bilgileri görmek ve kaldırmak için ücretsiz bir web aracıdır: EXIF ve GPS konumu, XMP, IPTC, C2PA Content Credentials ve yapay zekâ üreticilerinin yerleştirdiği istemler veya iş akışları.',
    sections: [
      {
        heading: 'Neden geliştirdik',
        paragraphs: [
          'Fotoğraflar ve yapay zekâ görüntüleri çoğu zaman sanılandan fazlasını taşır: fotoğrafın nerede çekildiği, hangi cihazla çekildiği, kimin düzenlediği ya da bir yapay zekâ görüntüsünün tam istemi. Çoğu meta veri temizleme aracı dosyalarınızı bir sunucuya yükler veya yeniden sıkıştırır. Biz ikisini de yapmayan bir araç istedik.',
        ],
      },
      {
        heading: 'Nasıl çalışır',
        paragraphs: ['Her şey kendi cihazınızda gerçekleşir:'],
        bullets: [
          'Tarayıcınız her dosyayı okur ve yapısını çözümler: JPEG segmentleri, PNG chunk’ları ile WebP ve HEIC/AVIF kutuları.',
          'Meta veri blokları bayt düzeyinde kesilir; görüntü verisi değiştirilmeden kopyalanır, böylece kalite birebir aynı kalır.',
          'Temizlenen her dosya yeniden analiz edilir, böylece neyin kaldırıldığını doğrulayabilirsiniz.',
        ],
      },
      {
        heading: 'İlkelerimiz',
        paragraphs: ['Her kararımıza birkaç kural yön verir:'],
        bullets: [
          'Önce gizlilik: görüntüler asla yüklenmez, saklanmaz veya tarafımızdan görülmez.',
          'Dürüstlük: pikseller içindeki görünmez filigranları kaldırmak gibi aracın yapamadıklarını açıkça belirtiriz.',
          'Ücretsiz; hesap, filigran ve reklam yok.',
        ],
      },
      {
        heading: 'Kimler için',
        paragraphs: [
          'Görüntü paylaşan herkes için: fotoğraf paylaşmadan önce konumunu korumak isteyenler, müşterilerine iş teslim eden fotoğrafçılar, istemlerini gizli tutmak isteyen içerik üreticileri ve gerçek fotoğrafı yanlışlıkla yapay zekâ olarak etiketlenen herkes. Herkesten, yapay zekâ ile üretilen içeriğin beyanına ilişkin platform kurallarına uymasını rica ediyoruz.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Gizlilik Politikası',
    description:
      'All Metadata Cleaner verilerinizi nasıl işler: görüntüler tarayıcınızda işlenir ve asla yüklenmez. Hesap yok, izleme yok, reklam yok, en az düzeyde depolama.',
    intro:
      'Bu politika, web sitesini kullandığınızda All Metadata Cleaner’ın hangi verileri işlediğini açıklar. Kısacası: görüntüleriniz cihazınızdan asla çıkmaz ve sizi izlemeyiz.',
    sections: [
      {
        heading: 'Görüntüleriniz cihazınızda kalır',
        paragraphs: [
          'Eklediğiniz görüntüler kendi tarayıcınız tarafından Web Worker’lar ile okunur ve işlenir. Hiçbir sunucuya yüklenmez; biz de onları asla almaz, saklamaz veya görmeyiz. Sayfa yüklendikten sonra internet bağlantısını kesseniz bile araç çalışmaya devam eder.',
        ],
      },
      {
        heading: 'Toplamadığımız bilgiler',
        paragraphs: ['Site, mümkün olan en az bilgiyi toplayacak şekilde tasarlanmıştır:'],
        bullets: [
          'Hesap, kayıt veya e-posta adresi gerekmez.',
          'Analiz, reklam veya sosyal medya izleme betiği yüklenmez; üçüncü taraf yazı tipi veya betik istenmez.',
          'Görüntülerinizin içeriği veya meta verileri hakkında hiçbir bilgi bir yere gönderilmez.',
        ],
      },
      {
        heading: 'Tarayıcınızda saklanan veriler',
        paragraphs: ['Site, cihazınızda yalnızca iki tercihi hatırlar:'],
        bullets: [
          'Seçtiğiniz dil; ana sayfanın bu dilde açılması için yerel depolamada ve sitenin kendi çerezinde saklanır.',
          'Seçtiğiniz tema (açık, koyu veya sistem); yerel depolamada saklanır.',
        ],
      },
      {
        heading: 'Barındırma ve sunucu kayıtları',
        paragraphs: [
          'Web sitesi kendi sunucumuzdan sunulur. Her web sunucusu gibi, siteyi sunmak ve kötüye kullanıma karşı korumak için IP adresiniz, tarayıcı türünüz ve istenen sayfa gibi standart istek bilgilerini işler. Tarayıcınızın dili varsayılan dili seçmek için kullanılabilir. Bu bilgileri sizi tanımlamak veya profil oluşturmak için kullanmayız.',
        ],
      },
      {
        heading: 'Bu politikadaki değişiklikler',
        paragraphs: [
          'Sitenin verileri işleme biçimi değişirse bu sayfayı ve en üstteki tarihi güncelleriz. Güncellemeden sonra siteyi kullanmaya devam etmeniz, revize edilen politikayı kabul ettiğiniz anlamına gelir.',
        ],
      },
    ],
  },
  terms: {
    title: 'Kullanım Koşulları',
    description:
      'All Metadata Cleaner kullanım koşulları: olduğu gibi sunulan ücretsiz bir araç, temizlenen görüntülerin kullanımındaki sorumluluğunuz ve sorumluluğumuzun sınırları.',
    intro:
      'All Metadata Cleaner’ı kullanarak bu koşulları kabul etmiş olursunuz. Lütfen bunları ana sayfadaki sorumluluk reddi ve Gizlilik Politikamızla birlikte okuyun.',
    sections: [
      {
        heading: 'Hizmet',
        paragraphs: [
          'All Metadata Cleaner, kendi cihazınızdaki görüntü dosyalarının meta verilerini inceleyen ve kaldıran ücretsiz bir web aracıdır. Herhangi bir bölümünü dilediğimiz zaman ve önceden bildirmeksizin değiştirebilir, geliştirebilir veya sonlandırabiliriz.',
        ],
      },
      {
        heading: 'Kabul edilebilir kullanım',
        paragraphs: ['İşlediğiniz dosyalardan ve sonuçları nasıl kullandığınızdan siz sorumlusunuz. Aracı şu amaçlarla kullanmamayı kabul edersiniz:'],
        bullets: [
          'herhangi bir yasayı çiğnemek veya telif hakları ve gizlilik hakları dahil başkalarının haklarını ihlal etmek;',
          'bir yasa veya platform kuralı beyan etmenizi gerektirdiğinde yapay zekâ ile üretilmiş içeriği gizlemek;',
          'size ait olmayan veya değiştirme hakkınız bulunmayan görüntülerden telif, lisans veya künye bilgilerini kaldırmak.',
        ],
      },
      {
        heading: 'Garanti yoktur',
        paragraphs: [
          'Araç, açık veya zımni hiçbir garanti olmaksızın “olduğu gibi” ve “mevcut olduğu şekliyle” sunulur. Her türlü meta veriyi kaldıracağını, sonuçların hatasız olacağını veya platformların temizlenen görüntülere belirli bir şekilde davranacağını garanti etmeyiz. Orijinal dosyalarınızın bir kopyasını her zaman saklayın.',
        ],
      },
      {
        heading: 'Sorumluluğun sınırlandırılması',
        paragraphs: [
          'Yasaların izin verdiği azami ölçüde, aracın kullanımından veya kullanılamamasından doğan doğrudan, dolaylı, arızi veya sonuç niteliğindeki hiçbir kayıp ya da zarardan — veri, dosya veya kâr kaybı dahil — sorumlu değiliz. Bazı yargı bölgeleri belirli sınırlamalara izin vermez; bu durumda sınırlamalar yalnızca izin verilen ölçüde uygulanır.',
        ],
      },
      {
        heading: 'Bu koşullardaki değişiklikler',
        paragraphs: [
          'Bu koşulları zaman zaman güncelleyebiliriz. En üstteki tarih en güncel sürümü gösterir. Bir değişiklikten sonra aracı kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.',
        ],
      },
    ],
  },
  contact: {
    title: 'İletişim',
    description:
      'All Metadata Cleaner ekibiyle iletişime geçin: hata bildirin, özellik önerin veya gizlilikle ilgili bir soru sorun. Her mesajı okur ve en kısa sürede yanıtlarız.',
    intro:
      'Sorular, hata bildirimleri ve fikirler memnuniyetle karşılanır. Bize e-posta gönderin, en kısa sürede dönüş yapalım.',
    sections: [
      {
        heading: 'Bize hangi konularda yazabilirsiniz',
        paragraphs: ['Özellikle şunları duymaktan memnuniyet duyarız:'],
        bullets: [
          'Hatalar — temizlenemeyen bir dosya ya da algılanmayan veya kaldırılmayan meta veriler.',
          'Özellik istekleri — görmek istediğiniz yeni biçimler, seçenekler veya diller.',
          'Web sitesiyle ilgili gizlilik veya hukuki sorular.',
        ],
      },
      {
        heading: 'Yazmadan önce',
        paragraphs: [
          'Lütfen özel fotoğraflar göndermeyin. Bir sorunu bildirirken dosya biçimini, dosyayı oluşturan kamera, telefon veya uygulamayı, tarayıcınızı ve ne olmasını beklediğinizi belirtin. Sorunu yeniden oluşturmak için dosya gerekiyorsa hassas bilgi içermeyen bir dosya gönderin.',
        ],
      },
    ],
  },
};

export default pages;
