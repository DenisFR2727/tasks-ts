type ArrayNumbers = Array<number>;
let array1: ArrayNumbers = [1, 2, 3, 4, 5];
let array2: ArrayNumbers = [3, 4, 5, 6, 7];

// inersection двух масивов - схожі єлементи додаємо в новий!

function findNumbersInArray(array1: ArrayNumbers, array2: ArrayNumbers) {
  let arrSet1: any = new Set(array1);
  let arrSet2: any = new Set(array2);

  return array1.filter((num: number) => arrSet2.has(num));
}
const res1 = findNumbersInArray(array1, array2);
console.log(res1);
// -------------------------------------------------------

// Знайти єлементи котрих немає у другому масиві! [1,2];
function findNumbersNotInArray2(array1: ArrayNumbers, array2: ArrayNumbers) {
  let arrSet1: any = new Set(array1);
  let arrSet2: any = new Set(array2);

  return array1.filter((num) => !arrSet2.has(num));
}
const res2 = findNumbersNotInArray2(array1, array2);
console.log(res2);

// -------------------------------------------------------
// Знайти унікальні єлементи в обох масивах! [1,2,6,7];
function findNumbersNotInArray1AndArray2(
  array1: ArrayNumbers,
  array2: ArrayNumbers
) {
  let arrSet1: any = new Set(array1);
  let arrSet2: any = new Set(array2);

  let semetrics = array1
    .filter((num) => !arrSet2.has(num))
    .concat(array2.filter((num) => !arrSet1.has(num)));
  return semetrics;
}
const res3 = findNumbersNotInArray1AndArray2(array1, array2);
console.log(res3);

// -----------------------------------------------------

let uniqArray = [1, 4, 3, 2, 5, 1, 3, 2, 4, 7, 8, 9, 0, 0, 10, 11, 12];
// Знайти єлементи які повторюються в масиві! [1,2,3,4,0];

function findNumbersDublicate(array: ArrayNumbers) {
  let map: Map<number, number> = new Map();
  let dublicate: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i])! + 1);
      if (map.get(array[i]) === 2) {
        dublicate.push(array[i]);
      }
    } else {
      map.set(array[i], 1);
    }
  }
  let duplicates: any = [];
  map.forEach((value, key) => {
    let arr: [number, number] = [key, value];

    for (let i = 0; i < arr.length; i++) {
      if (arr[1] >= 2) {
        return duplicate.push(arr[0]);
      }
    }
  });
  return duplicates;
}
const res4 = findNumbersDublicate(uniqArray);
console.log(res4);
