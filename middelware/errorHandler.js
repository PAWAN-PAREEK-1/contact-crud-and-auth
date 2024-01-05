const { constants } = require('../constants');
const errorhandler = (err, req, res) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "validation Failed", message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
            break;
        case constants.UNAUTHRIZED:
            res.json({ title: "Unauthrised Found", message: err.message, stackTrace: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack })
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack })
            break;

        default:
            console.log("all are good")
            break;
    }


}

module.exports = errorhandler;