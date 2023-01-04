// groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
// groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
// groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

// groupBy(
//   [1397639141184, 1363223700000],
//   timestamp => new Date(timestamp).getFullYear()
// )
// // { 2013: [1363223700000], 2014: [1397639141184] }

// groupBy([
//   { title: 'JavaScript: The Good Parts', rating: 8 },
//   { title: 'Aprendiendo Git', rating: 10 },
//   { title: 'Clean Code', rating: 9 },
// ], 'rating')
// // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
// //   9: [{ title: 'Clean Code', rating: 9 }],
// //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

function groupBy(collection, it) {
  let keysArr = [];
  let values = [];
  const isFunction = typeof it === "function";

  // get matching elements
  const matchingElements = (key, elements) => {
    return elements.filter((element) =>
      isFunction ? it(element) === key : element[it] === key
    );
  };

  // create array of unique keys
  const uniqueKeys = () =>
    [
      ...new Set(
        collection.map((element) => (isFunction ? it(element) : element[it]))
      ),
    ].sort((a, b) => b - a);

  // create final object to be returned
  const finalObject = (keys, vals) => {
    let groupedObject = {};
    const mappedObject = new Map();

    keys.forEach((key, index) => mappedObject.set(key, values[index]));

    groupedObject = Object.fromEntries(mappedObject);

    return groupedObject;
  };

  // calculate keys
  keysArr = uniqueKeys();

  // get matching elements to each key
  keysArr.forEach(
    (key, index) => (values[index] = matchingElements(key, collection))
  );

  return finalObject(keysArr, values);
}

const testArr = [6.1, 4.2, 6.3];
const testArr2 = ["one", "two", "three"];

console.log(groupBy(testArr, Math.floor));
console.log(groupBy(testArr2, "length"));
