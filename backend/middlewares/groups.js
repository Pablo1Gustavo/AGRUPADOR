const { body, validationResult } = require("express-validator");

module.exports = {
    getGroupsInRadiusValidations: [
        body('latitude')
            .notEmpty()
                .withMessage('Latitude obrigatória').bail()
            .isFloat({ min: -90, max: 90 })
                .withMessage('A latitude deve ser um número de -90 a 90'),
        body('longitude')
            .notEmpty()
                .withMessage('Longitude obrigatória').bail()
            .isFloat({ min: -90, max: 90 })
                .withMessage('A longitude deve ser um número de -90 a 90')
    ],
    getGroupsInRadiusMiddleware: (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        next();
    },

    createGroupValidations: [
        body('name')
            .notEmpty()
                .withMessage('Nome do grupo obrigatório').bail()
            .isLength({ min:1, max:25 })
                .withMessage('O nome do grupo deve ter de 1 a 25 caracteres'),
        body('description')
            .notEmpty()
                .withMessage('Descrição do grupo obrigatória').bail()
            .isLength({ min:10, max:200 })
                .withMessage('A descrição do grupo deve ter de 10 a 200 caracteres'),
        body('linkCode', 'O código do link de convite do grupo não é válido')
            .notEmpty()
                .withMessage('Código do link de convite do grupo obrigatório').bail()
            .isLength({ min:22, max:22 }).bail()
            .isAlphanumeric(),
        body('latitude')
            .notEmpty()
                .withMessage('Latitude obrigatória').bail()
            .isFloat({ min: -90, max: 90 })
                .withMessage('A latitude deve ser um número de -90 a 90'),
        body('longitude')
            .notEmpty()
                .withMessage('Longitude obrigatória').bail()
            .isFloat({ min: -90, max: 90 })
                .withMessage('A longitude deve ser um número de -90 a 90'),  
    ],
    createGroupMiddleware: (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        next();
    }
};