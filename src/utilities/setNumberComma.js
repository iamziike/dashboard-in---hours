const setNumberComma = (number) => {
  let numberArray = [];
  [...`${number}`].reverse().forEach((digit, index) => {
    if (index && index % 3 === 0) numberArray.push(',');
    numberArray.push(digit);
  });

  return numberArray.reverse().join('');
};

export default setNumberComma;
