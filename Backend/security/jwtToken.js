
const jwt = require('jsonwebtoken');

const createToken = async (obj) => {
    // console.log("userObj for token creation", obj);
    let jwtToken = await jwt.sign({
        id: obj._id,
        name: obj.name,
        email: obj.email,
        password: obj.password
    }, 'todo');

    return jwtToken;
}

module.exports = { createToken }