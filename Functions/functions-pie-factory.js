function makePie(quantity=1) {
  const pieOrder = "*Pie Emoji* ".repeat(quantity);

  return pieOrder;
}

const result = makePie(1);
console.log(result);