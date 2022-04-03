const csv = require('async-csv');
const fs = require('fs').promises;
const foodTruck = require("../models/foodTruck");
const data = require("../dataProvider/foodTruckProvider");
require('dotenv').config();
const path = `${process.env.RESOURCES}/FoodTruckInfo.csv`


const foodTruckDetails = (async () => {
    // Read file from disk:
    const status = await data;
    const csvString = await fs.readFile(path);

    let info = await csv.parse(csvString, { from_line: 1, columns: true, delimiter: ",", relax: true });
    let results = [];

    for (let i = 0; i < info.length; i++) {

        let data = info[i];
        let result = new
        foodTruck( data.locationid,data.Applicant,data.FacilityType, data.cnn, data.LocationDescription,data.Address, data.blocklot,
                        data.block, data.lot, data.permit, data.Status, data.FoodItems,data.X, data.Y,data.Latitude, data.Longitude, 
                        data.Schedule, data.dayshours, data.NOISent, data.Approved, data.Received, data.PriorPermit, data.ExpirationDate,
                        data.Location, data['Fire Prevention Districts'], data['Police Districts'], data['Supervisor Districts'], data['Zip Codes'],
                        data['Neighborhoods (old)'],
        )
        results.push(result);
    }
    return results;

}) ();

module.exports = foodTruckDetails;