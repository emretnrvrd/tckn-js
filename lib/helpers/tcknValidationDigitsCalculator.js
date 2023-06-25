const getNineDigits = (tckn) => {
  return tckn.toString().slice(0, 9).split('').map(digit => parseInt(digit));
}

const calculateTenthDigit = (tckn) => {
  const nineDigits = getNineDigits(tckn);
  let oddDigitsSum = nineDigits[0] + nineDigits[2] + nineDigits[4] + nineDigits[6] + nineDigits[8];
  let evenDigitsSum = nineDigits[1] + nineDigits[3] + nineDigits[5] + nineDigits[7];
  let result = ((oddDigitsSum * 7) - evenDigitsSum) % 10;
  
  return result.toString();
}

const calculateEleventhDigit = (tckn) => {
  const nineDigits = getNineDigits(tckn);
  let oddDigitsSum = nineDigits[0] + nineDigits[2] + nineDigits[4] + nineDigits[6] + nineDigits[8];
  let result = (oddDigitsSum * 8) % 10;

  return result.toString();
}


export { calculateTenthDigit, calculateEleventhDigit };