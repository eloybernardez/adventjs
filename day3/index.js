/*
You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2  
 */
function distributeGifts(packOfGifts, reindeers) {
  // Get gift weight
  const getWeight = (element, type = "gift") =>
    type === "gift" ? element.length : element.length * 2;

  // Get total weight
  const totalWeight = (elements, type) =>
    elements.reduce((acc, element) => acc + getWeight(element, type), 0);

  // Get weight of all gifts
  const giftsWeight = totalWeight(packOfGifts);

  // Get the maximum weight that a reindeer can carry
  const reindeersWeight = totalWeight(reindeers, "reindeer");
  console.log(`gifts ${giftsWeight} - reindeers ${reindeersWeight}`);

  // Calculate gifts amount to carry
  const amountOfPacks = Math.floor(reindeersWeight / giftsWeight);

  return amountOfPacks;
}

console.log(distributeGifts(["a", "b", "c"], ["d", "e"])); // 2
console.log(distributeGifts(["videogames", "console"], ["midu"])); // 0
console.log(
  distributeGifts(
    ["game", "videoconsole", "computer"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  )
); // 5

console.log(
  distributeGifts(
    ["music"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  )
); // 26
