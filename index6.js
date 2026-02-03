import express from 'express';
import { userList } from './model/userModel.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.get('/', (req, resp)=> {
    const usersdata = userList();
    let data = `<ul>`;

    for (let i=0; i < usersdata.length; i++) {
        data += `<li>
        <a href="user/${usersdata[i]}">This is ${usersdata[i]}</a>
        </li>`
    }

    data+= `</ul>`;
    resp.send(data);
});

app.get('/user/:name', (req, resp) => {
    console.log(req.params.name);

    resp.send(`This is ${req.params.name} profile`);
})


app.listen(5000);