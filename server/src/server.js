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

 try {
  await client.connect();
  const myDB = client.db("Stations");
  const myColl = myDB.collection("zStations");
  const search = req.query.search || "";
  const stations = await myColl.find ({
    $or: [
      { name: { $regex: search, $options: "i"} },
      { address: { $regex: search, $options: "i" } }
    ]
  }) .toArray();
  res.json(stations);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "failed to fetch stations" });
} finally {
  await client.close();
}
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



