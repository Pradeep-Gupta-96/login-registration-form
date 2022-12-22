const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/LoginDB', () => {
    console.log("DB connected")
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const User = new mongoose.model("User", userSchema)
// Route

app.get("/", (req, res) => {
    res.send("My app")
})
// post 
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ massage: "login successfull", user:user })
            } else {
                res.send({ massage: "password did't match" })
            }

        } else {
            res.send({ massage: "User not registered" })
        }
    })

})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ massage: "Already Registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ massage: "Successfully Registered ->Please login!!" })
                }
            })
        }
    })

})

app.listen(8000, () => {
    console.log("DB successfully started on port 8000")
})
