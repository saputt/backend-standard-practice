const productValidationSchema = {
    idProduct : {
        notEmpty : {
            errorMessage : "Id must not be empty"
        }
    },
    nameProduct : {
        notEmpty : {
            errorMessage : "Name product must not be empty"
        },
        isString : {
            errorMessage : "Name product must be string"
        },
        isLength : {
            options : {
                min : 3, 
                max : 15
            }
        }
    }
}

module.exports = {
    productValidationSchema
}