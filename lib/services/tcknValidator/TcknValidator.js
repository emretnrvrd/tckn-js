import TcknValidationCases from "./tcknValidationCases";

class TcknValidator extends TcknValidationCases {
    
    #tckn;
    
    constructor(tckn = null) {
      super();
  
      if (tckn !== null) {
        this.setValue(tckn);
      }
    }
  
    getValue() {
      return this.#tckn;
    }
  
    setValue(value) {
      this.#tckn = value.toString();
    }
  
    validate() {
        console.log('test', this.#tckn);
        console.log('validateIsNumber', this.validateIsNumber(this.#tckn));
        console.log('validateLength', this.validateLength(this.#tckn));
        console.log('validateIsEven', this.validateIsEven(this.#tckn));
        console.log('validateFirstDigit', this.validateFirstDigit(this.#tckn));
        console.log('validateTenthDigit', this.validateTenthDigit(this.#tckn));
        console.log('validateEleventhDigit', this.validateEleventhDigit(this.#tckn));

      if (!this.#tckn) {
        throw new Error('TCKN value must not be null.');
      }
  
      return (
        this.validateIsNumber(this.#tckn) &&
        this.validateLength(this.#tckn) &&
        this.validateIsEven(this.#tckn) &&
        this.validateFirstDigit(this.#tckn) &&
        this.validateTenthDigit(this.#tckn) &&
        this.validateEleventhDigit(this.#tckn)
      );
    }
  }
  

  export default TcknValidator;