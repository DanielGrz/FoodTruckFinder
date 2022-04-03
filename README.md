## FoodTruckFinder
A simple web API for finding food trucks from san francisco and filtering it by needs and information that is required.
The api get's a file from another API and stores it in the resources folder which is used for parsing and querying the data for the routes used in the API.

## Project Structure:
 * Controller
    * All the necesary controller will be contained in this folder
 * dataProvider
    * Contains methods for bringing the data in our local resources folder, or can be changed to bring data to a local DB
 * dataReader
    * Contains the information brought by the dataProvider and is made avaliable to the API.
 * Models
    * Contains the model for the response of the API and in which we match data to the props.
 * Resources
    * Contains the file saved by the dataProvider
 * Routes
    * Contains the api routes for every service provided.
 * Server.js
    * Contains all the configuration for running the server and configuration for routes available to the API.

## How To Run It Localy
1. Have Node.js installed on your local machine, you can get it from: https://nodejs.org/en/ download the LTS version.
2. Open the solution with Visual Studio Code (Open folder -> location where you downloaded the repository).
3. Open terminal and write npm install for installing all the required packages from package.json
4. To run the application use node server.js in the comand terminal
5. Go to http://localhost:3000/ -> it will render the HomePage
6. Go to http://localhost:3000/food-trucks will bring the data with all the food trucks in San Francisco.
7. Go to http://localhost:3000/food-trucks/id -> id is a locationid to bring all the food trucks in that location.
8. Go to http://localhost:3000/food-trucks/filter? -> and provide query string parameters to filter the list based on the options you like. (available parameters for the query string are available on the models/foodTruck.js)

## Improvements

The program can be improved with:
1. The information from the csv file can be added to a local DB so we can have the opportunity to create queries

## Lanaguage choice

## Images from runtime

http://localhost:3000/ 
![image](https://user-images.githubusercontent.com/102904814/161433125-87d158c5-9e4e-4b92-a3c4-aa56b509c4e0.png)

http://localhost:3000/food-trucks
![image](https://user-images.githubusercontent.com/102904814/161433161-999a1f61-5956-41b2-9195-892186170556.png)

http://localhost:3000/food-trucks/id
![image](https://user-images.githubusercontent.com/102904814/161433192-950f3645-face-46f4-86df-990f596cb6ad.png)

http://localhost:3000/food-trucks/filter?
![image](https://user-images.githubusercontent.com/102904814/161433306-e1d95c0a-8f23-40e7-b7e4-f50ea2e72892.png)

