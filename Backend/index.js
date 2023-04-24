const express = require("express")
const cors = require("cors");
const { adsRouter } = require("./routes/adsRouter");
const { connection } = require("./configs/db");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Welcome To The Home Page");
})

app.use("/", adsRouter)

app.listen(8080, async () => {
    console.log(`Server is running on PORT 8080`);
    try {
        await connection;
        console.log("DB is connected");
    }
    catch (err) {
        console.log(err.message)
    }
})