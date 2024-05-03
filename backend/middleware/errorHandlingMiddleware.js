const { CustomApiError } = require('../errors/customError')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.msg).json({meg: err.message})
    }
    return res.status(500).json("something went wrong, please try again")
}

module.exports = errorHandlerMiddleware