

function errorResponse(schemaErrors) {
    const errors = schemaErrors.map((error) => {
        const path = error.path;
        const message = error.message;

        return { path, message };
    });
    return {
        status: 'failed',
        errors
    };
}

exports.validateSchema = function (schema) {
    return function (req, res, next) {
        const _schema$validate = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: false
        });
        const error = _schema$validate.error;

        if (error && error.isJoi) {
            res.status(400).json(errorResponse(error.details));
        } else {
            next();
        }
    };
};
