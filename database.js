const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TransportDatabase")
    .then(() => { console.log("TransportDatabase connected") })
    .catch((err) => console.log(err));

const transportSchema = mongoose.Schema({
    SLNO: {
        type: Number,
        unique: true,
        required: true
    },
    BILL_DATE: {
        type: String,
        unique: false,
        required: true
    },
    SHIP_TO_PARTY: {
        type: String,
        unique: false,
        required: true
    },
    DESTINATION: {
        type: String,
        unique: false,
        required: true
    },
    TRUCK_NO: {
        type: String,
        unique: false,
        required: true
    },
    QUANTITY: {
        type: Number,
        unique: false,
    },
    RATE:{
        type: Number,
        unique: false
    }, 
    AMOUNT:{
        type: Number,
        unique: false
    }
});

const fuelSchema = mongoose.Schema({
    SLNO: {
        type: Number,
        unique: true,
        required: true
    },
    SALE_DATE: {
        type: String,
        unique: false,
        required: true
    },
    VEHICLE_NO: {
        type: String,
        unique: false
    },
    ITEM_NAME:{type: String},
    PRICE:{type: Number},
    QUANTITY:{type: Number},
    TOTAL_PRICE:{type: Number}
});

const transport_collection = new mongoose.model("transportInfo", transportSchema);
const fuel_collection = new mongoose.model("fuelInfo", fuelSchema);
module.exports = {transport_collection, fuel_collection};