// console.log="Hallo nama saya adalah Fedro Saut Wibsiono Togatorop";

// console.log("before differ");

// if (1+1===3  ) {
//     console.log("true");
// }else{
//     console.log("wrong");
// }

// let angka = Math.random();
// console.log(angka);
// if (angka>=0.5) {
//     console.log("The number is bigger than");
// }else{
//     console.log("The number is smaller than");
// }

// const iniHari = prompt("Input day").toLowerCase();

// if (iniHari === "monday") {
//   console.log("Happy Work Week Guys");
// } else if (iniHari === "saturday") {
//   console.log("Happy Weekend Guys");
// } else {
//   console.log("same as like as Work Week");
// }

// const nilai = "80";

// if (nilai > 80) {
//   console.log("A");
// } else if (nilai > 60) {
//   console.log("B");
// } else if (nilai > 40) {
//   console.log(C);
// } else console.log("You will remedial");

// const password = prompt("Make Password");

// // Password should be long 6 word character
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password can't has space");
//   } else {
//     console.log("Password valid");
//   }
// } else {
//   console.log("Password minimum 6 character");
// }

// const password = prompt("Make Password");

// // Password should be long 6 word character
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password can't has space");
//   } else {
//     console.log("Password valid");
//   }
// } else {
//   console.log("Password minimum 6 character");
// }

// if (password.length >= 6 && password.indexOf(" " === -1)) {
//   console.log("Password Valid");
// } else {
//   console.log("Password invalid");
// }

// const role = prompt("input account role");
// if (role === "admin" || role === "spv") {
//   console.log("You can't access");
// } else {
//   console.log("you can access");
// }

// const role = prompt("input account role");
// if (role !== "admin") {
//   console.log("You can't access");
// } else {
//   console.log("you can access");
// }

// const balonku = prompt("Input warna balon");
// switch (balonku) {
//   case "merah":
//     console.log("merah");
//     break;
//   case "hijau":
//     console.log("hijau");
//     break;
//   case "biru":
//     console.log("biru");
//     break;
// }

// array
// let playlist = ["1", "2", "3", "4"];
// console.log(playlist[3]);
// console.log(playlist[2]);
// console.log(playlist[1]);
// console.log(playlist[0]);
// console.log((playlist[2] = "Hijau"));

// Pengulangan
// for (let i = 1; i < 10; i += 1) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// const animals = ["Cat", "Dog", "Fly", "Dragon Fly", "Be"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// const pilihan = "abcd";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal Nomor ${1}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`${pilihan[j]}. Pilihan jawaban`);
//   }
// }

// const studentRow = [
//   ["Livia", "Fedro", "Emma", "Noah"],
//   ["Joel", "Jeri", "Markus", "Sinta"],
//   ["Pars", "Marsha", "Handa", "Taui"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

// const password = "12345";
// let guess = prompt("enter your password");
// while (guess !== password) {
//   guess = prompt("enter your password");
// }
// alert("congratulation your password is corect");

// const pw = "1";
// let owner = prompt("enter your password boss");
// while (owner !== password) {
//   owner = prompt("enter your password boss");
// }
// alert("congratulation boss");

// let maximum = parseInt(prompt("masukkan nilai maksimal"));
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan nilai maksimal"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Isi tebakkan pertama kamu"));
// while (parseInt(guess) !== targetNum) {
//   if (guess > targetNum) {
//     guess = prompt("Terlalu tinggi! tebak lagi");
//   } else {
//     guess = prompt("Terbakan telalu rendah");
//   }
// }

// alert("selamat anda benar");

// const fruits = ["Banana", "Dragon Fruit", "Apple", "Strawberry"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(`buah ${fruit[i]}`);
// }

// for (let fruit of fruits) {
//   console.log(`buah ${fruit}`);
// }

