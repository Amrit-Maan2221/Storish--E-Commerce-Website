const app = require('./app');
const dotenv = require("dotenv");
const connectDatabase = require('./config/database')

// config
dotenv.config({ path: "./backend/config/config.env" });

//connecting to database
connectDatabase.connectDatabase();

app.listen(4000, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})