import * as Yup from "yup";

const validations = Yup.object().shape({
  Email: Yup
    .string()
    .max(30)
		.email()
    .required(),
    TCKimlik: Yup
    .string()
    .required()
    .max(11)
    .min(11),
    Parola: Yup
    .string()
    .min(6)
    .max(20)
    .required(),
    Ad:Yup
    .string()
    .min(2)
    .max(20)
    .required(),
    Soyad:Yup
    .string()
    .max(20)
    .min(2)
    .required(),
    DogumTarihi:Yup
    .string()
    .required(),
    TelefonNumarasi:Yup
    .number()
    .required(),
    Adres:Yup
    .string()
    .required(),

        
});


                    
            
module.exports = validations;