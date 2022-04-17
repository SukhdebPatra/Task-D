const express = require('express')
const cors = require("cors")

require('./db/config')
const User = require('./db/User')

const jwt = require('jsonwebtoken')
const { CancellationToken } = require('mongodb')
const jwtKey = 'task'


const app = express();
app.use(cors());
app.use(express.json());


app.post("/login", token, async (req, res) => {
    console.log(req.body)
   

    let user = new User(req.body);
    let result = await user.save();
    jwt.sign({ user }, jwtKey, (err, token) => {
        if (err) {
            res.send({ result: "something went wrong" })
        }
        const payload={
            user,token
        }
        res.send(payload)
    })


})



app.post('/home',token, async (req, res) => {
    let user = new User(req.body);
    let result = await user.save()
    res.send(result);
    res.send(Date.now());
})


function token(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split('')[1];
        console.log("millware called", token)
        jwt.verify(token, jwtKey, (err, valid) => {

        })

    }
    else {

    }

    next();
}



app.listen(4000)