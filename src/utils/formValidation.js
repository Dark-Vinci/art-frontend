

module.exports = function (value, rules) {
    let isValid = true;
    let toReturn =  { value: true, message: '' }

    if (!rules) {
        return toReturn;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;

        if (!isValid) {
            toReturn =  { value: false, message: ' is required' }
            return toReturn;
        } 
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;

        if (!isValid) {
            toReturn =  { value: false, message: 'minimum length is ' + rules.minLength };
            return toReturn;
        } 
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;

        if (!isValid) {
            toReturn =  { value: false, message: 'maximum length is ' + rules.maxLength };
            return toReturn;
        } 
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;

        if (!isValid) {
            toReturn =  { value: false, message: 'is not valid' };
            return toReturn;
        } 
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;

        if (!isValid) {
            toReturn =  { value: false, message: 'enter a numeric value' };
            return toReturn;
        } 
    }

    return toReturn;
}