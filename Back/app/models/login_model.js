const {listAllUsers} = require('../models/user');
const jwt = require('jsonwebtoken');
const token = 'pfe_2022';
const bcrypt = require('bcrypt');

const getLogin = async (body,users) => {
    const user = users.find(u => {
        return u.email === body.email;
    });
    const authentification= bcrypt.compareSync(body.password, user.password);

    return new Promise((resolve, reject) => {
        if (user && authentification) {
            const accessToken = jwt.sign({email: body.email}, token);
            return resolve({user : user , accessToken : accessToken});
        }
        else {
            reject();
        }
    });
};

module.exports = {getLogin};
