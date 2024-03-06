const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://user:abcd1234@cluster0.vzmd0yq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get('/',(req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{
        name : req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        hobbies : req.body.hobbies,
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser", (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id",(req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})
