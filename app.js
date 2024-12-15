// =========== Massiv metodlar ===========

// =========== find va findIndex metodlari bo‘yicha masalalar ===========

// 1-misol:

// Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.

// let arr = [2, 4, 5, 10, 8, 4, 6];

// let res = arr.find((value) => {
//   return value % 5 == 0;
// });

// console.log(res);

// 2-misol:

// Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.

// let arr = [1, 2, 4, 6, 24, 97, 5, 7];

// let res = arr.find((value) => {
//   return value < 20 && value % 2 == 1;
// });

// console.log(res);

// 3-misol:

// Massiv ichida 0 bilan tugaydigan birinchi elementni toping.

// let arr = [1, 2, 4, 10, 18, 20, 30, 14];

// let res = arr.findIndex((value) => {
//   return value % 10 == 0;
// });

// console.log(res);

// =========== some metodi bo‘yicha masalalar ===========

// 1-misol:

// Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.

// let arr = [32, 93, 12, 1, 4, 7, 74, 102, 93];

// let res = arr.some((value) => {
//   return value >= 50;
// });

// console.log(res);

// 2-misol:

// Massivda manfiy sonlar bor-yo‘qligini aniqlang.

// let arr = [-2, 3, 5, -85, 12];

// let res = arr.some((value) => {
//   return value < 0;
// });

// console.log(res);

// 3-misol:

// Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.

// let arr = [1, 2, 8, 4, 5, 7, 11];

// let res = arr.some((value) => {
//   return value % 3 == 0;
// });

// console.log(res);

// =========== every metodi bo‘yicha masalalar ===========

// 1-misol:

// Massivdagi barcha sonlar musbat ekanligini tekshiring.

// let arr = [1, 2, 3, 4, 5];

// let res = arr.every((value) => {
//   return value > 0;
// });

// console.log(res);

// 2-misol:

// Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.

// let arr = [1, 2, 3, 4, 5, 6, 7, 11];

// let res = arr.every((value) => {
//   return value > 10;
// });

// console.log(res);

// 3-misol:

// Massivdagi barcha sonlar toq ekanligini aniqlang.

// let arr = [1, 3, 6, 5, 7];

// let res = arr.every((value) => {
//   return value % 2 == 1;
// });

// console.log(res);

// =========== String metodlar ===========

// ===========  charAt ===========

// 1-misol:

// Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.

// let text = "Hello World!";

// let res = text.charAt(3);

// console.log(res);

// 2-misol:

// Matnning oxiridan ikkinchi belgisini toping.

// let text = "Hello World!";

// let res = text.charAt(text.length - 2);

// console.log(res);

// ===========  charCodeAt ===========

// 1-misol:

// Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.

// let text = "Hello World!";

// let res = text.charCodeAt(0);

// console.log(res);

// 2-misol:

// Matnning beshinchi belgisining Unicode qiymatini toping.

// let text = "Hello World!";

// let res = text.charCodeAt(4);

// console.log(res);

// =========== slice ===========

// 1-misol:

// Berilgan matndan birinchi 5 ta belgini ajratib oling.

// let text = "Hello World!";

// let res = text.slice(0, 5);

// console.log(res);

// 2-misol:

// Matnning oxirgi 3 ta belgisini ajratib oling.

// let text = "Hello World!";

// let res = text.slice(-3);

// console.log(res);

// ===========  substring ===========

// 1-misol:

// Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.

// let text = "Hello World!";

// let res = text.substring(2, 6);

// console.log(res);

// 2-misol:

// Matnning oxirgi uchta belgisini substring yordamida oling.

// let text = "Hello World!";

// let res = text.substring(text.length - 3);

// console.log(res);

// =========== substr ===========

// 1-misol:

// Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.

// let text = "Hello World!";

// let res = text.substr(4, 5);

// console.log(res);

// 2-misol:

// Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.

// let text = "Hello World!";

// let res = text.substr(0, 7);

// console.log(res);

// =========== toUpperCase, toLowerCase ===========

// 1-misol:

// let text = "Hello World!";
//
// let res = text.toUpperCase();
//
// console.log(res);
//

// 2-misol:

// Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.

// let text = "Hello World!";

// let half = text.slice(0, text.length / 2).toLowerCase();

// let half2 = text.slice(text.length / 2).toUpperCase();

// console.log(half, half2);

// =========== concat ===========

// 1-misol:

// Berilgan ikkita matnni birlashtiring.

// let text1 = "Hello ";

// let text2 = "World!";

// console.log(text1.concat(text2));

// 2-misol:

// Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.

// let text = "Hello World";

// let belgi = "!";

// console.log(text.concat(belgi));

// =========== trim, trimStart, trimEnd ===========

// 1-misol:

// Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.

// let text = "       Hello World!    ";

// let res = text.trim();

// console.log(res);

// 2-misol:

// Matnning faqat boshidagi bo‘sh joylarni olib tashlang.

// let text = "       Hello World!    ";

// let res = text.trimStart();

// console.log(res);

// =========== padStart, padEnd ===========

