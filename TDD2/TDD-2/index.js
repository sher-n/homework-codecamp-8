const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const db = require('./models');

const registerControllers = require("./controllers/register")();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
    res.render('register');
});

app.post('/register_completed', registerControllers.registerCompleted );

async function main() {
    await db.sequelize.sync();
    app.listen(3000,() => console.log('Server runnin at 3000'));
}
main();