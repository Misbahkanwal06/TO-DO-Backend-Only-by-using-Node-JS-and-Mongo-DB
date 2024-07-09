
const mongoose = require('./dbmongo');
const mainRoutes = require('./mainRoutes');

const fastify = require('fastify')({
    logger: true
})

fastify.register(mainRoutes, { prefix: "/api/v1" });

fastify.listen({ port: 3012 }, function (err, address) {
    console.log("server is running on 3012");
    if (err) {
        fastify.log.error(err)
        console.log("server not working");
        process.exit(1)
    }
})

