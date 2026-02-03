import express from "express";
import { MongoClient, ObjectId } from 'mongodb';

const app = express();

const dbName = "collage";
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

client.connect().then((config) => {
    const db = client.db(dbName);
    const collection = db.collection('students');

    app.get('/api', async(req,resp) => {
        const result = await collection.find().toArray();
        console.log(result);

        resp.send(result);
    })

    app.get('/add', (req, resp) => {
        resp.render('addUser', { user: {} , formAction: "/submit-user" });
    })

    app.post('/submit-user', async(req, resp) => {
        console.log(req.body);
        const { name, age, email } = req.body;

        if (name && age && email) {
            await collection.insertOne(req.body);
        }

        const result1 = await collection.find().toArray();
        console.log(result1)
        resp.render('studentsList', { users: result1 });
    })

    app.delete('/delete/:id', async(req, resp) => {
        console.log(req.params.id)
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});

        if (result) {
            resp.send({
                message: "Student data deleted.",
                success: true

            })
        } else {
            resp.send({
                message: "Not deleted",
                success: false

            })
        }
    })

    app.get('/ui/delete/:id', async(req, resp) => {
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});

        if (result) {
            resp.send({
                message: "Student data deleted.",
                success: true

            })
        } else {
            resp.send({
                message: "Not deleted",
                success: false

            })
        }
    })
    app.get('/ui/update/:id', async(req, resp) => {
        const id = req.params.id;
        console.log(id);
        const result = await collection.findOne({_id: new ObjectId(req.params.id)});

        resp.render('addUser', { user: result, formAction: `/update-user/${id}` });

    })

    app.post('/update-user/:id', async(req, resp) => {
        console.log(req.body);
        const { name, age, email } = req.body;

        const filter = {_id: new ObjectId(req.params.id)};
        const update = { $set:req.body };
        await collection.updateOne(filter, update);
        const result1 = await collection.find().toArray();
        console.log(result1)
        resp.render('studentsList', { users: result1 });

    })

})

// async function dbConnection() {
//     await client.connect();

//     const db = client.db(dbName);
//     const collection = db.collection('students');

//     const result = await collection.find().toArray();

//     console.log(result);
// }

// dbConnection();

app.listen(5000);