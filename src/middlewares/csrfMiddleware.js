
exports.checkCsfrError = (req, res, next) => {
    if(err && err.code === "EBADCSRFTOKEN") {
        return res.send('BAD CSRF.');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}