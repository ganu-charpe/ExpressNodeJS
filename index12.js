import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ganu.charpe@gmail.com",
        pass: "qerv xhvy zohu ijvo"   // Gmail App Password
    }
})

app.get('/mail', (req,resp) => {
    resp.render('mail');
});

app.post('/send-email', async (req, resp) => {
    console.log(req.body);
    const { name, email, message } = req.body;

    await transporter.sendMail({
    from: "ganu.charpe@gamil.com",
    to: email,
    subject: "Contact Form",
    html: `
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <p>${message}</p>
        `
    });

    resp.send("✅ Email Sent Successfully!");
})

app.listen(5000);