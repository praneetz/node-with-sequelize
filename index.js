
const express = require('express');

//Database Connection
const db = require('./config/db');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();
app.use(express.json());
app.use("/",require('./router/userRouter'))

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));