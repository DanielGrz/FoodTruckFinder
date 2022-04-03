const express = require("express");
const app = express();
const port = 3000;
require("./dataReader/foodTruckDetails");

app.get("/", (req, res) => res.send("Hello this is my WEB API for searching food trucks!"));
const foodTruckRounter = require('./routes/foodTruck');
app.use('/food-trucks',foodTruckRounter)
app.listen(port, () => console.log(`Food-Truck app listening on port ${port}!`));