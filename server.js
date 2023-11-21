const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const form = require("./Routes/form")
const createConnection = require("./MongoDB/Createcon")

const cors = require("cors")
const port = process.env.PORT || 2000


const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.json());
app.use(express.json());
app.use("/",form);
createConnection();

app.get("/", (req, res) => {
    res.send("shivam rawat welcome to collegedunia.com")
})
app.get("/hello", (req, res) => {

    res.status(200).json({
        message: "hello server is responding successfully"
    })
})
app.listen(port, () => {
    console.log("server is running", port)
}
)