// interface Person {
//   name: string;
//   age: number;
//   gender: string;
// }
// let obj: Person = { name: "John", age: 30, gender: "male" };
// type PartialPerson = Partial<Person>;
// function isPerson(obj: unknown): boolean {
//   if (typeof obj === "object" && obj !== null) {
//     const { name, age, gender } = obj as PartialPerson;
//     return (
//       typeof name === "string" &&
//       typeof age === "number" &&
//       typeof gender === "string"
//     );
//   }
//   return false;
// }
// const res = isPerson(obj);
// console.log(res);
// ------------------------------------
type Square = Array<number>;
let square: Square = [1, 2, 2];

function squareSum(arr: Square): number {
  return arr.reduce((acc, next) => acc + Math.pow(next, 2), 0);
}
const squareRes = squareSum(square);
console.log(squareRes);
// ----------------------------------------
function reverseWords(str: string): string {
  return str
    .split(" ")
    .map((s) => s.split("").reverse().join(""))
    .join(" ");
}
const reverse = reverseWords("This is an example!");
console.log(reverse);
// -------------------------------------------------//
interface Obj1 {
  a: number;
  b: number;
}
interface Obj2 {
  b: number;
  c: number;
}
function mergeObjects<T extends {}, U extends {}, P extends T | U>(
  obj1: T,
  obj2: U,
  prop: string
): (T & U) | null {
  const employee = Object.assign({}, obj1, obj2);
  if (
    Object.keys(obj1).length === 0 ||
    Object.keys(obj2).length === 0 ||
    !employee.hasOwnProperty(prop)
  ) {
    return null;
  } else {
    return employee;
  }
}
let obj1: Obj1 = { a: 1, b: 2 };
let obj2: Obj2 = { b: 3, c: 4 };

let result = mergeObjects(obj1, obj2, "x");
console.log(result); // повинно вивести { a: 1, b: 3, c: 4 }

// interface Manager {
//   id: string;
//   name: string;
//   role: string;
// }
// interface Projects {
//   id: string;
//   name: string;
//   technologies: string[];
// }
// interface Employee {
//   id: string;
//   name: string;
//   role: string;
//   skills: string[];
//   manager: Manager;
//   projects: Projects[];
// }

// let employee: Employee = {
//   id: "E001",
//   name: "John Doe",
//   role: "Software Engineer",
//   skills: ["JavaScript", "TypeScript", "React"],
//   manager: {
//     id: "E002",
//     name: "Jane Smith",
//     role: "Engineering Manager",
//   },
//   projects: [
//     {
//       id: "P001",
//       name: "Website redesign",
//       technologies: ["HTML", "CSS", "JavaScript"],
//     },
//     {
//       id: "P002",
//       name: "TypeScript migration",
//       technologies: ["TypeScript"],
//     },
//   ],
// };
// // -----------------------------------------------
// interface Person {
//   id: string;
//   name: string;
// }
// interface Address {
//   street: string;
//   city: string;
//   state: string;
//   postalCode: string;
// }
// interface Teacher extends Person {
//   subject: string;
// }
// interface Classes {
//   id: string;
//   name: string;
//   teacher: Teacher;
// }
// interface Students extends Person {
//   grade: number;
//   classes: Classes[];
// }
// interface School {
//   name: string;
//   address: Address;
//   students: Students[];
// }

// let school: School = {
//   name: "High School",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "Anystate",
//     postalCode: "12345",
//   },
//   students: [
//     {
//       id: "S001",
//       name: "John Doe",
//       grade: 9,
//       classes: [
//         {
//           id: "C001",
//           name: "Math",
//           teacher: {
//             id: "T001",
//             name: "Jane Smith",
//             subject: "Math",
//           },
//         },
//         {
//           id: "C002",
//           name: "English",
//           teacher: {
//             id: "T002",
//             name: "John Johnson",
//             subject: "English",
//           },
//         },
//       ],
//     },
//     // more students...
//   ],
// };

// -----------------------------------------------
// enum Genre {
//   Fiction,
//   Science,
//   History,
//   Biography,
//   Mystery,
// }
// interface Author {
//   name: string;
//   birthYear: number;
// }
// interface Books<T> {
//   title: string;
//   author: T;
//   genre: Genre;
//   year: Number;
// }
// interface Library<T> {
//   books: Books<T>[];
// }
// const library: Library<Author> = {
//   books: [
//     {
//       title: "The Great Gatsby",
//       author: {
//         name: "F. Scott Fitzgerald",
//         birthYear: 1896,
//       },
//       genre: Genre.Fiction,
//       year: 1925,
//     },
//     {
//       title: "A Brief History of Time",
//       author: {
//         name: "Stephen Hawking",
//         birthYear: 1942,
//       },
//       genre: Genre.Science,
//       year: 1988,
//     },
//     // more books...
//   ],
// };
// // -------------------------------------------

