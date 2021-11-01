const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const UserList = {};

app.set('view engine', 'ejs');

mongoose.connect('mongodb://goRush:gsb2332065@cluster0-shard-00-00.rikek.mongodb.net:27017,cluster0-shard-00-01.rikek.mongodb.net:27017,cluster0-shard-00-02.rikek.mongodb.net:27017/gorush?ssl=true&replicaSet=atlas-tr9az4-shard-0&authSource=admin&retryWrites=true&w=majority');

const usersSchema = {
    name: String,
    bruhims: String,
    passport: String,
    icNumber: String,
    kampong: String,
    jalan: String,
    simpang: String,
    house_Number: String,
    contact_1: String,
    email: String,
    qo: String,
    radioTOD: String,
    BNHC: String,
    TUHC: String,
    TEHC: String,
    BHC: String,
    radioDistrict: String,
    pm: String,
    re: String,
    radioNOTI: String,
    radioDURATION: String,
    dateSubmit: Date,
    ordertaken: String
}

const User = mongoose.model('User', usersSchema);

app.get('/', (req, res) => {
    User.find({}, function(err, users) {
        res.render('index', {
            UserList:  users
        })
        console.log(UserList)
    })
})

app.listen(4000, function() {
    console.log('server is running');
})
