import express from 'express';
import getAbsPath, { getPublicPath } from './utilities/getPath.js';
import morgan from 'morgan';


const app = express();
const absPath = getAbsPath('view');

const publicPath = getPublicPath('public');

app.use(express.urlencoded({extended:false}));

app.use(express.static(publicPath));

app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
    resp.render('home', {name: 'Ganesh', city: 'Nagpur', country: 'India'});
});




app.listen(5000);