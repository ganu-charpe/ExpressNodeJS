import express from 'express';

const app = express();

function ageCheck(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        resp.send('Alert! You can not acces this page');
    } else {
        next()
    }
}

// app.use(ageCheck);

function ipCheck(req, resp, next) {
    const ip = req.socket.remoteAddress;
    console.log(ip);
    if(ip.includes('172.16.20.107')) {
        resp.send('Alert! You can not access this page');
    } else {
        next();
    }
}

// app.use(ipCheck);


app.get('/',ageCheck, ipCheck, (req, resp) => {
    resp.send('<h1> Home page</h1>');
});

app.get('/login',ageCheck, ipCheck, (req, resp) => {
    resp.send('<h1> Login page</h1>');
});

app.use((req, resp) => {
    resp.status(404).send('Page Not found');
});


app.listen(5000);