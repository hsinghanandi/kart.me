const dataValidator = (req, res, next) => {
    const submittedData = req.body;

    return next();
};

module.exports = dataValidator;
