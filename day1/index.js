function wrapping(gifts) {
  // Gift Wrapper function
  const giftWrapper = (gift) => `*${gift}*`;

  // Amount of * needed on top and bottom
  const wrappedCorners = (wrappedGift) => {
    const corners = "";
    const length = wrappedGift.length;

    return corners.padStart(length, "*");
  };

  // Wrapper for gifts
  const wrapper = (gift) => {
    const preparedGift = giftWrapper(gift);
    const box = wrappedCorners(preparedGift);
    return `${box}\n${preparedGift}\n${box}`;
  };

  // Return full wrapped gift array
  const completelyWrappedGiftsArray = gifts.map((gift) => wrapper(gift));

  return completelyWrappedGiftsArray;
}

const gifts = ["teddy bear", "drone", "doll"];
const gifts2 = ["book", "game", "socks"];

console.log(wrapping(gifts2));
console.log(wrapping(gifts));
