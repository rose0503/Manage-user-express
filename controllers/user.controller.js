var db= require('../db');
const shortid = require('shortid');

module.exports.index = (request, response) => {
    response.render('users/index', {
        user: db.get('users').value()
    }) 
};

module.exports.search = (req, res) => {
    var q = req.query.q;
    var matchUser = db.get('users').value().filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        user: matchUser,
        question: q
    })
}

module.exports.create = (req, res) => {
    //console.log(req.cookies);
    res.render('users/create');
};


module.exports.getId = (req, res) => {
    var i = req.params.id;
    var u =db.get('users').find({ id: i}).value();
    res.render('users/view', {
        user: u
    }) 
};

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    
    db.get('users').push(req.body).write();
    res.redirect('/users');
};
