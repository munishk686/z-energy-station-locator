import express from "express";
import mongodb from "mongodb";
import cors from "cors";


const app = express();
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Z Energy API is running");
});

app.get("/api/stations", async (req, res) => {
  const client = new mongodb.MongoClient("mongodb://localhost:27017");
  await client.connect();
  const myDB = client.db("Stations");
  const myColl = myDB.collection("zStations");
  const stations = await myColl.find().toArray();
  res.json(stations);
  await client.close();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
