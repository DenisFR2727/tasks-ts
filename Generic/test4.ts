// interface IStudents {
//   name: string;
//   grades: number[];
// }
// interface Student {
//   name: string;
//   grades: number;
// }
// let students: IStudents[] = [
//   { name: "John", grades: [90, 78, 92, 88] },
//   { name: "Mary", grades: [85, 80, 82, 84] },
//   { name: "Steve", grades: [92, 90, 91, 94] },
// ];

// function getTopStudent(students: IStudents[]): string {
//   let topStudent = { name: "", grades: 0 };

//   for (let item of students) {
//     const sum = item.grades.reduce((acc, next) => acc + next, 0);
//     const avg = sum / item.grades.length;
//     if (avg > topStudent.grades) {
//       topStudent.name = item.name;
//       topStudent.grades = avg;
//     }
//   }
//   return `${topStudent.name} ${topStudent.grades}`;
// }
// const res = getTopStudent(students);
// console.log(res);

// ------------------------------------------------------------
// interface IContacts {
//   name: string;
//   phoneNumber: string;
// }

// let contacts: IContacts[] = [
//   { name: "John", phoneNumber: "123456789" },
//   { name: "Mary", phoneNumber: "987654321" },
//   { name: "Steve", phoneNumber: "456123789" },
// ];

// function findPhoneNumber(
//   name: string,
//   contacts: IContacts[]
// ): IContacts | string {
//   const nameContact = contacts.find((contact) => contact.name === name);
//   return nameContact ? nameContact.phoneNumber : "Not found!";
// }
// const res2 = findPhoneNumber("Mary", contacts);
// console.log(res2);

// --------------------------------------

interface IPerson {
  name: string;
  age: number;
}

let people: IPerson[] = [
  { name: "John", age: 23 },
  { name: "Mary", age: 30 },
  { name: "Steve", age: 15 },
];

function findOldestPerson(people: IPerson[]): IPerson | string {
  let maxAge = people[0];
  for (let person of people) {
    if (person.age > maxAge.age) {
      maxAge = person;
    }
  }
  return maxAge ? maxAge.name : "Not found!";
}
const res = findOldestPerson(people);
console.log(res);
// __________________________________________________________

// interface IBook {
//   title: string;
//   author: string;
// }

// let books: IBook[] = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "1984", author: "George Orwell" },
//   { title: "Animal Farm", author: "George Orwell" },
// ];

// function findBooksByAuthor(books: IBook[], author: string): string[] {
//   // return books
//   //   .filter((book) => book.author === author)
//   //   .map((book) => book.title);
//   let findBooksByAuthor: string[] = [];
//   for (let book of books) {
//     if (book.author === author) {
//       findBooksByAuthor.push(book.title);
//     }
//   }
//   return findBooksByAuthor;
// }
// const resBook = findBooksByAuthor(books, "George Orwell");
// console.log(resBook);
// --------------------

// function reverseWords(str: string): string {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].split("").reverse().join("");
//   }
//   return words.join(" ");
// }
// const res2 = reverseWords("This is an example!");
// console.log(res2);

// ------------------------------------------------------

// function findSmallestNumber(numbers: number[]): number {
//   let min = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) min = numbers[i];
//   }
//   return min;
// }
// const minNum = findSmallestNumber([34, 15, 88, 2]);
// console.log(minNum);

// ----------------------------------------------------------------

// function sortWordsByLength(str: string): string {
//   const sortedWords = str.split(" ").sort((a, b) => a.length - b.length);
//   return sortedWords.join(" ");
// }
// const res3 = sortWordsByLength("Hello world I am a programmer");
// console.log(res3);

// -------------------------------

// function shiftVowels(str: string) {
//   const vowels = "aeiou";
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       const index = vowels.indexOf(str[i]);
//       result += vowels[(index + 1) % vowels.length];
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// const res4 = shiftVowels("hello");
// console.log(res4);

// ----------------------------------------------

function incrementNumbers(numbers: number[]): number[] {
  return numbers.map((num) => num + 1);
}
const res5 = incrementNumbers([1, 2, 3, 4]);
console.log(res5);

// ---------------------------

function countUniqueCharacters(str: string): string {
  const uniqChar = new Set(str);
  return `${uniqChar.size} (${[...uniqChar].join(", ")})`;
}
const res6 = countUniqueCharacters("hello");
console.log(res6);
// --------------------------------------------------------------

// function findMostFrequentNumber(numbers: number[]) {
//   let obj: any = {};
//   for (let i = 0; i < numbers.length; i++) {
//     if (obj[numbers[i]]) {
//       obj[numbers[i]]++;
//     } else {
//       obj[numbers[i]] = 1;
//     }
//   }
//   const arr: number[] = Object.values(obj);
//   const max = Math.max(...arr);
//   return Number(Object.keys(obj).find((key) => obj[key] === max));
// }
// const res7 = findMostFrequentNumber([1, 2, 3, 2, 2, 4]);
// console.log(res7);