// 1-misol:

// Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.

// let text = "Hello";

// let res = text.padStart(10, "*");

// console.log(res);

// 2-misol:

// Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.

// let text = "Hello";

// let res = text.padEnd(15, "#");

// console.log(res);

// =========== repeat ===========

// 1-misol:

// Matnni 3 marta takrorlab yangi matn yarating.

// let text = "Hello World! ";

// let res = text.repeat(3)
// console.log(res);

// 2-misol:

// Belgini 5 marta takrorlab, string yaratib oling.

// let text = "Hello World! ";

// let str = text.repeat(5)
// console.log(res);

// =========== replace, replaceAll ===========

// 1-misol:

// Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.

// let text = "assalomu alaykum!";

// let res = text.replace("a", "o");

// console.log(res);

// 2-misol:

// Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.

// let text = "Hello World! nima gap";
// let res = text.replace(/ /g, "_");

// console.log(res);

// ================= split ==================

// 1-misol:

// Matnni har bir so‘zdan ajratib massivga aylantiring.

// let text = "salom ahvollar yaxshimi?";

// let res = text.split (" ");

// console.log(res);

// 2-misol:

// Matnni har bir belgidan ajratib massiv yarating.

// let text = "salom,ahvollar,yaxshimi?";

// let res = text.split ("");

// console.log(res);

// =========== indexOf, lastIndexOf ===========

// 1-misol:

// Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.

// let text = "nok, kivi, apelsin";

// let res = text.indexOf("a")

// console.log(res);

// 2-misol:

// Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.

// let text = "nok, kivi, apelsin";

// let res = text.lastIndexOf("e")

// console.log(res);

// =========== includes ===========

// 1-misol:

// Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.

// let text = "hello world!";

// let res = text.includes("hello");

// console.log(res);

// 2-misol:

// Matn ichida "!" belgisi mavjudligini aniqlang.

// let text = "hello world";

// let res = text.includes("!");

// console.log(res);

// =========== search ===========

// 1-misol:

// Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.

// let text = "hello world, good";

// let res = text.search("good");

// console.log(res);

// Matnda raqam uchraydigan joyni aniqlang.
// 2-masala

// let text = "olmea,goo3d,kamaze";
// let res = text.search(/\d/);
// console.log(res);

// ===============  startsWith, endsWith ================

// 1-misol:

// Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.

// let text = "Hello World!";

// console.log(text.startsWith("Hello"));

// 2-misol:

// Matn oxirida "bye" so‘zi borligini aniqlang.

// let text = "hello world!";

// console.log(text.endsWith("bye"));

// =========== Massiv ichida obyektlar ===========

// 1-misol:

// users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];
// let res = users.filter((value) => value.age > 25);

// console.log(res);

// 2-misol:

//  products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.

// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 },
// ];

// let res = products.filter((value) => value.price < 500);

// console.log(res);

// 3-misol:

// tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.

// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" },
// ];

// let res = tasks.filter((value) => value.status === "pending");

// console.log(res);

// 4-misol:

//  users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];

// let res = users.filter((value) => value.isActive === true);

// console.log(res);

// 5-misol:

//  products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.

// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 },
// ];

// products.sort((a, b) => b.rating - a.rating);

// let res = products[0];

// console.log(res);

// 6-misol:

// users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];
// let res = users.map(value => ({
//   name: value.name,
//   age: value.age,
// }));

// console.log(res);

// 7-misol:

//  products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.

// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 },
// ];

// products.sort((a, b) => a.price - b.price);

// let res = products[0];

// console.log(res);

// 8-misol:

//  tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.

// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" },
// ];

// let res = tasks.findIndex((value) => value.title === "Clean room");

// console.log(res);

// 9-misol:

//  users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];

// let sum = 0;

// users.forEach((value) => {
//   sum += value.age;
// });

// console.log(sum);

// 10-misol:

// products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.

// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 },
// ];

// products.forEach((value) => {
//   console.log(value.price - value.price * 0.1);
// });

// 11-misol:

// users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];

// let res = users.filter((value) => value.name === "Ali");

// console.log(res);

// 12-misol:

//  tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.

// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "completed" },
//   { id: 3, title: "Go shopping", status: "completed" },
// ];

// let res = tasks.filter((value) => value.status === "completed");

// console.log(res);

// 13-misol:

//  products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.

// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 3.9 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 },
// ];

// let counter = 0;

// products.forEach((value) => {
//   if (value.rating > 4) {
//     counter++;
//   }
// });

// console.log(counter);

// 14-misol:

// users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true },
// ];

// users.sort((a, b) => b.age - a.age);

// let res = users[0];

// console.log(res);

// 15-misol:

// tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.

// let tasks = [
//   { id: 1, title: "do homework", status: "completed" },
//   { id: 2, title: "clean room", status: "pending" },
//   { id: 3, title: "go shopping", status: "pending" },
// ];

// let res = tasks.map((value) => {
//   return value.title.charAt(0).toUpperCase() + value.title.slice(1);
// });

// console.log(res);
