import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    let collection;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.7hfizqc.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    collection = client.db().collection("blog");
    try {
      const result = await collection.insertOne(newMessage);
      newMessage.id = result.insertedId;
      res.status(201).json({ message: "Successfully stored message!" });
    } catch (e) {
      res.status(500).json({ message: "Could not store data!" });
      client.close();
      return;
    }
    client.close();
  }
}
