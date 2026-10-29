import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Alat metadata gambar gratis',
    description:
      'Alat gratis di browser untuk melihat, menganalisis, dan menghapus metadata gambar: penampil EXIF, cek privasi foto, ukuran metadata, hapus EXIF, GPS, dan C2PA.',
    intro:
      'Semua alat berjalan di browser Anda dengan mesin yang sama: gambar tidak pernah diunggah dan tidak ada yang dikompres ulang. Pilih yang Anda perlukan — melihat isi foto, memeriksa apa yang diungkapkannya, atau membersihkannya.',
  },
  cards: {
    cleaner: { name: 'Hapus metadata gambar', text: 'Hapus EXIF, GPS, XMP, IPTC, C2PA, dan prompt AI sekali klik, tanpa menurunkan kualitas.', detail: 'Taruh gambar Anda, tinjau laporannya, lalu unduh salinan bersih; piksel, orientasi, dan profil warna tetap utuh.' },
    'view-metadata': { name: 'Lihat metadata', text: 'Lihat semua kolom tersembunyi di foto: kamera, tanggal, GPS, XMP, C2PA, dan prompt AI.', detail: 'Hanya baca: file tidak pernah diubah, jadi aman untuk memeriksa foto yang Anda terima atau unduh.' },
    'privacy-check': { name: 'Cek privasi foto', text: 'Ketahui apa yang diungkap foto — lokasi di peta, data pribadi, dan waktu pengambilan.', detail: 'Menilai setiap foto berisiko tinggi, sedang, atau rendah dan menampilkan koordinat GPS yang bisa dibuka di peta.' },
    'metadata-size': { name: 'Cek ukuran metadata', text: 'Ukur berapa byte metadata dalam file dan seberapa berisiko.', detail: 'Menampilkan blok metadata menurut ukuran, sehingga terlihat apakah thumbnail, XMP, atau prompt tertanam membuat file lebih besar.' },
    'remove-exif': { name: 'Hapus EXIF', text: 'Hapus data kamera, tanggal, dan nomor seri dengan tetap menjaga orientasi dan warna.', detail: 'Bekerja dengan JPG, HEIC, PNG, dan WebP; tag orientasi minimal dipertahankan agar foto tidak miring.' },
    'remove-gps': { name: 'Hapus lokasi GPS', text: 'Buang koordinat GPS dari foto ponsel sebelum dibagikan.', detail: 'Berguna sebelum memposting foto rumah, anak, atau tempat kerja Anda, atau mengirimnya ke orang asing.' },
    'remove-c2pa': { name: 'Hapus C2PA', text: 'Hapus manifest Content Credentials (C2PA) dari JPG, PNG, WebP, dan HEIC.', detail: 'Menghapus manifest yang memicu label AI; watermark tak terlihat di piksel seperti SynthID tidak terpengaruh.' },
    'remove-prompts': { name: 'Hapus prompt AI', text: 'Hapus parameter Stable Diffusion dan workflow ComfyUI dari file PNG.', detail: 'Menyembunyikan prompt, seed, model, dan grafik node agar orang lain tidak bisa menyalin pengaturan generasi Anda.' },
    batch: { name: 'Pembersih massal', text: 'Bersihkan hingga 50 gambar sekaligus dan unduh dalam satu file ZIP.', detail: 'Setiap file tetap dalam format aslinya; file yang tidak dapat diproses dicantumkan beserta alasannya.' },
  },
  groups: {
    inspect: { title: 'Periksa foto Anda', text: 'Lihat apa yang terungkap dari gambar sebelum dibagikan — file hanya dibaca, tidak pernah diubah.' },
    remove: { title: 'Hapus metadata sesuai kebutuhan', text: 'Pilih format atau tugas — setiap panduan sudah dilengkapi alat pembersih.' },
  },
  tools: {
    'view-metadata': {
      title: 'Lihat metadata gambar online — EXIF, XMP, C2PA',
      description:
        'Penampil metadata gratis: lihat EXIF, GPS, XMP, IPTC, Content Credentials (C2PA), dan prompt AI di JPG, PNG, WebP, dan HEIC langsung di browser, tanpa unggah.',
      intro:
        'Jatuhkan foto untuk melihat semua informasi tersembunyi di dalamnya — kamera dan lensa, tanggal pengambilan, posisi GPS, perangkat lunak penyunting, Content Credentials, dan prompt AI — dikelompokkan menurut sumber. Tidak ada yang diubah atau diunggah.',
      steps: [
        'Jatuhkan satu atau beberapa gambar ke kotak di atas, atau ketuk “Pilih gambar”.',
        'Buka file untuk melihat ringkasan privasi, sinyal AI, dan daftar lengkap kolom metadata.',
        'Cari di antara kolom, lalu putuskan apakah file dibiarkan apa adanya atau metadatanya dihapus.',
      ],
      faq: [
        {
          q: 'Apakah melihat metadata mengubah file saya?',
          a: 'Tidak. File hanya dibaca. Untuk menghapus metadata, gunakan pembersih — gambar Anda tetap dimuat sehingga tidak perlu ditambahkan lagi.',
        },
        {
          q: 'Metadata apa saja yang bisa saya lihat?',
          a: 'EXIF (termasuk GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunk teks PNG berisi prompt atau workflow ComfyUI, serta blok struktur file.',
        },
        {
          q: 'Apakah foto saya diunggah?',
          a: 'Tidak. Browser membaca file, dan file tidak pernah keluar dari perangkat Anda.',
        },
      ],
    },
    'privacy-check': {
      title: 'Cek privasi foto — temukan GPS dan data pribadi',
      description:
        'Periksa apa yang diungkap foto sebelum dibagikan: lokasi GPS yang bisa dibuka di peta, pembuat, nomor seri, waktu pengambilan, dan data AI. Gratis, tanpa unggah.',
      intro:
        'Ketahui apa yang dibocorkan foto sebelum Anda mempostingnya. Pemeriksaan menunjukkan apakah foto berisi lokasi GPS (dan ke mana arahnya), data pribadi seperti pembuat atau nomor seri, waktu pengambilan, dan data asal AI — dengan tingkat risiko yang mudah dipahami.',
      steps: [
        'Jatuhkan foto yang akan Anda bagikan ke kotak di atas.',
        'Baca tingkat risiko serta informasi lokasi, pribadi, dan waktu yang ditemukan di setiap file.',
        'Jika ada posisi GPS, buka di peta untuk melihat persis apa yang bisa dilihat orang lain — lalu hapus.',
      ],
      faq: [
        {
          q: 'Bagaimana tingkat risiko ditentukan?',
          a: 'Tinggi berarti foto berisi lokasi. Sedang berarti ada informasi pribadi, waktu, atau AI tetapi tanpa lokasi. Rendah berarti tidak ada satu pun yang ditemukan dalam metadata.',
        },
        {
          q: 'Apakah peta dimuat otomatis?',
          a: 'Tidak. Koordinat ditampilkan sebagai teks. OpenStreetMap hanya terbuka di tab baru jika Anda mengeklik tombol; jika tidak, lokasi tidak pernah keluar dari perangkat Anda.',
        },
        {
          q: 'Bisakah foto mengungkap lokasi saya tanpa GPS?',
          a: 'Metadata hanya salah satu sumber. Hal yang terlihat di gambar — papan jalan, bangunan terkenal, pantulan — juga bisa mengungkap tempat, dan pemeriksaan ini tidak dapat mendeteksinya.',
        },
      ],
    },
    'metadata-size': {
      title: 'Cek ukuran metadata — berapa banyak metadata di foto?',
      description:
        'Ukur berapa banyak metadata dalam gambar: total byte, porsi dari file, blok EXIF, XMP, C2PA, atau prompt terbesar, dan tingkat risiko privasi. Gratis, tanpa unggah.',
      intro:
        'Lihat seberapa besar bagian file yang berupa metadata, bukan gambar. Alat ini mencantumkan setiap blok metadata menurut ukuran — EXIF, XMP, C2PA, pratinjau tertanam, prompt dan workflow AI — menunjukkan porsinya dari file, dan menilai risiko privasi.',
      steps: [
        'Jatuhkan satu atau beberapa gambar ke kotak di atas.',
        'Bandingkan ukuran metadata dan porsinya di setiap file, blok demi blok.',
        'Hapus metadata agar file lebih kecil dan lebih aman dibagikan.',
      ],
      faq: [
        {
          q: 'Mengapa sebagian file berisi begitu banyak metadata?',
          a: 'Pratinjau tertanam, manifest C2PA dengan thumbnail, dan workflow ComfyUI bisa menambah puluhan hingga ratusan kilobyte, sedangkan EXIF dasar biasanya hanya beberapa kilobyte.',
        },
        {
          q: 'Mengapa profil warna ditandai dipertahankan?',
          a: 'Profil warna ICC diperlukan agar warna tampil dengan benar, jadi pembersih mempertahankannya. Profil ini tidak dihitung dalam total metadata.',
        },
        {
          q: 'Apakah menghapus metadata mengubah gambar?',
          a: 'Tidak. Hanya blok metadata yang dihapus; data gambar disalin tanpa perubahan, sehingga file menjadi lebih kecil tanpa penurunan kualitas.',
        },
      ],
    },
  },
};

export default tools;
