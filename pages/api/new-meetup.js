import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // connecting mongo client using connection string
    const client = await MongoClient.connect(
      "mongodb+srv://jatincodage:6IINHlV47uogOLX8@meetupscluster.jeznuld.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("meetupsApp");

    const collection = db.collection("meetupsData");
    const result = await collection.insertOne(data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup Added Successfully!" });
  }
};
export default handler;
