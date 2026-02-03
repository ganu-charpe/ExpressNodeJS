/* Vanilla JS syntax */
// const express = require('express');

/* ECMA script syntax*/
import express from 'express';
import home, { contact } from './pages/home.js';
import loginPage from './pages/login.js';
import submitData from './pages/submit.js';

const app = express();

app.get('/', (req, resp) => {
    resp.send(home());
});

app.get('/login', (req, resp) => {
    resp.send(loginPage());
})

app.post('/submit', (req, resp) => {
    resp.send(submitData());
})

// app.get('/contact', (req, resp) => {
//     resp.send(contact());
// })

app.listen(5000);