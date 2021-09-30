const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Sandhya@563',
        database: 'sandy'
    }
});
// User registration table.
knex.schema.hasTable("userdetaile").then(function (exits) {
    if (!exits) {
        return knex.schema.createTable("userdetaile", function (table) {
            table.increments("id").primary();
            table.string("Name");
            table.string("Email");
            table.string("Password");
        })

    }
    knex.schema.hasTable("userpost").then(function (esits) {
        if (!esits) {
            return knex.schema.createTable("userpost", function (table) {
                table.increments("id").primary();
                table.string("Imgurl");
                table.integer("Date");
                table.string("Captionforimg");
            })
        }
    })
        .then((data) => {
            console.log("userpost has created sucessfully")
        })
        .catch((error) => {
            console.log(error)

        })

}).then((data) => {
    console.log(`user-registration has created sucessfully`)
}).catch((error) => {
    console.log(error)

});
module.exports = knex;
