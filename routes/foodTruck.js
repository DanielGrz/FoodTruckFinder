const express = require('express');
const router = express.Router();
const foodTruck_controller = require("../controllers/foodTruckController")

router.get('/filter', foodTruck_controller.filtered_list);
router.get('', foodTruck_controller.full_list);
router.get('/:id', foodTruck_controller.filter_by_id);

module.exports = router;