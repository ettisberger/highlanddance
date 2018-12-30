import validator from 'validator';

export default (fields) => {
    let isValid = true;

    for (var field in fields){
        if (fields.hasOwnProperty(field)) {
            switch (field) {
                case 'firstName':
                case 'lastName':
                case 'street':
                case 'streetNr':
                case 'city':
                case 'zip':
                case 'message':
                case 'phone':
                case 'showDate':
                    if (fields[field].required && validator.isEmpty(fields[field].value)) {
                        fields[field].error = "Dieses Feld kann nicht leer sein.";
                        isValid = false;
                    } else {
                        fields[field].error = "";
                    }
                    break;
                case 'email':
                    if (fields[field].required &&!validator.isEmail(fields[field].value)) {
                        fields[field].error = "Bitte eine gültige Email Adresse verwenden.";
                        isValid = false;
                    } else {
                        fields[field].error = "";
                    }
                    break;
                default:
                    break;
            }
        }
    }

    return {isValid: isValid, fields: fields};
}