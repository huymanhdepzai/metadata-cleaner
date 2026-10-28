import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Tentang All Metadata Cleaner',
    description:
      'All Metadata Cleaner adalah alat gratis yang mengutamakan privasi untuk melihat dan menghapus EXIF, GPS, XMP, IPTC, C2PA, dan prompt AI dari gambar langsung di browser.',
    intro:
      'All Metadata Cleaner adalah alat web gratis untuk melihat dan menghapus informasi tersembunyi di file gambar: EXIF dan lokasi GPS, XMP, IPTC, Content Credentials (C2PA), serta prompt atau workflow yang disematkan generator AI.',
    sections: [
      {
        heading: 'Mengapa kami membuatnya',
        paragraphs: [
          'Foto dan gambar AI sering membawa lebih banyak informasi dari yang dikira: di mana foto diambil, perangkat apa yang dipakai, siapa yang mengeditnya, atau prompt persis di balik gambar AI. Sebagian besar alat penghapus metadata mengunggah file Anda ke server atau mengompresnya ulang. Kami ingin alat yang tidak melakukan keduanya.',
        ],
      },
      {
        heading: 'Cara kerjanya',
        paragraphs: ['Semuanya terjadi di perangkat Anda sendiri:'],
        bullets: [
          'Browser membaca setiap file dan menganalisis strukturnya — segmen JPEG, chunk PNG, serta box WebP dan HEIC/AVIF.',
          'Blok metadata dipotong di tingkat byte; data gambar disalin tanpa perubahan sehingga kualitasnya tetap sama persis.',
          'Setiap file yang telah dibersihkan dianalisis ulang agar Anda bisa memeriksa apa yang dihapus.',
        ],
      },
      {
        heading: 'Prinsip kami',
        paragraphs: ['Beberapa aturan memandu setiap keputusan kami:'],
        bullets: [
          'Privasi nomor satu: gambar tidak pernah diunggah, disimpan, atau dilihat oleh kami.',
          'Kejujuran: kami menjelaskan apa yang tidak bisa dilakukan alat ini, seperti menghapus watermark tak terlihat di piksel.',
          'Gratis, tanpa akun, tanpa watermark, dan tanpa iklan.',
        ],
      },
      {
        heading: 'Untuk siapa',
        paragraphs: [
          'Untuk siapa pun yang membagikan gambar: orang yang ingin melindungi lokasinya sebelum memposting foto, fotografer yang menyerahkan karya ke klien, kreator yang ingin merahasiakan prompt-nya, dan siapa pun yang foto aslinya keliru dilabeli AI. Kami meminta semua pengguna mematuhi aturan platform tentang pengungkapan konten buatan AI.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Kebijakan Privasi',
    description:
      'Cara All Metadata Cleaner menangani data Anda: gambar diproses di browser dan tidak pernah diunggah. Tanpa akun, tanpa pelacak, tanpa iklan, penyimpanan minimal.',
    intro:
      'Kebijakan ini menjelaskan data apa saja yang ditangani All Metadata Cleaner saat Anda menggunakan situs ini. Singkatnya: gambar Anda tidak pernah keluar dari perangkat, dan kami tidak melacak Anda.',
    sections: [
      {
        heading: 'Gambar Anda tetap di perangkat Anda',
        paragraphs: [
          'Gambar yang Anda tambahkan dibaca dan diproses oleh browser Anda sendiri menggunakan Web Worker. Gambar tidak diunggah ke server mana pun, dan kami tidak pernah menerima, menyimpan, atau melihatnya. Anda bahkan bisa memutus koneksi internet setelah halaman dimuat dan alat tetap berfungsi.',
        ],
      },
      {
        heading: 'Yang tidak kami kumpulkan',
        paragraphs: ['Situs ini dirancang untuk mengumpulkan sesedikit mungkin:'],
        bullets: [
          'Tidak perlu akun, pendaftaran, atau alamat email.',
          'Tidak ada skrip analitik, iklan, atau pelacak media sosial yang dimuat, dan tidak ada font atau skrip pihak ketiga yang diminta.',
          'Tidak ada informasi tentang isi atau metadata gambar Anda yang dikirim ke mana pun.',
        ],
      },
      {
        heading: 'Data yang disimpan di browser Anda',
        paragraphs: ['Situs ini hanya mengingat dua preferensi, di perangkat Anda:'],
        bullets: [
          'Bahasa pilihan Anda, disimpan di penyimpanan lokal dan di cookie pihak pertama agar beranda terbuka dalam bahasa tersebut.',
          'Tema pilihan Anda (terang, gelap, atau sistem), disimpan di penyimpanan lokal.',
        ],
      },
      {
        heading: 'Hosting dan log server',
        paragraphs: [
          'Situs ini disajikan dari server kami sendiri. Seperti server web lainnya, server memproses informasi permintaan standar seperti alamat IP, jenis browser, dan halaman yang diminta untuk menyajikan situs dan melindunginya dari penyalahgunaan. Bahasa browser Anda dapat digunakan untuk memilih bahasa default. Kami tidak menggunakan informasi ini untuk mengidentifikasi atau membuat profil Anda.',
        ],
      },
      {
        heading: 'Perubahan kebijakan ini',
        paragraphs: [
          'Jika cara situs menangani data berubah, kami akan memperbarui halaman ini dan tanggal di bagian atas. Terus menggunakan situs setelah pembaruan berarti Anda menerima kebijakan yang telah direvisi.',
        ],
      },
    ],
  },
  terms: {
    title: 'Ketentuan Penggunaan',
    description:
      'Ketentuan penggunaan All Metadata Cleaner: alat gratis yang disediakan apa adanya, tanggung jawab Anda atas penggunaan gambar yang dibersihkan, dan batas tanggung jawab kami.',
    intro:
      'Dengan menggunakan All Metadata Cleaner, Anda menyetujui ketentuan ini. Bacalah bersama penafian di beranda dan Kebijakan Privasi kami.',
    sections: [
      {
        heading: 'Layanan',
        paragraphs: [
          'All Metadata Cleaner adalah alat web gratis yang memeriksa dan menghapus metadata dari file gambar di perangkat Anda sendiri. Kami dapat mengubah, menyempurnakan, atau menghentikan bagian mana pun kapan saja tanpa pemberitahuan.',
        ],
      },
      {
        heading: 'Penggunaan yang diperbolehkan',
        paragraphs: ['Anda bertanggung jawab atas file yang Anda proses dan cara Anda menggunakan hasilnya. Anda setuju untuk tidak menggunakan alat ini untuk:'],
        bullets: [
          'melanggar hukum atau hak orang lain, termasuk hak cipta dan hak privasi;',
          'menyembunyikan konten buatan AI jika hukum atau aturan platform mewajibkan Anda mengungkapkannya;',
          'menghapus informasi hak cipta, lisensi, atau kredit dari gambar yang bukan milik Anda atau yang tidak berhak Anda ubah.',
        ],
      },
      {
        heading: 'Tanpa jaminan',
        paragraphs: [
          'Alat ini disediakan “apa adanya” dan “sebagaimana tersedia”, tanpa jaminan apa pun, baik tersurat maupun tersirat. Kami tidak menjamin alat ini menghapus semua jenis metadata, hasilnya bebas kesalahan, atau platform akan memperlakukan gambar yang dibersihkan dengan cara tertentu. Selalu simpan salinan file asli Anda.',
        ],
      },
      {
        heading: 'Batasan tanggung jawab',
        paragraphs: [
          'Sejauh diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian atau kerusakan langsung, tidak langsung, insidental, atau konsekuensial — termasuk hilangnya data, file, atau keuntungan — yang timbul dari penggunaan atau ketidakmampuan menggunakan alat ini. Beberapa yurisdiksi tidak mengizinkan batasan tertentu; dalam hal itu, batasan hanya berlaku sejauh diizinkan.',
        ],
      },
      {
        heading: 'Perubahan ketentuan ini',
        paragraphs: [
          'Kami dapat memperbarui ketentuan ini dari waktu ke waktu. Tanggal di bagian atas menunjukkan versi terbaru. Terus menggunakan alat ini setelah perubahan berarti Anda menerima ketentuan yang diperbarui.',
        ],
      },
    ],
  },
  contact: {
    title: 'Hubungi kami',
    description:
      'Hubungi tim All Metadata Cleaner: laporkan bug, usulkan fitur, atau tanyakan soal privasi. Kami membaca setiap pesan dan membalas secepat mungkin.',
    intro:
      'Pertanyaan, laporan bug, dan ide sangat kami sambut. Kirimkan email kepada kami dan kami akan membalas secepat mungkin.',
    sections: [
      {
        heading: 'Hal yang bisa Anda sampaikan',
        paragraphs: ['Kami sangat senang menerima:'],
        bullets: [
          'Bug — file yang gagal dibersihkan, atau metadata yang tidak terdeteksi atau tidak terhapus.',
          'Permintaan fitur — format, opsi, atau bahasa baru yang ingin Anda lihat.',
          'Pertanyaan privasi atau hukum terkait situs ini.',
        ],
      },
      {
        heading: 'Sebelum menulis',
        paragraphs: [
          'Mohon jangan mengirim foto pribadi. Untuk melaporkan masalah, sebutkan format file, kamera, ponsel, atau aplikasi yang membuatnya, browser Anda, dan hasil yang Anda harapkan. Jika diperlukan file untuk mereproduksi masalah, kirim file yang tidak berisi hal sensitif.',
        ],
      },
    ],
  },
};

export default pages;
