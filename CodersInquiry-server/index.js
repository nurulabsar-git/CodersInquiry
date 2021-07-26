const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b9ncf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
client.connect(err => {
  console.log("error:", err);
  const collection = client.db("myCommerce").collection("commerce");
  console.log("Connection successfully done");
  
  // console.log(collection);







});








app.get('/', (req, res) => {
  res.send('Hello World!, This is server side')
})

app.listen(process.env.PORT || 9000, () => {
  console.log("http://localhost:9000")
})