module.exports.postCreate = (req, res, next) => {
    var errors = [];
    if (!req.body.name){
        errors.push('Name is required')
    }
    if (!req.body.phone){
        errors.push('Phone is required')
    }
    if (errors.length){
        res.render('users/create', {
            error: errors,
            values: req.body
        })
        return;
    };
    next();
};