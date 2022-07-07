import assets from './assets';

const CarouselData = [
  {
    id: 'Berita-01',
    title: 'kementrian menyediakan layana pengaduan ',
    image: assets.img6,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate nisi placeat.',
  },
  {
    id: 'Berita-02',
    title: 'Kementrian menyediakan layana pengaduan ',
    image: assets.img2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate nisi placeat.',
  },
  {
    id: 'Berita-03',
    title: 'Kementrian menyediakan layana pengaduan ',
    image: assets.img7,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate nisi placeat.',
  },
  {
    id: 'Berita-04',
    title: 'Kementrian menyediakan layana pengaduan ',
    image: assets.img4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate nisi placeat.',
  },
  {
    id: 'Berita-05',
    title: 'Kementrian menyediakan layana pengaduan ',
    image: assets.img5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate nisi placeat.',
  },
];

const UupkData = [
  {
    isExpanded: false,
    bab_id: 'BAB-1',
    title: 'KETENTUAN UMUM',
    // pasal: 'Pasal 1',
    // subTitle: 'Dalam Undang-undang ini yang dimaksud dengan :',
    subCategory: [
      {
        idpasal: '1',
        val: '1.	Perlindungan konsumen adalah segala upaya yang menjamin adanya kepastian hukum untuk memberi perlindungan kepada konsumen.',
      },
      {
        idpasal: '2',
        val: '2.	Konsumen adalah setiap orang pemakai barang dan/atau jasa yang tersedia dalam masyarakat, baik bagi kepentingan diri sendiri, keluarga, orang lain, maupun makhluk hidup lain dan tidak untuk diperdagangkan',
      },
      {
        idpasal: '3',
        val: '3.	Pelaku usaha adalah setiap orang perseorangan atau badan usaha, baik yang berbentuk badan hukum maupun bukan badan hukum yang didirikan dan berkedudukan atau melakukan kegiatan dalam wilayah hukum negara Republik Indonesia, baik sendiri maupun bersama-sama melalui perjanjian menyelenggarakan kegiatan usaha dalam berbagai bidang ekonomi.',
      },
      {
        idpasal: '4',
        val: '4.	Barang adalah setiap benda baik berwujud maupun tidak berwujud, baik bergerak maupun tidak bergerak, dapat dihabiskan maupun tidak dapat dihabiskan, yang dapat untuk diperdagangkan, dipakai, dipergunakan, atau dimanfaatkan oleh konsumen',
      },
      // {
      //   idpasal: '5',
      //   description: '5.	Jasa adalah setiap layanan yang berbentuk pekerjaan atau prestasi yang disediakan bagi masyarakat untuk dimanfaatkan oleh konsumen.',
      // },
      // {
      //   idpasal: '6',
      //   description: '6.	Promosi adalah kegiatan pengenalan atau penyebarluasan informasi suatu barang dan/atau jasa untuk menarik minat beli konsumen terhadap barang dan/atau jasa yang akan dan sedang diperdagangkan.',
      // },
      // {
      //   idpasal: '7',
      //   description: '7.	Impor barang adalah kegiatan memasukkan barang ke dalam daerah pabean',
      // },
      // {
      //   idpasal: '8',
      //   description: '8.	Impor jasa adalah kegiatan penyediaan jasa asing untuk digunakan di dalam wilayah Republik Indonesia.',
      // },
      // {
      //   idpasal: '9',
      //   description: '9.	Lembaga Perlindungan Konsumen Swadaya Masyarakat adalah lembaga non-Pemerintah yang terdaftar dan diakui oleh Pemerintah yang mempunyai kegiatan menangani perlindungan konsumen.',
      // },
      // {
      //   idpasal: '10',
      //   description:
      //     '10.	Klausula Baku adalah setiap aturan atau ketentuan dan syarat-syarat yang telah dipersiapkan dan ditetapkan terlebih dahulu secara sepihak oleh pelaku usaha yang dituangkan dalam suatu dokumen dan/atau perjanjian yang mengikat dan wajib dipenuhi oleh konsumen.',
      // },
      // {
      //   idpasal: '11',
      //   description: '11.	Badan Penyelesaian Sengketa Konsumen adalah badan yang bertugas menangani dan menyelesaikan sengketa antara pelaku usaha dan konsumen.',
      // },
      // {
      //   idpasal: '12',
      //   description: '12.	Badan Perlindungan Konsumen Nasional adalah badan yang dibentuk untuk membantu upaya pengembangan perlindungan konsumen',
      // },
      // {
      //   idpasal: '13',
      //   description: '13.	Menteri adalah menteri yang ruang lingkup tugas dan tanggung jawabnya meliputi bidang perdagangan.',
      // },
    ],
  },
  {
    isExpanded: false,
    bab_id: 'BAB-2',
    title: 'KETENTUAN PUBLIC',
    // pasal: 'Pasal 2',
    // subTitle: 'Dalam Undang-undang ini yang dimaksud dengan :',
    subCategory: [
      {
        idpasal: '11',
        val: '1.	Perlindungan konsumen adalah segala upaya yang menjamin adanya kepastian hukum untuk memberi perlindungan kepada konsumen.',
      },
      {
        idpasal: '12',
        val: '2.	Konsumen adalah setiap orang pemakai barang dan/atau jasa yang tersedia dalam masyarakat, baik bagi kepentingan diri sendiri, keluarga, orang lain, maupun makhluk hidup lain dan tidak untuk diperdagangkan',
      },
      {
        idpasal: '13',
        val: '3.	Pelaku usaha adalah setiap orang perseorangan atau badan usaha, baik yang berbentuk badan hukum maupun bukan badan hukum yang didirikan dan berkedudukan atau melakukan kegiatan dalam wilayah hukum negara Republik Indonesia, baik sendiri maupun bersama-sama melalui perjanjian menyelenggarakan kegiatan usaha dalam berbagai bidang ekonomi.',
      },
      {
        idpasal: '14',
        val: '4.	Barang adalah setiap benda baik berwujud maupun tidak berwujud, baik bergerak maupun tidak bergerak, dapat dihabiskan maupun tidak dapat dihabiskan, yang dapat untuk diperdagangkan, dipakai, dipergunakan, atau dimanfaatkan oleh konsumen',
      },
      // {
      //   idpasal: '15',
      //   description: '5.	Jasa adalah setiap layanan yang berbentuk pekerjaan atau prestasi yang disediakan bagi masyarakat untuk dimanfaatkan oleh konsumen.',
      // },
      // {
      //   idpasal: '16',
      //   description: '6.	Promosi adalah kegiatan pengenalan atau penyebarluasan informasi suatu barang dan/atau jasa untuk menarik minat beli konsumen terhadap barang dan/atau jasa yang akan dan sedang diperdagangkan.',
      // },
      // {
      //   idpasal: '17',
      //   description: '7.	Impor barang adalah kegiatan memasukkan barang ke dalam daerah pabean',
      // },
      // {
      //   idpasal: '18',
      //   description: '8.	Impor jasa adalah kegiatan penyediaan jasa asing untuk digunakan di dalam wilayah Republik Indonesia.',
      // },
      // {
      //   idpasal: '19',
      //   description: '9.	Lembaga Perlindungan Konsumen Swadaya Masyarakat adalah lembaga non-Pemerintah yang terdaftar dan diakui oleh Pemerintah yang mempunyai kegiatan menangani perlindungan konsumen.',
      // },
      // {
      //   idpasal: '20',
      //   description:
      //     '10.	Klausula Baku adalah setiap aturan atau ketentuan dan syarat-syarat yang telah dipersiapkan dan ditetapkan terlebih dahulu secara sepihak oleh pelaku usaha yang dituangkan dalam suatu dokumen dan/atau perjanjian yang mengikat dan wajib dipenuhi oleh konsumen.',
      // },
      // {
      //   idpasal: '21',
      //   description: '11.	Badan Penyelesaian Sengketa Konsumen adalah badan yang bertugas menangani dan menyelesaikan sengketa antara pelaku usaha dan konsumen.',
      // },
      // {
      //   idpasal: '22',
      //   description: '12.	Badan Perlindungan Konsumen Nasional adalah badan yang dibentuk untuk membantu upaya pengembangan perlindungan konsumen',
      // },
      // {
      //   idpasal: '23',
      //   description: '13.	Menteri adalah menteri yang ruang lingkup tugas dan tanggung jawabnya meliputi bidang perdagangan.',
      // },
    ],
  },
  {
    isExpanded: false,
    bab_id: 'BAB-3',
    title: 'KETENTUAN SECARA BESAR',
    // pasal: 'Pasal 2',
    // subTitle: 'Dalam Undang-undang ini yang dimaksud dengan :',
    subCategory: [
      {
        idpasal: '11',
        val: '1.	Perlindungan konsumen adalah segala upaya yang menjamin adanya kepastian hukum untuk memberi perlindungan kepada konsumen.',
      },
      {
        idpasal: '12',
        val: '2.	Konsumen adalah setiap orang pemakai barang dan/atau jasa yang tersedia dalam masyarakat, baik bagi kepentingan diri sendiri, keluarga, orang lain, maupun makhluk hidup lain dan tidak untuk diperdagangkan',
      },
      {
        idpasal: '13',
        val: '3.	Pelaku usaha adalah setiap orang perseorangan atau badan usaha, baik yang berbentuk badan hukum maupun bukan badan hukum yang didirikan dan berkedudukan atau melakukan kegiatan dalam wilayah hukum negara Republik Indonesia, baik sendiri maupun bersama-sama melalui perjanjian menyelenggarakan kegiatan usaha dalam berbagai bidang ekonomi.',
      },
      {
        idpasal: '14',
        val: '4.	Barang adalah setiap benda baik berwujud maupun tidak berwujud, baik bergerak maupun tidak bergerak, dapat dihabiskan maupun tidak dapat dihabiskan, yang dapat untuk diperdagangkan, dipakai, dipergunakan, atau dimanfaatkan oleh konsumen',
      },
      // {
      //   idpasal: '15',
      //   description: '5.	Jasa adalah setiap layanan yang berbentuk pekerjaan atau prestasi yang disediakan bagi masyarakat untuk dimanfaatkan oleh konsumen.',
      // },
      // {
      //   idpasal: '16',
      //   description: '6.	Promosi adalah kegiatan pengenalan atau penyebarluasan informasi suatu barang dan/atau jasa untuk menarik minat beli konsumen terhadap barang dan/atau jasa yang akan dan sedang diperdagangkan.',
      // },
      // {
      //   idpasal: '17',
      //   description: '7.	Impor barang adalah kegiatan memasukkan barang ke dalam daerah pabean',
      // },
      // {
      //   idpasal: '18',
      //   description: '8.	Impor jasa adalah kegiatan penyediaan jasa asing untuk digunakan di dalam wilayah Republik Indonesia.',
      // },
      // {
      //   idpasal: '19',
      //   description: '9.	Lembaga Perlindungan Konsumen Swadaya Masyarakat adalah lembaga non-Pemerintah yang terdaftar dan diakui oleh Pemerintah yang mempunyai kegiatan menangani perlindungan konsumen.',
      // },
      // {
      //   idpasal: '20',
      //   description:
      //     '10.	Klausula Baku adalah setiap aturan atau ketentuan dan syarat-syarat yang telah dipersiapkan dan ditetapkan terlebih dahulu secara sepihak oleh pelaku usaha yang dituangkan dalam suatu dokumen dan/atau perjanjian yang mengikat dan wajib dipenuhi oleh konsumen.',
      // },
      // {
      //   idpasal: '21',
      //   description: '11.	Badan Penyelesaian Sengketa Konsumen adalah badan yang bertugas menangani dan menyelesaikan sengketa antara pelaku usaha dan konsumen.',
      // },
      // {
      //   idpasal: '22',
      //   description: '12.	Badan Perlindungan Konsumen Nasional adalah badan yang dibentuk untuk membantu upaya pengembangan perlindungan konsumen',
      // },
      // {
      //   idpasal: '23',
      //   description: '13.	Menteri adalah menteri yang ruang lingkup tugas dan tanggung jawabnya meliputi bidang perdagangan.',
      // },
    ],
  },
  {
    isExpanded: false,
    bab_id: 'BAB-4',
    title: 'KETENTUAN SECARA BESAR - BESAR',
    // pasal: 'Pasal 2',
    // subTitle: 'Dalam Undang-undang ini yang dimaksud dengan :',
    subCategory: [
      {
        idpasal: '11',
        val: '1.	Perlindungan konsumen adalah segala upaya yang menjamin adanya kepastian hukum untuk memberi perlindungan kepada konsumen.',
      },
      {
        idpasal: '12',
        val: '2.	Konsumen adalah setiap orang pemakai barang dan/atau jasa yang tersedia dalam masyarakat, baik bagi kepentingan diri sendiri, keluarga, orang lain, maupun makhluk hidup lain dan tidak untuk diperdagangkan',
      },
      {
        idpasal: '13',
        val: '3.	Pelaku usaha adalah setiap orang perseorangan atau badan usaha, baik yang berbentuk badan hukum maupun bukan badan hukum yang didirikan dan berkedudukan atau melakukan kegiatan dalam wilayah hukum negara Republik Indonesia, baik sendiri maupun bersama-sama melalui perjanjian menyelenggarakan kegiatan usaha dalam berbagai bidang ekonomi.',
      },
      {
        idpasal: '14',
        val: '4.	Barang adalah setiap benda baik berwujud maupun tidak berwujud, baik bergerak maupun tidak bergerak, dapat dihabiskan maupun tidak dapat dihabiskan, yang dapat untuk diperdagangkan, dipakai, dipergunakan, atau dimanfaatkan oleh konsumen',
      },
      {
        idpasal: '15',
        description: '5.	Jasa adalah setiap layanan yang berbentuk pekerjaan atau prestasi yang disediakan bagi masyarakat untuk dimanfaatkan oleh konsumen.',
      },
      // {
      //   idpasal: '16',
      //   description: '6.	Promosi adalah kegiatan pengenalan atau penyebarluasan informasi suatu barang dan/atau jasa untuk menarik minat beli konsumen terhadap barang dan/atau jasa yang akan dan sedang diperdagangkan.',
      // },
      // {
      //   idpasal: '17',
      //   description: '7.	Impor barang adalah kegiatan memasukkan barang ke dalam daerah pabean',
      // },
      // {
      //   idpasal: '18',
      //   description: '8.	Impor jasa adalah kegiatan penyediaan jasa asing untuk digunakan di dalam wilayah Republik Indonesia.',
      // },
      // {
      //   idpasal: '19',
      //   description: '9.	Lembaga Perlindungan Konsumen Swadaya Masyarakat adalah lembaga non-Pemerintah yang terdaftar dan diakui oleh Pemerintah yang mempunyai kegiatan menangani perlindungan konsumen.',
      // },
      // {
      //   idpasal: '20',
      //   description:
      //     '10.	Klausula Baku adalah setiap aturan atau ketentuan dan syarat-syarat yang telah dipersiapkan dan ditetapkan terlebih dahulu secara sepihak oleh pelaku usaha yang dituangkan dalam suatu dokumen dan/atau perjanjian yang mengikat dan wajib dipenuhi oleh konsumen.',
      // },
      // {
      //   idpasal: '21',
      //   description: '11.	Badan Penyelesaian Sengketa Konsumen adalah badan yang bertugas menangani dan menyelesaikan sengketa antara pelaku usaha dan konsumen.',
      // },
      // {
      //   idpasal: '22',
      //   description: '12.	Badan Perlindungan Konsumen Nasional adalah badan yang dibentuk untuk membantu upaya pengembangan perlindungan konsumen',
      // },
      // {
      //   idpasal: '23',
      //   description: '13.	Menteri adalah menteri yang ruang lingkup tugas dan tanggung jawabnya meliputi bidang perdagangan.',
      // },
    ],
  },
];

export { CarouselData, UupkData };
