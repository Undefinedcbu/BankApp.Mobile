import * as Yup from "yup";

const validations = Yup.object().shape({
    TCKimlik: Yup
        .string()
        .required()
        .max(11)
        .min(11)
        
});

module.exports = validations;