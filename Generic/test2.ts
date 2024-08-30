// interface Debounce {
//   sayHello: (fn: string) => void;
// }
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  miliSeconds: number
) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), miliSeconds);
  };
}

function sayHello(name: string) {
  console.log(`Hello, ${name}!`);
}

const debouncedSayHello = debounce(sayHello, 2000);

debouncedSayHello("John"); // Виводить "Hello, John!" через 2 секунди
debouncedSayHello("Sarah"); // Нічого не виводить, оскільки виклик відбувся менше ніж через 2 секунди після попереднього

interface Books {
  title: string;
  author: string;
}
const books: Books[] = [
  { title: "My Sister's Keeper", author: "Jodi Picoult" },
  { title: "Nineteen Minutes", author: "Jodi Picoult" },
  { title: "The Road Ahead", author: "Bill Gates" },
];
function returnBooksByAuthor(books: Books[], author: string) {
  return books
    .filter((book) => book.author === author)
    .map((book) => book.title);
}
const resultBooks = returnBooksByAuthor(books, "Jodi Picoult");
console.log(resultBooks);

interface IProducts {
  name: string;
  price: number;
}
let products: IProducts[] = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 2 },
];
function returnproduct(products: IProducts[]) {
  let lowProduct = products.reduce((acc, next) => {
    return acc.price < next.price ? acc : next;
  });
  return lowProduct.name;
}
const resultProducts = returnproduct(products);
console.log(resultProducts);
