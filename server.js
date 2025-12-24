const express = require("express")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const cors = require("cors")
const router = require("./src/routes")

const app = express()

app.use(cors({
    origin : "http://localhost:3000",
    credentials : true,
    methods : ["POST", "GET", "DELETE", "PUT", "PATCH"],
    allowedHeaders : ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(cookieParser('sauki ganteng'))
app.use(session({
    secret : "lol",
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : 60000 * 60
    }
}))

app.use(router)

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    console.log(req.session)
    console.log(req.session.id)
    req.session.visited = true
    return res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})