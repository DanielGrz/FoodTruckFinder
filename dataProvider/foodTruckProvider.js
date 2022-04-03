const https = require('https');
const fs = require('fs');
require('dotenv').config();

const downloadFile = async (url, fileFullPath) => {
    let flag = fs.existsSync(fileFullPath)
    if (flag) {
        console.log(`File exists`)
        return false;
    }
    else {
        console.info('downloading file from url: ' + url)
        return new Promise((resolve, reject) => {
            https.get(url, (resp) => {

                // chunk received from the server
                resp.on('data', (chunk) => {
                    fs.appendFileSync(fileFullPath, chunk);
                });

                // last chunk received, we are done
                resp.on('end', () => {
                    resolve(true);
                });

            }).on("error", (err) => {
                reject(new Error(err.message))
            });
        })
    }
}

const url = process.env.FOOD_TRUCK_API_URL;
const fileFullPath = `${process.env.RESOURCES}/FoodTruckInfo.csv`;

const data = downloadFile(url, fileFullPath)
    .then(res => res)
    .catch(err => console.log(err));

module.exports = data;
