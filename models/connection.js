import mongodb from "mongodb";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.DB;

// Connecting MongoDB
async function connection() {
  const client = new MongoClient('mongodb://0.0.0.0:27017');
  await client.connect();
  console.log("Database connection established successfully!");
  return client;
}

export default connection;
