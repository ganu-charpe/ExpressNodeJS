import express from 'express';
import getAbsPath, { getPublicPath } from './utilities/getPath.js';
import morgan from 'morgan';


const app = express();
const absPath = getAbsPath('view');

const publicPath = getPublicPath('public');

app.use(express.urlencoded({extended:false}));

app.use(express.static(publicPath));

app.use(morgan('dev'));

app.get('/', (req, resp) => {
    resp.sendFile(`${absPath}/home.html`);
});

app.get('/login', (req, resp) => {
    resp.sendFile(`${absPath}/login.html`);
});

app.post('/submit', (req, resp) => {
    console.log(req.body);
    resp.send('Data Submitted');
});

app.get('/error', (req, resp, next) => {
    const err = new Error('');
    err.status = 404;
    next(err);
})

function errorHandling(error, req, resp, next) {
    resp.status(error.status || 500).send('Try after some time');
}

app.use(errorHandling);

app.use((req, resp) => {
    resp.status(404).sendFile(`${absPath}/404.html`);
});


app.listen(5000);