// const studentRow = [
//   ["Livia", "Fedro", "Emma", "Noah"],
//   ["Joel", "Jeri", "Markus", "Sinta"],
//   ["Pars", "Marsha", "Handa", "Taui"],
// ];
// for (let row of studentRow) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// function twoSum(arr, target) {
//   let hasil = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         hasil.push([arr[i], arr[j]]);
//         return hasil;
//       }
//     }
//   }
//   return hasil;
// }

// // Contoh penggunaan:
// let angka = [5, 1, 2];
// console.log(twoSum(angka, 5)); // Output: [[1, 2]]

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return;
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// const getLastWordLength = (sentence) => { / fail
//   const words = sentence.splt("Halo").filter((word) => word !== "");
//   return words.getLastWordLength > 0 ? words[words.length - 1].length : 0;
// };

// var lengthOfLastWord = function (s) {
//   let result = s.trim().split("hallo ini saya");
//   result = result[result.length - 1].length;
//   return result;
// };

// const studentScore = {
//   olivia: 20,
//   Liam: 13,
//   Emma: 40,
//   Noah: 18,
//   Oliver: 10,
//   Ava: 11,
//   Elijah: 21,
// };
// // for (let student in studentScore) {
// //   console.log(`${student} memiliki skor ${studentScore[student]}`);
// // }

// let total = 0;
// let scores = Object.values(studentScore);
// for(let score of scores)
//   total+=score;

// let lemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(lemparDadu);

// function lemparDadu() {
//   console.log(Math.random() * 6 + 1);
// }

// function nanyi() {
//   console.log("Cek...");
//   console.log("Do re mi");
// }

// nanyi();

// function selamatPagi(name) {
//   console.log(`halo, ${name}. Selamat Pagi`);
// }

// selamatPagi("Aim");

// const nama = "Fedro";
// const umur = 22;
// console.log(`Halo, perkenalkan nama saya ${nama}, dan saya ber-umur ${umur}`);

// function jumlahkan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Bukan angka";
//   }
//   return a + b;
// }

// let programming = "JavaScript";
// // local scope and global scope
// function typeSafe() {
//   // let programming = "TypeScript";
//   programming = "TypeScript";
//   console.log(programming);
// }
// // console.log(programming);
// typeSafe();

// let tinggi = 8;
// if (tinggi > 5) {
//   // let lebar = 10;
//   var lebar = 10; //var itu bisa digunakan untuk semua scope walaupun di deklarasikan di local scope
//   console.log(lebar); // Disarankan untuk tidak menggunakan variable var
// }
// console.log(`lebar, ${lebar}`);

// for (let i = 0; i < 10; i++) {
//   var indexNumber = i;
// }
// console.log(`Ini adalah nomor ${indexNumber}`);

// console.log("Hello ini adalah pertama kali saya belajar NODE JS");

// for (let i = 0; i < 10; i++) {
//   console.log(`Angka ke. ${i}.`);
// }

// function perpangkatan(nilai) {
//   return nilai * nilai;
// }
// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;
// };

// hasilPerpangkatan(10);

