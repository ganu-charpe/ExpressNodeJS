import express from 'express';
import { handleUser } from './controller/userController.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.get('/users', handleUser);


app.listen(5000);