// interface Queue<T> {
//   enqueue(item: T): void;
//   dequeue(): T | undefined;
// }
// class MyQueue<T> implements Queue<T> {
//   private items: T[] = [];

//   enqueue(item: T): void {
//     this.items.push(item);
//   }
//   dequeue(): T | undefined {
//     return this.items.shift();
//   }
// }
// const queue = new MyQueue<number>();
// console.log(queue.enqueue(1));
// console.log(queue.dequeue());

// interface Pair<T, U> {
//   first: T;
//   second: U;
//   getFirst: (item: T) => T | undefined;
//   getSecond: (item: U) => U;
// }

// class MyPair<T, U> implements Pair<T, U> {
//   constructor(public first: T, public second: U) {}
//   getFirst(): T {
//     return this.first;
//   }
//   getSecond(): U {
//     return this.second;
//   }
// }
// const pair = new MyPair<number, string>(1, "7");

interface ICache<T> {
  store(key: string, value: T): void;
  retrieve(key: string): T | undefined;
}
class MyCache<T> implements ICache<T> {
  private obj: { [key: string]: T };
  constructor() {
    this.obj = {};
  }

  public store(key: string, value: T): void {
    this.obj[key] = value;
  }
  public retrieve(key: string): T | undefined {
    return this.obj[key];
  }
}
const cache = new MyCache<number>();
cache.store("a", 22);
console.log(cache.retrieve("a"));
// --------------------------------------
interface IContacts {
  name: string;
  phone: string;
}
const contacts: IContacts[] = [
  { name: "Alice", phone: "123-456-7890" },
  { name: "Bob", phone: "987-654-3210" },
  { name: "Charlie", phone: "456-789-0123" },
  { name: "Alice", phone: "123-456-7890" }, // дублікат
  { name: "Dave", phone: "789-012-3456" },
  { name: "Eve", phone: "012-345-6789" },
  { name: "Bob", phone: "987-654-3210" }, // дублікат
  { name: "Frank", phone: "345-678-9012" },
  { name: "Grace", phone: "678-901-2345" },
  { name: "Heidi", phone: "901-234-5678" },
  { name: "Ivan", phone: "234-567-8901" },
  { name: "Judy", phone: "567-890-1234" },
];

function removeDublicates(arr: IContacts[]): IContacts[] {
  return Array.from(new Set(arr.map((a) => JSON.stringify(a)))).map((b) =>
    JSON.parse(b)
  );
}
const res = removeDublicates(contacts);
console.log(res);
// -------------------------------------

// interface IBooks {
//   title: string;
//   author: string;
// }

// const books: IBooks[] = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "1984", author: "George Orwell" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
//   { title: "1984", author: "George Orwell" }, // дублікат
//   { title: "Moby Dick", author: "Herman Melville" },
//   { title: "The Odyssey", author: "Homer" },
//   { title: "Pride and Prejudice", author: "Jane Austen" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }, // дублікат
//   { title: "War and Peace", author: "Leo Tolstoy" },
// ];

// function uniqBooks(books: IBooks[]): Map<string, Set<string>> {
//   const map = new Map<string, Set<string>>();
//   for (let book of books) {
//     const newTitleSet = map.get(book.author) || new Set<string>();
//     newTitleSet.add(book.title);
//     map.set(book.author, newTitleSet);
//   }
//   return map;
// }
// const resBooks = uniqBooks(books);
// console.log(resBooks);
// ------------------------------------
interface ISongs {
  title: string;
  artist: string;
  album: string;
}
const songs: ISongs[] = [
  { title: "Song 1", artist: "Artist A", album: "Album X" },
  { title: "Song 2", artist: "Artist A", album: "Album X" },
  { title: "Song 3", artist: "Artist B", album: "Album Y" },
  { title: "Song 4", artist: "Artist B", album: "Album Y" },
  { title: "Song 5", artist: "Artist A", album: "Album Z" },
  { title: "Song 1", artist: "Artist A", album: "Album X" }, // дублікат
  { title: "Song 6", artist: "Artist C", album: "Album X" },
  { title: "Song 7", artist: "Artist C", album: "Album Z" },
  { title: "Song 8", artist: "Artist B", album: "Album Z" },
  { title: "Song 2", artist: "Artist A", album: "Album X" }, // дублікат
  { title: "Song 9", artist: "Artist C", album: "Album Y" },
];

