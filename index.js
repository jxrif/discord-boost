module.exports = (amount = 1, count = false) => {
  if (isNaN(amount)) {
    return "Please ensure that the amount is a number.";
  }
  if (amount > 1000000) {
    return "Please ensure that the amount is not above 1000000.";
  }

  let giftCodes = [];
  let dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let j = 0; j < amount; j++) {
    let giftCode = "";
    for (let i = 0; i < 16; i++) {
      giftCode += dict.charAt(Math.floor(Math.random() * dict.length));
    }
    giftCodes.push(`https://discord.gift/${giftCode}`);
  }

  if (count) {
    return giftCodes.map((code, i) => `[${i + 1}] - ${code}`).join("\n");
  } else {
    return giftCodes.join("\n");
  }
};
