const {listAllUsers} = require('../models/user');
const jwt = require('jsonwebtoken');
const token = 'pfe_2022';
const bcrypt = require('bcrypt');

//Get user login / verify if the password and email match a curent user
const getLogin = async (body,users) => {
    const user = users.find(u => {
        return u.email === body.email;
    });
    const authentification= bcrypt.compareSync(body.password, user.password);

    return new Promise((resolve, reject) => {
        if (user && authentification) {
            const accessToken = jwt.sign({_id: user._id,email: body.email}, token);
            return resolve({ accessToken : accessToken});
        }
        else {
            reject();
        }
    });
};

module.exports = {getLogin};
