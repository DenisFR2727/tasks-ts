type NumbersData = Array<number>;
interface INumbersData {
  numbers: NumbersData[];
  search?: (arr: NumbersData) => number;
}
const numbers: NumbersData = [13, 10, 33, 25, 39, 31, 12, 66, 49, 58];
numbers.sort((a, b) => a - b);
class SearchBynary {
  constructor(public numbers: NumbersData) {
    this.numbers = numbers;
  }
  public search(arr: NumbersData, target: number): number | null {
    let start: number = 0;
    let right = arr.length - 1;
    while (start <= right) {
      let mid = Math.floor((start + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else if (arr[mid] > target) {
        right = mid - 1;
      }
    }
    return -1;
  }
  deleteNum(num: number): void {
    let index = this.search(this.numbers, num);
    if (index !== null && index !== -1) {
      this.numbers.splice(index, 1);
    }
  }
  spliceNum(num: number): void {
    this.numbers.push(num);
  }
  render(): NumbersData {
    return this.numbers;
  }
}
let searchBynary = new SearchBynary(numbers);
console.log(searchBynary.search(numbers, 31));
searchBynary.deleteNum(10);
searchBynary.spliceNum(999);
console.log(searchBynary.render());
// console.log(searchBynary.render());
// Задача про двійкове дерево пошуку: Створіть клас для двійкового дерева пошуку, який має методи для вставки, видалення та пошуку значень.

// Задача про стек: Створіть клас для стеку, який має методи для додавання (push), видалення (pop) та перевірки на пустоту (isEmpty).

// Задача про чергу: Створіть клас для черги, який має методи для додавання (enqueue), видалення (dequeue) та перевірки на пустоту (isEmpty).

// Задача про сортування масиву: Напишіть функцію, яка сортує масив чисел за допомогою алгоритму сортування бульбашкою.

// Задача про хеш-таблицю: Створіть клас для хеш-таблиці, який має методи для додавання, видалення та пошуку значень.

// Задача про зв'язний список: Створіть клас для зв'язного списку, який має методи для додавання, видалення та пошуку значень.

// Задача про рекурсію: Напишіть рекурсивну функцію, яка обчислює факторіал числа.

// Задача про динамічне програмування: Напишіть функцію, яка обчислює n-те число Фібоначчі за допомогою динамічного програмування.

// Задача про графи: Створіть клас для графа, який має методи для додавання вершин, додавання ребер та пошуку шляху між двома вершинами.

// Задача про бінарний пошук: Напишіть функцію, яка виконує бінарний пошук в відсортованому масиві.

// Визначте вашу ціль: Що ви намагаєтесь знайти? Це може бути конкретне значення, вузол з максимальним або мінімальним значенням, або щось інше.

// Почніть з кореня: Пошук у бінарному дереві пошуку завжди починається з кореневого вузла.

// Використовуйте властивості бінарного дерева пошуку: Якщо значення, яке ви шукаєте, менше за значення поточного вузла, перейдіть до лівого дочірнього вузла. Якщо воно більше, перейдіть до правого дочірнього вузла.

// Повторюйте процес: Продовжуйте цей процес, поки не знайдете шукане значення або не дійдете до вузла, який не має дочірніх вузлів.
// Бінарне дерево

interface INode {
  value: number;
  left: INode | null;
  right: INode | null;
}
const tree: INode = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 14,
      left: {
        value: 13,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};
function BinarySearchTree(tree: INode | null, target: number): INode | null {
  let current = tree;
  if (current === null) {
    return null;
  } else if (target < current.value) {
    return BinarySearchTree(current.left, target);
  } else if (target > current.value) {
    return BinarySearchTree(current.right, target);
  } else {
    return current;
  }
}
function deleteValueTree(tree: INode | null, target: number): INode | null {
  if (tree === null) {
    return tree;
  }
  if (target < tree.value) {
    tree.left = deleteValueTree(tree.left, target);
  } else if (target > tree.value) {
    tree.right = deleteValueTree(tree.right, target);
  } else {
    if (tree.left === null) {
      return tree.left;
    }
    tree.value = minValue(tree.right);
    tree.right = deleteValueTree(tree.right, tree.value);
  }
  return tree;
}
function minValue(tree: INode | null): number {
  let current = tree;

  while (current && current.left !== null) {
    current = current.left;
  }
  return current?.value || -1;
}

const resultValue = BinarySearchTree(tree, 10);

// const deleteValue = deleteValueTree(tree, 10);
console.log(resultValue?.right);
// console.log(deleteValue);

// type Data = Array<number>;
interface IData {
  value: number;
  name: string;
}
const arr: IData[] = [
  { value: 1, name: "Denis" },
  { value: 77, name: "Alex" },
  { value: 3, name: "Denis" },
  { value: 10, name: "Denis" },
  { value: 5, name: "Denis" },
];
function quickSort(arr: IData[]): IData[] {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let leftArr: IData[] = [];
  let rightArr: IData[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].value < pivot.value) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
const resData = quickSort(arr);
console.log(resData);
// ----------------------------------
interface IValues {
  [k: string]: number;
}
function lengthObjectValues(arr: IData[]): IValues[] {
  let valuesLen: IValues[] = [];
  for (let i = 0; i < arr.length; i++) {
    let valueLen = Object.values(String(arr[i].value)).length;
    let nameLen = arr[i].name.length;
    valuesLen.push({ value: valueLen, name: nameLen });
  }
  return valuesLen;
}
const resLength = lengthObjectValues(arr);
console.log(resLength);
//{value: 1, name: 5}
