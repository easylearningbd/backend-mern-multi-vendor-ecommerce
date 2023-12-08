module.exports.responseReture = (res,code,data) => {
    return res.status(code).json(data)
}