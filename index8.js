import mongoose from 'mongoose';
import express from "express";
import studentModel from './model/studentModel.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

await mongoose.connect('mongodb://localhost:27017/collage').then(() => {
    console.log("___Connected____");
})

app.get('/', async(req, resp) => {
    const studentData = await studentModel.find();
    resp.send(studentData);
});

app.post('/save', async(req, resp) => {
   console.log(req.body);

   const data = await studentModel.create(req.body);
   resp.send({
    message: 'Data Saved',
    success: true,
    result: data
   })
});

app.put('/update/:id', async(req, resp) => {
   console.log(req.body);
   const id = req.params.id;

   const data = await studentModel.findByIdAndUpdate(id, {...req.body});
   resp.send({
    message: 'Data Updated',
    success: true,
    result: data
   })
});

app.delete('/delete/:id', async(req, resp) => {
   const id = req.params.id;

   const data = await studentModel.findByIdAndDelete(id);
   resp.send({
    message: 'Data Deleted',
    success: true,
    result: data
   })
});

app.listen(5000);



// async function dbConnection() {
//     await mongoose.connect('mongodb://localhost:27017/collage');

//     const schema = mongoose.Schema({
//         name: String,
//         email: String,
//         age: Number
//     });

//     const studentModel = mongoose.model('students', schema);
//     const result = await studentModel.find();
//     console.log(result);
// }

// dbConnection();