const { MongoClient } = require("mongodb");
const colors = require("colors")
require("dotenv").config();

const client = new MongoClient(process.env.DB_URI)
const dbName = "MongoNodeCrud"
let db;

async function main() {
    // connecting with MongoDB
    await client.connect();
    db = client.db(dbName)
}

main().then(() => {
    db = client.db(dbName)
    console.log(`Connexion établie avec MongoDB`.bgCyan.bold)
}).catch((error) => console.log(error))

module.exports = {
    client,
    db
}