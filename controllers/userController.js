const Users = require('../Users');

// User form route
exports.userForm = async function (req, res) {
    let numOfUsrs = req.body.numOfUsrs
    let users = await Users(numOfUsrs)
    res.render('index', {
        users
    })
}