
const { userRegister, userLogin } = require('./userController');

const userRoutes = (fastify, options, done) => {

    fastify.post('/register',userRegister)
    fastify.post('/login', userLogin)

    done();
}

module.exports = userRoutes;