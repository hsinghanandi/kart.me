const JOI = require('joi');

const userFromDataValidator = (req, res, next) => {
    const submittedData = req.body;

    const userFormSchema = JOI.object({
        email: JOI.string()
            .email({ tlds: { allow: true } })
            .trim()
            .empty('')
            .required()
            .messages({
                'string.email': 'Please enter a valid email address',
                'any.required': 'Please enter an email address',
            }),

        name: JOI.string().trim().empty('').required().min(2).max(50).messages({
            'string.min':
                'Not enough characters in your name, minimum 2 required',
            'string.max': "Name mustn't be greater than 50 characters",
            'any.required': 'Please enter your name',
        }),
        address: JOI.string()
            .trim()
            .empty('')
            .required()
            .min(2)
            .max(100)
            .messages({
                'string.min':
                    'Not enough characters in your address, minimum 2 required',
                'string.max': "Name mustn't be greater than 100 characters",
                'any.required': 'Please enter your address',
            }),
        state: JOI.string()
            .trim()
            .empty('')
            .required()
            .min(2)
            .max(30)
            .messages({
                'string.min':
                    'Not enough characters in State, minimum 2 required',
                'string.max': "State mustn't be greater than 30 characters",
                'any.required': 'Please enter your address',
            }),
        city: JOI.string().trim().empty('').required().min(2).max(30).messages({
            'string.min': 'Not enough characters in City, minimum 2 required',
            'string.max': "City mustn't be greater than 30 characters",
            'any.required': 'Please enter your City',
        }),

        phone: JOI.number().integer().required().messages({
            'number.base': 'Please enter correct phone number',
        }),
        cartId: JOI.string().required().messages({
            'any.required': 'cartId must be a number!',
        }),
        country: JOI.string()
            .trim()
            .empty('')
            .required()
            .min(2)
            .max(30)
            .messages({
                'string.min':
                    'Not enough characters in Country, minimum 2 required',
                'string.max': "Country mustn't be greater than 30 characters",
                'any.required': 'Please enter your Country',
            }),
    });

    const { value, error } = userFormSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error == undefined) {
        req.sanitizedValue = value;
        return next();
    } else {
        res.status(400).json({
            status: 'Error, not able to validate details',
            message: error.details,
            data: [],
            url: '',
        });
    }
};

module.exports = userFromDataValidator;
