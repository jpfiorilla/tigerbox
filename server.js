const env = process.env.NODE_ENV || 'dev';

const express 		= require('express');
const app 			= express();
const mongoose 		= require('mongoose');
const bodyParser 	= require('body-parser');
const path          = require('path');
const helmet        = require('helmet');

const { login, createAccount } = require('./routes');
const publicPath = express.static(path.join(__dirname, '/public/build'))
const imagePath = express.static(path.join(__dirname, 'public/images'))
process.env.PWD = process.cwd();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use('/build', publicPath)
app.use('/images/', imagePath)

app.use('/api', login);
app.use('/api', createAccount);

app.get('*', function (req, res) {
    res.sendFile( process.env.PWD + "/index.html" );
});

const server = app.listen(process.env.PORT || 3000, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

let mongoUri = `mongodb://tigerbox:tiger330@ds159033.mlab.com:59033/tigerboxusers`;

/* comment if working offline
mongoose.connect(mongoUri, (err) => { if (err) { throw err; } });
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => console.log('DB is now connected!'));
*/
