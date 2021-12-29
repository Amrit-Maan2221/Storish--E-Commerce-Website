const app = require('./app');
const dotenv = require("dotenv");

// config
dotenv.config({ path: "./backend/config/config.env" });

app.listen(4000, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})