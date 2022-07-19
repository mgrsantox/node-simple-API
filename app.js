const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./src/routes')


// Connect to the database
const db = require('./src/config/db');

db.authenticate().then(() => {
    console.log('Database connected')
}).catch(err => {
    console.log('Database connection Error ' + err)
})


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors('*'))


app.use("/", routes)
// app.get("/", (req, res) => {

//     res.send({ 'message': 'ok' });
// })


/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});

const port = process.env.PORT || 4000;
const host = "0.0.0.0"

db.sync().then(()=>{
    app.listen(port, host, () =>{
        console.log(`App listening at http://localhost:${port}`)
    })
})
