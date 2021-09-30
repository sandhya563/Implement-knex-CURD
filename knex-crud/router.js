const router = require('express').Router();
const knex = require('./database');

// Insert  the data into userdataile table.
router.post('/user-registration', (req, res) => {
    const user_data = {
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password
    }
    knex('userdetaile').insert(user_data)
    .then((data) => {
        console.log(data)
        res.send({ "statusCode": 200, "message": "userdetaile data inserted sucssfully" })
    })
    .catch((error) => {
        console.log(error)
        res.send({ "statusCode": 404 })
    })
})
// user post data inserting 
router.post('/user-post-data', (req, res) => {
    const userpost_data = {
        Imgurl: req.body.Imgurl,
        Date: req.body.Date,
        Captionforimg: req.body.Captionforimg
    }
    knex('userpost').insert(userpost_data)
    .then((data) => {
        console.log(data)
        res.send({ "statusCode": 200, "message": "userpodt data inserted sucssfully" })
    })
    .catch((error) => {
        console.log(error)
        res.send({ "statusCode": 404 })
    })
})

// Get the data from userdetaile table.
router.get('/user-registration-data',(req,res)=>{
    knex().select ("*").from('userdetaile')
        .then((data)=>{
            console.log(data)
            res.send({"statusCode": 200, "message": "userdetaile data inserted sucssfully"})
        })
        .catch((error)=>{
            console.log(error)
            res.send({ "statusCode": 404 })
        })
})
//  Update the data into userpost table.
router.put('/user-post-edit/:id', (req, res) => {
    knex.update(
        req.body
    )
    .table('userpost').where('id',req.params.id)
    .then((data) => {
        console.log(data)
        res.send({ "statusCode": 200, "message": "userpost data inserted sucssfully" })
    })
    .catch((error) => {
        console.log(error)
        res.send({ "statusCode": 404 })
    })
})

// Update the data into userdataile table.
router.put('/user-registration-edit/:id', (req, res) => {
    knex.update(
        req.body
    )
    .table('userdetaile').where('id',req.params.id)
    .then((data) => {
        console.log(data)
        res.send({ "statusCode": 200, "message": "userdetaile data inserted sucssfully" })
    })
    .catch((error) => {
        console.log(error)
        res.send({ "statusCode": 404 })
    })
})
// Delete the data from userpost table.
router.delete('/user-post-delete/:id', (req, res) => {
    knex("userpost")
    .where({'id':req.params.id}).del()
    .then((data) => {
        console.log(data)
        res.send({ "statusCode": 200, "message": "userpost data inserted sucssfully" })
    })
    .catch((error) => {
        console.log(error)
        res.send({ "statusCode": 404 })
    })
})
// Delete the data from userdetaile table.
router.delete('/user-registration-delete/:id', (req, res) => {
    knex("userdetaile")
    .where({'id':req.params.id}).del()
    .then((data) => {
        console.log(data)
        res.send({ "statusCode": 200, "message": "userdetaile data inserted sucssfully" })
    })
    .catch((error) => {
        console.log(error)
        res.send({ "statusCode": 404 })
    })
})
module.exports = router