function uniqSongs(songs: ISongs[]): Map<string, Map<string, Set<string>>> {
  const map = new Map<string, Map<string, Set<string>>>();
  for (let song of songs) {
    const newAlbumMap = map.get(song.artist) || new Map<string, Set<string>>();
    const setSong = newAlbumMap.get(song.album) || new Set<string>();
    setSong.add(song.title);
    newAlbumMap.set(song.album, setSong); // встановлюємо setSong назад в newAlbumMap
    map.set(song.artist, newAlbumMap);
  }
  return map;
}
const resSongs = uniqSongs(songs);
console.log(resSongs);
// ---------------------------------
interface IBooks {
  title: string;
  author: string;
  genre: string;
}
const books: IBooks[] = [
  { title: "Book 1", author: "Author A", genre: "Fantasy" },
  { title: "Book 2", author: "Author A", genre: "Fantasy" },
  { title: "Book 3", author: "Author B", genre: "Sci-Fi" },
  { title: "Book 4", author: "Author B", genre: "Sci-Fi" },
  { title: "Book 5", author: "Author A", genre: "Mystery" },
  { title: "Book 1", author: "Author A", genre: "Fantasy" }, // дублікат
  { title: "Book 6", author: "Author C", genre: "Fantasy" },
  { title: "Book 7", author: "Author C", genre: "Mystery" },
  { title: "Book 8", author: "Author B", genre: "Mystery" },
  { title: "Book 2", author: "Author A", genre: "Fantasy" }, // дублікат
  { title: "Book 9", author: "Author C", genre: "Sci-Fi" },
];

function uniqBooks(books: IBooks[]): Map<string, Map<string, Set<string>>> {
  const map = new Map<string, Map<string, Set<string>>>();
  for (let book of books) {
    const genreBooks = map.get(book.author) || new Map<string, Set<string>>();
    const setBook = genreBooks.get(book.author) || new Set<string>();
    setBook.add(book.title);
    genreBooks.set(book.genre, setBook);
    map.set(book.author, genreBooks);
  }
  return map;
}
const resBooks = uniqBooks(books);
console.log(resBooks);
// -----------------------------------------------------

interface IProducts {
  name: string;
  category: string;
  quantity: number;
}
const products: IProducts[] = [
  { name: "Apple", category: "Fruit", quantity: 100 },
  { name: "Banana", category: "Fruit", quantity: 80 },
  { name: "Carrot", category: "Vegetable", quantity: 50 },
  { name: "Potato", category: "Vegetable", quantity: 200 },
  { name: "Milk", category: "Dairy", quantity: 150 },
  { name: "Cheese", category: "Dairy", quantity: 75 },
  { name: "Bread", category: "Bakery", quantity: 120 },
  { name: "Butter", category: "Dairy", quantity: 50 },
  { name: "Chicken", category: "Meat", quantity: 60 },
  { name: "Beef", category: "Meat", quantity: 40 },
];
function productsCategory(
  products: IProducts[]
): Map<string, Map<string, number>> {
  const map = new Map<string, Map<string, number>>();
  for (let product of products) {
    const categoryProducts =
      map.get(product.category) || new Map<string, number>();
    categoryProducts.set(product.name, product.quantity);
    map.set(product.category, categoryProducts);
  }
  return map;
}
const resproducts = productsCategory(products);
console.log(resproducts);

// --------------------------------------------

interface IEmails {
  sender: string;
  recipient: string;
  subject: string;
}

const emails: IEmails[] = [
  {
    sender: "alice@example.com",
    recipient: "bob@example.com",
    subject: "Hello",
  },
  {
    sender: "bob@example.com",
    recipient: "alice@example.com",
    subject: "Re: Hello",
  },
  {
    sender: "charlie@example.com",
    recipient: "alice@example.com",
    subject: "Meeting",
  },
  {
    sender: "alice@example.com",
    recipient: "charlie@example.com",
    subject: "Re: Meeting",
  },
  {
    sender: "dave@example.com",
    recipient: "alice@example.com",
    subject: "Hello",
  }, // дублікат
  {
    sender: "alice@example.com",
    recipient: "dave@example.com",
    subject: "Re: Hello",
  },
  {
    sender: "eve@example.com",
    recipient: "alice@example.com",
    subject: "Meeting",
  }, // дублікат
  {
    sender: "alice@example.com",
    recipient: "eve@example.com",
    subject: "Re: Meeting",
  },
];
// ----------------------
function uniqEmail(emails: IEmails[]): Set<string> {
  const set = new Set<string>();
  for (let email of emails) {
    set.add(email.sender);
  }
  return set;
}
const uniqemails = uniqEmail(emails);
console.log(uniqemails);
// ---------------------------------------------------
// Records

type UsersCity = Record<string, string>;

const usersCity: UsersCity = {
  Alice: "New York",
  Bob: "Los Angeles",
  Charlie: "Chicago",
  Alex: "New York",
};
function reverseValues(obj: UsersCity): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (let [key, value] of Object.entries(obj)) {
    if (map.has(value)) {
      map.get(value)?.push(key);
    } else {
      map.set(value, [key]);
    }
  }
  return map;
}
const resReverseValues = reverseValues(usersCity);
console.log(resReverseValues);
