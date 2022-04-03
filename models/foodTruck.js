class foodTruck{
    constructor(locationid, applicant, facilityType, cnn, locationDescription,
        address, blocklot, block, lot, permit, status, foodItems, x, y, latitude, longitude, schedule, dayshours,
        NOISent, approved, received, priorPermit, expirationDate, location, firePreventionDistricts,
        policeDistricts, supervisorDistricts, zipCodes, neighborhoods) 
        {
        this.locationid = locationid;
        this.applicant = applicant;
        this.facilityType = facilityType;
        this.cnn = cnn;
        this.locationDescription = locationDescription;
        this.address = address;
        this.blocklot = blocklot;
        this.block = block;
        this.lot = lot;
        this.permit = permit;
        this.status = status;
        this.foodItems = foodItems;
        this.coordinatesXAxis = x;
        this.coordinatesYAxis = y;
        this.latitude = latitude;
        this.longitude = longitude;
        this.schedule = schedule;
        this.dayshours = dayshours;
        this.NOISent = NOISent;
        this.approved = approved;
        this.received = received;
        this.priorPermit = priorPermit;
        this.expirationDate = expirationDate;
        this.location = location;
        this.firePreventionDistricts = firePreventionDistricts;
        this.policeDistricts = policeDistricts;
        this.supervisorDistricts = supervisorDistricts;
        this.zipCodes = zipCodes;
        this.neighborhoods = neighborhoods;
    }
}

module.exports = foodTruck;