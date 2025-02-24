import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://dbAdmin:admin123@cluster0.xm9ie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");


