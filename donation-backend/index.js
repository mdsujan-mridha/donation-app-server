const app = require("./app");

const dotenv = require("dotenv");
const database = require("./config/dbConnection");

const port = process.env.PORT || 5000;

// dotenv config 
dotenv.config({ path: "./config/config.env" });

// connect with database 
database();


app.listen(port, () => {
    console.log(`Server is working on http://ocalhost:${port}`);
})