import * as tcknCalculator from "../../helpers/tcknValidationDigitsCalculator";

class TcknRandom {

  #minValue = 100_000_000;
  #maxValue = 999_999_999;

  #randomNineDigitsNumber() {
    return Math.floor(Math.random() * (this.#maxValue - this.#minValue + 1)) + this.#minValue;
  }

  generate() {
      const randomNineDigit = this.#randomNineDigitsNumber().toString();
      const calculatedTenthDigit = tcknCalculator.calculateTenthDigit(randomNineDigit);
      const calculatedEleventhDigit = tcknCalculator.calculateEleventhDigit(randomNineDigit + calculatedTenthDigit);

      return randomNineDigit.toString() + calculatedTenthDigit.toString() + calculatedEleventhDigit.toString();

  }

}

export default TcknRandom;
