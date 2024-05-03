const routeNotFound = (req,res) => {
    return res.status(404).json('route not found')
}

module.exports = routeNotFound