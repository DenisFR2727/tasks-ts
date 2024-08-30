interface Item {
  id: number;
  description: string;
}

interface IData {
  name: string;
  items: Item[];
}

const fakeData: IData[] = [
  {
    name: "Object1",
    items: [
      { id: 1, description: "This is a description" },
      { id: 2, description: "Another description" },
      { id: 3, description: "Yet another description" },
    ],
  },
  {
    name: "Object2",
    items: [
      { id: 4, description: "This is a different description" },
      { id: 6, description: "Yet another different description" },
    ],
  },
  {
    name: "Object3",
    items: [
      { id: 5, description: "This is yet another different description" },
    ],
  },
];

function countItems(data: IData[]): number {
  let count = 0;
  data.forEach((obj) => (count += obj.items.length));
  return count;
}

function countMatches(data: IData[], regex: RegExp): number {
  let count: number = 0;
  data.forEach((obj) => {
    return obj.items.forEach((item) => {
      if (item.description.match(regex)) {
        count++;
      }
    });
  });
  return count;
}

function transformData(data: IData[]): IData[] {
  const allItems = data.map((obj) => obj.items).flat();
  const sortedItems = allItems.sort((a, b) => Number(a.id) - Number(b.id));

  return data.map((obj) => {
    return {
      name: obj.name.toUpperCase(),
      items: sortedItems,
    };
  });
}

const count = countItems(fakeData);
const matches = countMatches(fakeData, /description/);
const transform = transformData(fakeData);
console.log(count);
console.log(matches);
console.log(JSON.stringify(transform, null, 2));
// console.log(fakeData);
