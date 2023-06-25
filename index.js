
import TcknRandom from './lib/services/tcknRandom';
import TcknValidator from './lib/services/tcknValidator';

const tcknRandom = () => {
    return (new TcknRandom()).generate();
}

const tcknValidate = (value) => {
    const validator = new TcknValidator();
    validator.setValue(value)
    return validator.validate();
}

export { tcknRandom, tcknValidate };