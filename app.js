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

const password = prompt("Make Password");

// Password should be long 6 word character
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password can't has space");
  } else {
    console.log("Password valid");
  }
} else {
  console.log("Password minimum 6 character");
}
