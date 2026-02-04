import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://ganucharpe_db_user:Welcome%40123@cluster0.aizcftz.mongodb.net/?appName=Cluster0';
const dbName = 'school';
const collection = 'student';
const client = new MongoClient(url);

client.connect().then(() => {
    console.log('____Connected_____');
});

async function dbConnection() {
    const db = client.db(dbName);
    const collectResult = db.collection(collection);
    const result = await collectResult.find().toArray();

    console.log(result);

}

dbConnection();