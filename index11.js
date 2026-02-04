import express from 'express';
import { getPublicPath } from './utilities/getPath.js';
import session from 'express-session';

const app = express();
const publicPath = getPublicPath('public');

app.set('view engine', 'ejs');
app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'ganesh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000, // set session time
        httpOnly: true,
    }
}));



app.get('/login', (req, resp) => {
    resp.render('login');
});

app.post('/submit', (req, resp) => {
    // Set session
    req.session.data = req.body;
    console.log(req.session.data);

    // Set Cookies
    resp.setHeader('Set-Cookie', 'login=true');
    resp.setHeader('Set-Cookie', `name=${req.body.username}`);

    resp.send('Profile Page');
})

app.get('/', (req,resp) => {
    //Get session
    const sessionData = req.session.data;
    console.log('data', sessionData);

    // Get Cookies
    let cookies = req.get('cookie');
    
    cookies = cookies.split(';');
    cookies = cookies[1].split('=');
    
    console.log(cookies);

    // 
    resp.send(sessionData);
})

app.listen(5000);