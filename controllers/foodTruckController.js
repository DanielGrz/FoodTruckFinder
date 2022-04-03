const data = require("../dataReader/foodTruckDetails")

exports.filtered_list = async (req, res) => {
    try {
        let filters= req.query;
        const filteredArray = (await data).filter(item => {
            let result = true;
            for (let key in filters) {
                if (item[key] !== filters[key]) {
                    result = false;
                    break;
                }
            }
            return result;
        });
        res.json(filteredArray);
    }
    catch (err)
    {
        res.status(500);
        res.send(err.message);
    }
}

exports.full_list = async (req, res) => {
    try {
        res.json(await data);
    }
    catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.filter_by_id = async (req, res) => {
    try {
        let filter = (await data).filter(x => x.locationid == req.params.id)
        res.json(filter);
    }
    catch (err) {
        res.status(500);
        res.send(err.message);
    }

};