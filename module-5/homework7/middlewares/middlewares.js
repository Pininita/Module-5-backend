export const logMiddleWare = (req, res, next) => {
    const log = {
       method: req.method,
       date: new Date().toLocaleDateString(),
       url: req.url
    }
    console.log(log)
    next()
}

export const bodyValidation = (req, res, next) => {
    if(req.body.id && req.body.name && req.body.age >= 0 && req.body.major) next()
    else{
        res.status(400)
        res.send('invalid body')
    }
}