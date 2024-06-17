const getBookData = () => [
  {
    id: 123,
    image: "/images/book-moment.png",
    image2: "/images/book-moment.png",
    image3: "/images/book-moment.png",
    title: "A Moment To Decide",
    location: "Sumatera Selatan",
    author: "Dian Dhie",
    owner: "@mikhaya",
    avatar: "/images/default-user.png",
    durationInMonths: 2,
    available: true,
    category: "Romance",
    peminjam: 10,
    antrian: 1,
    description:
      "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
    reviews: [
      {
        id: 1,
        avatar: "/images/default-user.png",
        reviewer: "Fitria Susanti",
        numberLoan: 1,
        comment:
          "Buku ini sangat inspiratif dan membuka wawasan baru. Saya benar-benar merekomendasikannya. Kondisi bukunya juga masih sangat baik, tanpa ada kerusakan.",
      },
      {
        id: 2,
        avatar: "/images/default-user.png",
        reviewer: "Rama Yulianto",
        numberLoan: 2,
        comment:
          "Membaca buku ini memberikan banyak pelajaran hidup yang berharga. Bukunya dalam kondisi sempurna saat saya mengembalikannya.",
      },
      {
        id: 3,
        avatar: "/images/default-user.png",
        reviewer: "Susi Syafitri",
        numberLoan: 3,
        comment:
          "Buku ini sangat menginspirasi dan mudah dipahami. Saya sangat menikmati setiap halaman. Kondisi fisiknya masih sangat baik.",
      },
      {
        id: 4,
        avatar: "/images/default-user.png",
        reviewer: "Yoko Darsono",
        numberLoan: 4,
        comment:
          "Pengalaman membaca buku ini sangat luar biasa. Banyak motivasi yang saya dapatkan. Buku ini juga masih dalam kondisi bagus.",
      },
      {
        id: 5,
        avatar: "/images/default-user.png",
        reviewer: "Yaman Abusalam",
        numberLoan: 5,
        comment:
          "Buku ini penuh dengan ide-ide yang menarik dan inspiratif. Saya sangat terkesan dengan isinya. Kondisi buku masih sangat baik, tidak ada kerusakan.",
      },
      {
        id: 6,
        avatar: "/images/default-user.png",
        reviewer: "Tio Wardoyo",
        numberLoan: 6,
        comment:
          "Isi buku ini benar-benar memotivasi saya untuk lebih baik lagi. Sangat direkomendasikan untuk dibaca. Kondisinya juga masih terjaga dengan baik.",
      },
      {
        id: 7,
        avatar: "/images/default-user.png",
        reviewer: "Maulana Suhartoyo",
        numberLoan: 7,
        comment:
          "Membaca buku ini sangat mengubah cara pandang saya terhadap banyak hal. Kondisi buku masih sangat bagus saat saya mengembalikannya.",
      },
      {
        id: 8,
        avatar: "/images/default-user.png",
        reviewer: "Sadil Isra",
        numberLoan: 8,
        comment:
          "Buku ini penuh dengan inspirasi dan motivasi. Saya sangat menikmatinya. Kondisi fisik bukunya juga masih sangat baik.",
      },
    ],
  },
  {
    id: 234,
    image: "/images/book-priyayi.png",
    image2: "/images/book-priyayi.png",
    image3: "/images/book-priyayi.png",
    title: "Para Priyayi",
    location: "Lampung",
    author: "Umar K",
    owner: "@amarullah01",
    avatar: "/images/default-user.png",
    durationInMonths: 1,
    available: true,
    category: "Romance",
    peminjam: 2,
    antrian: 1,
    description:
      "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
    reviews: [
      {
        id: 1,
        avatar: "/images/default-user.png",
        reviewer: "Ayu Lestari",
        numberLoan: 1,
        comment:
          "Cerita yang sangat mendalam dan emosional. Sangat menyentuh hati saya. Kondisi buku sangat baik.",
      },
      {
        id: 2,
        avatar: "/images/default-user.png",
        reviewer: "Budi Santoso",
        numberLoan: 2,
        comment:
          "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya.",
      },
      // {
      //   id: 3,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Citra Wibowo",
      //   numberLoan: 3,
      //   comment:
      //     "Buku yang penuh dengan nilai-nilai kehidupan. Sangat direkomendasikan. Kondisinya sangat baik.",
      // },
      // {
      //   id: 4,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Dodi Pratama",
      //   numberLoan: 4,
      //   comment:
      //     "Membaca buku ini memberikan wawasan baru. Sangat berharga. Buku dalam kondisi baik.",
      // },
      // {
      //   id: 5,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Eka Rahman",
      //   numberLoan: 5,
      //   comment:
      //     "Sangat menginspirasi. Cerita yang mendalam dan penuh makna. Kondisi buku sangat baik.",
      // },
      // {
      //   id: 6,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Fina Rahayu",
      //   numberLoan: 6,
      //   comment:
      //     "Buku ini memberikan banyak pelajaran hidup. Sangat bermanfaat. Kondisinya sangat baik.",
      // },
      // {
      //   id: 7,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Gilang Purnama",
      //   numberLoan: 7,
      //   comment:
      //     "Cerita yang sangat menarik dan inspiratif. Buku dalam kondisi sangat baik saat saya mengembalikannya.",
      // },
      // {
      //   id: 8,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Hani Nuraini",
      //   numberLoan: 8,
      //   comment:
      //     "Buku ini sangat memotivasi dan inspiratif. Saya sangat menikmatinya. Kondisi buku sangat baik.",
      // },
    ],
  },
  {
    id: 356,
    image: "/images/book-alchemist.png",
    image2: "/images/book-alchemist-2.jpeg",
    image3: "/images/book-alchemist-3.jpeg",
    title: "The Alchemist",
    location: "Jawa Timur",
    author: "Paulo C",
    owner: "@amarullah01",
    avatar: "/images/default-user.png",
    durationInMonths: 2,
    available: true,
    category: "Adventure",
    peminjam: 10,
    antrian: 3,
    description:
      "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
    reviews: [
      {
        id: 1,
        avatar: "/images/default-user.png",
        reviewer: "Ivan Setiawan",
        numberLoan: 1,
        comment:
          "Petualangan yang sangat menarik dan inspiratif. Kondisi bukunya sangat baik.",
      },
      {
        id: 2,
        avatar: "/images/default-user.png",
        reviewer: "Joko Nugroho",
        numberLoan: 2,
        comment:
          "Buku ini memberikan banyak pelajaran berharga tentang kehidupan. Kondisi buku sempurna.",
      },
      {
        id: 3,
        avatar: "/images/default-user.png",
        reviewer: "Kiki Anggraini",
        numberLoan: 3,
        comment:
          "Cerita yang sangat memotivasi dan penuh makna. Buku dalam kondisi sangat baik.",
      },
      {
        id: 4,
        avatar: "/images/default-user.png",
        reviewer: "Lia Kurnia",
        numberLoan: 4,
        comment:
          "Buku ini sangat menarik dan inspiratif. Kondisinya sangat baik.",
      },
      {
        id: 5,
        avatar: "/images/default-user.png",
        reviewer: "Mira Sari",
        numberLoan: 5,
        comment:
          "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya.",
      },
      {
        id: 6,
        avatar: "/images/default-user.png",
        reviewer: "Nino Pratama",
        numberLoan: 6,
        comment:
          "Petualangan yang sangat mendalam dan penuh makna. Buku ini dalam kondisi sangat baik.",
      },
      {
        id: 7,
        avatar: "/images/default-user.png",
        reviewer: "Oni Widodo",
        numberLoan: 7,
        comment:
          "Cerita yang sangat menginspirasi. Buku ini dalam kondisi sangat baik.",
      },
      {
        id: 8,
        avatar: "/images/default-user.png",
        reviewer: "Putri Santoso",
        numberLoan: 8,
        comment:
          "Buku ini penuh dengan petualangan dan inspirasi. Saya sangat menikmatinya. Kondisi bukunya sangat baik.",
      },
    ],
  },
  {
    id: 456,
    image: "/images/book-tentangkita.png",
    image2: "/images/book-tentangkita.png",
    image3: "/images/book-tentangkita.png",
    title: "Tentang Kita",
    location: "Banten",
    author: "Tere Liye",
    owner: "@faishaumi",
    avatar: "/images/default-user.png",
    durationInMonths: 3,
    available: true,
    category: "Romance",
    peminjam: 4,
    antrian: 2,
    description:
      "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
    reviews: [
      {
        id: 1,
        avatar: "/images/default-user.png",
        reviewer: "Qori Hidayat",
        numberLoan: 1,
        comment:
          "Cerita yang sangat emosional dan menyentuh. Buku ini dalam kondisi sangat baik.",
      },
      {
        id: 2,
        avatar: "/images/default-user.png",
        reviewer: "Rina Sari",
        numberLoan: 2,
        comment:
          "Buku ini memberikan banyak pelajaran tentang kehidupan. Sangat direkomendasikan. Kondisi buku sangat baik.",
      },
      {
        id: 3,
        avatar: "/images/default-user.png",
        reviewer: "Sari Putri",
        numberLoan: 3,
        comment:
          "Cerita yang sangat inspiratif dan mendalam. Buku dalam kondisi sangat baik.",
      },
      {
        id: 4,
        avatar: "/images/default-user.png",
        reviewer: "Tomi Saputra",
        numberLoan: 4,
        comment:
          "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya.",
      },
      // {
      //   id: 5,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Umar Prasetyo",
      //   numberLoan: 5,
      //   comment:
      //     "Buku ini penuh dengan cerita yang menginspirasi. Sangat direkomendasikan. Kondisinya sangat baik.",
      // },
      // {
      //   id: 6,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Vina Kurnia",
      //   numberLoan: 6,
      //   comment:
      //     "Cerita yang sangat mendalam dan penuh makna. Kondisi buku sangat baik.",
      // },
      // {
      //   id: 7,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Winda Sari",
      //   numberLoan: 7,
      //   comment:
      //     "Buku ini sangat menginspirasi dan emosional. Kondisinya sangat baik.",
      // },
      // {
      //   id: 8,
      //   avatar: "/images/default-user.png",
      //   reviewer: "Xena Mahendra",
      //   numberLoan: 8,
      //   comment:
      //     "Cerita yang sangat menyentuh dan inspiratif. Saya sangat menikmatinya. Kondisi buku sangat baik.",
      // },
    ],
  },
    {
      "id": 567,
      "image": "/images/mermaid-1.png",
      "image2": "/images/mermaid-2.png",
      "image3": "/images/mermaid-3.png",
      "title": "The Little Mermaid",
      "location": "Cikarang",
      "author": "H.C Andersen",
      "owner": "@syifahui",
      "avatar": "/images/default-user.png",
      "durationInMonths": 2,
      "available": true,
      "category": "Adventure",
      "peminjam": 8,
      "antrian": 1,
      "description": "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
      "reviews": [
        {
          "id": 1,
          "avatar": "/images/default-user.png",
          "reviewer": "Qori Hidayat",
          "numberLoan": 1,
          "comment": "Cerita yang sangat emosional dan menyentuh. Buku ini dalam kondisi sangat baik."
        },
        {
          "id": 2,
          "avatar": "/images/default-user.png",
          "reviewer": "Rina Sari",
          "numberLoan": 2,
          "comment": "Buku ini memberikan banyak pelajaran tentang kehidupan. Sangat direkomendasikan. Kondisi buku sangat baik."
        },
        {
          "id": 3,
          "avatar": "/images/default-user.png",
          "reviewer": "Sari Putri",
          "numberLoan": 3,
          "comment": "Cerita yang sangat inspiratif dan mendalam. Buku dalam kondisi sangat baik."
        },
        {
          "id": 4,
          "avatar": "/images/default-user.png",
          "reviewer": "Tomi Saputra",
          "numberLoan": 4,
          "comment": "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya."
        },
        {
          "id": 5,
          "avatar": "/images/default-user.png",
          "reviewer": "Umar Prasetyo",
          "numberLoan": 5,
          "comment": "Buku ini penuh dengan cerita yang menginspirasi. Sangat direkomendasikan. Kondisinya sangat baik."
        },
        {
          "id": 6,
          "avatar": "/images/default-user.png",
          "reviewer": "Vina Kurnia",
          "numberLoan": 6,
          "comment": "Cerita yang sangat mendalam dan penuh makna. Kondisi buku sangat baik."
        },
        {
          "id": 7,
          "avatar": "/images/default-user.png",
          "reviewer": "Winda Sari",
          "numberLoan": 7,
          "comment": "Buku ini sangat menginspirasi dan emosional. Kondisinya sangat baik."
        },
        {
          "id": 8,
          "avatar": "/images/default-user.png",
          "reviewer": "Xena Mahendra",
          "numberLoan": 8,
          "comment": "Cerita yang sangat menyentuh dan inspiratif. Saya sangat menikmatinya. Kondisi buku sangat baik."
        }
      ]
    },
    {
      "id": 678,
      "image": "/images/book-asmuch.png",
      "image2": "/images/book-asmuch.png",
      "image3": "/images/book-asmuch.png",
      "title": "As Much As I Love You",
      "location": "Pasar Minggu",
      "author": "Wulan K",
      "owner": "@marwah",
      "avatar": "/images/default-user.png",
      "durationInMonths": 1,
      "available": true,
      "category": "Romance",
      "peminjam": 4,
      "antrian": 2,
      "description": "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
      "reviews": [
        {
          "id": 1,
          "avatar": "/images/default-user.png",
          "reviewer": "Qori Hidayat",
          "numberLoan": 1,
          "comment": "Cerita yang sangat emosional dan menyentuh. Buku ini dalam kondisi sangat baik."
        },
        {
          "id": 2,
          "avatar": "/images/default-user.png",
          "reviewer": "Rina Sari",
          "numberLoan": 2,
          "comment": "Buku ini memberikan banyak pelajaran tentang kehidupan. Sangat direkomendasikan. Kondisi buku sangat baik."
        },
        {
          "id": 3,
          "avatar": "/images/default-user.png",
          "reviewer": "Sari Putri",
          "numberLoan": 3,
          "comment": "Cerita yang sangat inspiratif dan mendalam. Buku dalam kondisi sangat baik."
        },
        {
          "id": 4,
          "avatar": "/images/default-user.png",
          "reviewer": "Tomi Saputra",
          "numberLoan": 4,
          "comment": "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya."
        },
      ]
    },
    {
      "id": 789,
      "image": "/images/book-spring.png",
      "image2": "/images/book-spring.png",
      "image3": "/images/book-spring.png",
      "title": "Spring In London",
      "location": "Batu Ceper",
      "author": "Ilana Tan",
      "owner": "@megawai",
      "avatar": "/images/default-user.png",
      "durationInMonths": 2,
      "available": true,
      "category": "Romance",
      "peminjam": 6,
      "antrian": 1,
      "description": "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
      "reviews": [
        {
          "id": 1,
          "avatar": "/images/default-user.png",
          "reviewer": "Qori Hidayat",
          "numberLoan": 1,
          "comment": "Cerita yang sangat emosional dan menyentuh. Buku ini dalam kondisi sangat baik."
        },
        {
          "id": 2,
          "avatar": "/images/default-user.png",
          "reviewer": "Rina Sari",
          "numberLoan": 2,
          "comment": "Buku ini memberikan banyak pelajaran tentang kehidupan. Sangat direkomendasikan. Kondisi buku sangat baik."
        },
        {
          "id": 3,
          "avatar": "/images/default-user.png",
          "reviewer": "Sari Putri",
          "numberLoan": 3,
          "comment": "Cerita yang sangat inspiratif dan mendalam. Buku dalam kondisi sangat baik."
        },
        {
          "id": 4,
          "avatar": "/images/default-user.png",
          "reviewer": "Tomi Saputra",
          "numberLoan": 4,
          "comment": "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya."
        },
        {
          "id": 5,
          "avatar": "/images/default-user.png",
          "reviewer": "Umar Prasetyo",
          "numberLoan": 5,
          "comment": "Buku ini penuh dengan cerita yang menginspirasi. Sangat direkomendasikan. Kondisinya sangat baik."
        },
        {
          "id": 6,
          "avatar": "/images/default-user.png",
          "reviewer": "Vina Kurnia",
          "numberLoan": 6,
          "comment": "Cerita yang sangat mendalam dan penuh makna. Kondisi buku sangat baik."
        },
        // {
        //   "id": 7,
        //   "avatar": "/images/default-user.png",
        //   "reviewer": "Winda Sari",
        //   "numberLoan": 7,
        //   "comment": "Buku ini sangat menginspirasi dan emosional. Kondisinya sangat baik."
        // },
        // {
        //   "id": 8,
        //   "avatar": "/images/default-user.png",
        //   "reviewer": "Xena Mahendra",
        //   "numberLoan": 8,
        //   "comment": "Cerita yang sangat menyentuh dan inspiratif. Saya sangat menikmatinya. Kondisi buku sangat baik."
        // }
      ]
    },
    {
      "id": 891,
      "image": "/images/book-mermaid.png",
      "image2": "/images/book-mermaid.png",
      "image3": "/images/book-mermaid.png",
      "title": "Plain Jane and the Mermaid",
      "location": "Bekasi",
      "author": "Maia",
      "owner": "@stayfetters",
      "avatar": "/images/default-user.png",
      "durationInMonths": 3,
      "available": true,
      "category": "Animasi",
      "peminjam": 8,
      "antrian": 3,
      "description": "Buku yang menurut saya sangat asik untuk dibaca, untuk kalian yang ingin membaca komik yang seru, saya rekomendasikan untuk baca ini. Saya berharap buku ini akan terus dilanjutkan. Biar makin banyak bibit-bibit orang hebat di negeri kita!",
      "reviews": [
        {
          "id": 1,
          "avatar": "/images/default-user.png",
          "reviewer": "Qori Hidayat",
          "numberLoan": 1,
          "comment": "Cerita yang sangat emosional dan menyentuh. Buku ini dalam kondisi sangat baik."
        },
        {
          "id": 2,
          "avatar": "/images/default-user.png",
          "reviewer": "Rina Sari",
          "numberLoan": 2,
          "comment": "Buku ini memberikan banyak pelajaran tentang kehidupan. Sangat direkomendasikan. Kondisi buku sangat baik."
        },
        {
          "id": 3,
          "avatar": "/images/default-user.png",
          "reviewer": "Sari Putri",
          "numberLoan": 3,
          "comment": "Cerita yang sangat inspiratif dan mendalam. Buku dalam kondisi sangat baik."
        },
        {
          "id": 4,
          "avatar": "/images/default-user.png",
          "reviewer": "Tomi Saputra",
          "numberLoan": 4,
          "comment": "Pengalaman membaca yang sangat berkesan. Buku ini dalam kondisi sangat baik saat saya mengembalikannya."
        },
        {
          "id": 5,
          "avatar": "/images/default-user.png",
          "reviewer": "Umar Prasetyo",
          "numberLoan": 5,
          "comment": "Buku ini penuh dengan cerita yang menginspirasi. Sangat direkomendasikan. Kondisinya sangat baik."
        },
        {
          "id": 6,
          "avatar": "/images/default-user.png",
          "reviewer": "Vina Kurnia",
          "numberLoan": 6,
          "comment": "Cerita yang sangat mendalam dan penuh makna. Kondisi buku sangat baik."
        },
        {
          "id": 7,
          "avatar": "/images/default-user.png",
          "reviewer": "Winda Sari",
          "numberLoan": 7,
          "comment": "Buku ini sangat menginspirasi dan emosional. Kondisinya sangat baik."
        },
        {
          "id": 8,
          "avatar": "/images/default-user.png",
          "reviewer": "Xena Mahendra",
          "numberLoan": 8,
          "comment": "Cerita yang sangat menyentuh dan inspiratif. Saya sangat menikmatinya. Kondisi buku sangat baik."
        }
      ]
    }
];

export { getBookData };