// function di dalam function

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.random(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// const saya = {
//   nama: "aim",
//   hobi: "Mancing",
//   kenalan: function () {
//     return `Hi, Saya ${this.nama}. Hobi saya ${this.hobi}`;
//   },
// };

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Silahkan masukkan tipe data string pada argument teriak()");
//   }
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Foreach

// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//   },
//   {
//     title: "Bleach",
//     rating: 89,
//   },
//   {
//     title: "Naruto",
//     rating: 95,
//   },
// ];

// animes.forEach(function (anime) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function (num) {
//   return number * 2;
// });

// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const perpangkatan = (x) => {
//   return x * x;
// };

// const random = () => Math.floor(Math.random() * 1000);
// const add = (a, b) => a + b;

// function myFunction(a, b) {
//   if (a.includes(b)) {
//     return b + a;
//   } else {
//     return a + b;
//   }
// }

// console.log(myFunction("cheese", "cake"));

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaGanjil = angka.filter((n) => {
//   return n % 2 === 1;
// });
// const angkaGenap = angka.filter((n) => {
//   return n % 2 === 0;
// });

// const angkaBaru = angka.filter((n) => {
//   return n < 5;
// });

// const examScore = [80, 90, 85, 82, 95, 77];
// const isGraduate = examScore.every((score) => score >= 75); //every
// const lulus = examScore.some((score) => score >= 96); //practice for some
// const TidakLulus = examScore.every((nilai) => nilai >= 77); //practice

// // for (let score of examScore) {
// //   total += score;
// // }

// const total = examScore.reduce((total, score) => {
//   return total + score;
// });
// const animes = [
//   {
//     title: "Attack On Titan",
//     rating: 90,
//     year: 2023,
//   },
//   {
//     title: "Naruto",
//     rating: 95,
//     year: 2024,
//   },
//   {
//     title: "One Piece",
//     rating: 80,
//     year: 2022,
//   },
//   {
//     title: "Boruto",
//     rating: 88,
//     year: 2023,
//   },
//   {
//     title: "Tayo",
//     rating: 70,
//     year: 2018,
//   },
//   {
//     title: "Pulu",
//     rating: 84,
//     year: 2012,
//   },
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 85); //filter
// const animeJudulBagus = animeBagus.map((anime) => anime.title); //--
// const animeBaja = animes.filter((anime) => anime.rating <= 85); //--
// const animeTahun = animes.filter((anime) => anime.year <= 2023); //--
// const isAnimeListNew = animes.some((anime) => anime.year > 2025); //some

// // const bestAnime = animes.reduce((bestAnime, currAnime) => {
// //   //reduce
// //   console.log(bestAnime, currAnime);
// //   if (currAnime.rating > bestAnime.rating) {
// //     return currAnime;
// //   }
// //   return bestAnime;
// // });

// const badAnime = animes.reduce((badAnime, currAnime) => {
//   console.log(badAnime, currAnime);
//   if (currAnime.rating > badAnime.rating) {
//     return currAnime;
//   }
//   return badAnime;
// });

// const person = {
//   firstName: "Fedro",
//   lastName: "Togatorop",
//   fullName: () => {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
//   panggilNanti: function(){
//     setTimeout(function (){
//       console.log(this.firstName);

//     },S3000)
//   }
// };

// function lemparDadu(sisi = 6) {
//   return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name, msg = "halo") {
//   console.log(`${name} ${msg}`);
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ["fedro", "amad", "richardo", "sela", "Cici"];
// const campuran = [...angka, ...nama];

// const user = {
//   name: "fedro",
//   email: "fedrotoga@gmail.com",
// };
// const credential = {
//   password: "password",
//   token: "1287ejhd",
// };

// const userBaru = { ...user, ...credential };

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// const name = ["Fedro", "Saut", "wibisono", "Togatorop"];
// const winner = (gold, silver, bronze, ...sisa) => {
//   console.log(`Medali emas diraih ${gold}`);
//   console.log(`Medali silver diraih ${silver}`);
//   console.log(`Medali bronze diraih ${bronze}`);
//   console.log(`peserta lainnya ${sisa}`);
// };
// const = [gold, silver, bronze, ...sisa]=name
// const peserta = ["batman", "superman", "suparman"];
// const [satu, dua, tiga] = peserta;
// const [juara, ...peserta] = peserta;

// const user = {
//   name: "fedro",
//   email: "fedrotoga@gmail.com",
//   role: "admin",
// };
// // const { name, email, phone } = user;
// const userAndRole = ({ name, role }) => {
//   return `${name} ${role}`;
// };

const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2002,
  },
  {
    title: "Bleach",
    rating: 89,
    year: 2001,
  },
  {
    title: "Naruto",
    rating: 95,
    year: 2002,
  },
];

const anime = animes.map((title, year, rating) => {
  return `${title} (${year}) ${rating}`;
});
