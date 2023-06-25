import * as tcknCalculator from '../../helpers/tcknValidationDigitsCalculator';

class TcknValidationCases {

    validateIsNumber(value) {
      return !isNaN(value);
    }
  
    validateLength(value) {
      return value.length == 11;
    }
  
    validateIsEven(value) {
      return parseInt(value) % 2 === 0;
    }
  
    validateFirstDigit(value) {
      return (value).charAt(0) !== "0";
    }
  
    validateTenthDigit(value) {
      const nineDigits = value.slice(0, 9);
      const tenthDigit = value.charAt(9);
      return tenthDigit == tcknCalculator.calculateTenthDigit(nineDigits);
    }
  
    validateEleventhDigit(value) {
      const tenDigits = value.slice(0, 10);
      const eleventhDigit = value.charAt(10);
  
      return eleventhDigit == tcknCalculator.calculateEleventhDigit(tenDigits);
    }
    
  }
  

  export default TcknValidationCases;