// ---------------------------------------------------

function returnToNumber(...str: string[]): number {
  let strToNum: string = "";
  let arrNum: any = [];
  for (let i = 0; i < str.length; i++) {
    const arrStrToNum: any = str[i].match(/\d+/g);
    strToNum = `${arrStrToNum[0]}${arrStrToNum[arrStrToNum.length - 1]}`;
    arrNum.push(strToNum);
  }
  return arrNum.reduce(
    (acc: string, next: string) => Number(acc) + Number(next),
    0
  );
}
const res8 = returnToNumber("abc1def2", "dhij3klm", "4no5p6qr"); // 91

console.log(res8);
// Написати функцію яка приймає повний шлях до файлу та повертає число!
// Файл може містити довільну кількість рядків , кожен з яких містить мінімум одну цифру .
// Необхідно знайти першу та останню цифру та скласти їх у число . Функція має сформувати числа для кожного рядка та повернути їх сумму

function doubleCharacters(str: string): string {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}

const res9 = doubleCharacters("Hello");
console.log(res9);

// -----------------------------------------------------
function sumEvenNumbers(numbers: number[]): number {
  return numbers.reduce((acc, next) => (next % 2 === 0 ? acc + next : acc), 0);
}
const res10 = sumEvenNumbers([1, 2, 3, 4]);
console.log(res10);
// ------

function createCounter(value: number = 0) {
  function increment() {
    value++;
  }
  function getValue() {
    return value;
  }
  return {
    increment,
    getValue,
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

// -------------------------------
console.log("-----");
function highAndLow(numbers: string) {
  let arrLowAndHeight: number[] = [];
  const sorted = numbers
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => +a - +b);

  arrLowAndHeight.push(sorted[sorted.length - 1]);
  arrLowAndHeight.push(sorted[0]);

  return arrLowAndHeight.join(" ");
}
const resultHightAndLow = highAndLow("1 2 3 4 5 -10");
console.log(resultHightAndLow);

// --------------------------------------------

function findDuplicates(arr: number[]) {
  let newArr: number[] = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const duplicate = findDuplicates([1, 2, 3, 2, 1, 5, 6, 5, 7, 8]);
console.log(duplicate);
// ------------------------------

function countVowels(str: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
const resVowels = countVowels("Hello World");
console.log(resVowels);

// -----------------------------

function isPalindrome(s: string) {
  let cleanStr = s.toLowerCase().replace(/\s/g, "");
  let reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
}
const resPalindrome = isPalindrome("A man a plan a canal Panama");
console.log(resPalindrome);
// ----------------------------------

function accum(s: string): string {
  return s
    .split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}
const resAccum = accum("abcd");
console.log(resAccum);

// -------------------------

function findOdd(arr: number[]) {
  const objCount: { [key: number]: number } = {};
  for (const item of arr) {
    objCount[item] = (objCount[item] || 0) + 1;
  }
  for (const item in objCount) {
    if (objCount[item] % 2 !== 0) {
      return Number(item);
    }
    // console.log(objCount[item]);
  }
  return -1;
}
const resOdd = findOdd([
  20, 1, 1, 2, 2, 3, 3, 5, 5, 20, 4, 4, 5, 7, 7, 7, 7, 7, 7, 7,
]);
console.log(resOdd);
// ---------------------------------------
enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}
interface IUser {
  id: number;
  name: string;
  status: Status;
}
const users: IUser[] = [
  { id: 1, name: "Alice", status: Status.Active },
  { id: 2, name: "Bob", status: Status.Inactive },
  { id: 3, name: "Charlie", status: Status.Pending },
  { id: 4, name: "David", status: Status.Active },
  { id: 5, name: "Eve", status: Status.Inactive },
];

function filterByProperty<T, K extends keyof T>(
  items: T[],
  property: K,
  value: T[K]
): T[] {
  return items.filter((item) => item[property] === value);
}

// Використання функції
const activeUsers = filterByProperty(users, "status", Status.Active);
console.log(activeUsers);

// --------------------------------------------
enum Category {
  Electronics = "electronics",
  Clothing = "clothing",
  HomeAppliances = "home appliances",
}
interface IProduct {
  id: number;
  name: string;
  category: Category;
  price: number;
}
const products: IProduct[] = [
  { id: 1, name: "Laptop", category: Category.Electronics, price: 1000 },
  { id: 2, name: "Shirt", category: Category.Clothing, price: 50 },
  { id: 3, name: "Coffee Maker", category: Category.HomeAppliances, price: 80 },
  { id: 4, name: "Headphones", category: Category.Electronics, price: 200 },
  { id: 5, name: "Jeans", category: Category.Clothing, price: 60 },
];

function filterProductsByCategory<T, K extends keyof T>(
  products: T[],
  name: K,
  value: T[K]
): T[] {
  return products.filter((product) => product[name] === value);
}
const resFilterProductsByCategory = filterProductsByCategory(
  products,
  "category",
  Category.Electronics
);
console.log(resFilterProductsByCategory);
