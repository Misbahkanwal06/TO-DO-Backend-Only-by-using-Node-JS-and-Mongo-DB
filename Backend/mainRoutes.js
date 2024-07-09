
const userRoutes = require('./users/userRoutes');
const listRoutes = require('./To-Dos/listRoutes');

const mainRoutes = (fastify, options, done) => {

    fastify.register(userRoutes, { prefix: "/users" });
   fastify.register(listRoutes,{prefix:"/to-do/items"})
    done();
}

module.exports = mainRoutes;