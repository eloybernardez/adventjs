function countTime(leds) {
  let lightsOn = leds;
  let sum = 0;
  while (!lightsOn.every((led) => led === 1)) {
    // Make a sweep to check if we turn on all leds
    lightsOn = lightsOn.map((number, index, array) => {
      return number === 0 && array.at(index - 1) === 1 ? 1 : number;
    });
    sum += 1;
  }

  return sum * 7;
}

console.log(countTime([0, 1, 1, 0, 1])); // 7
console.log(countTime([0, 0, 0, 1])); // 21
console.log(countTime([0, 0, 1, 0, 0])); // 28
