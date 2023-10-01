import express from "express";
import { transport_collection, fuel_collection } from "./database.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";

const web = express();

web.use(express.urlencoded({ extended: false }));
web.use(cors());
web.use(express.json());

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

web.post("/adminLogin", async(req, res)=>{
    try {
        const {user,pass} = req.body;
        
        (user === "User" && pass === "0000") ? res.status(201).send(true) : res.status(201).send(false)
        
    } catch (error) {
        console.log(error);
    }
})

web.post("/newTransportEntry", async (req, res) => {
    try {
        const { bill_date, ship_to_party, destination, truck_no, quantity, rate, amount } = req.body;
        const t_info = new transport_collection({

            SLNO: await transport_collection.find({}).count() + 1,
            BILL_DATE: bill_date,
            SHIP_TO_PARTY: ship_to_party,
            DESTINATION: destination,
            TRUCK_NO: truck_no,
            QUANTITY: quantity,
            RATE: rate,
            AMOUNT: quantity * rate
        })

        const data = await t_info.save();
        data != null? res.status(201).send(true):res.status(201).send(false);
    }
    catch (err) {
        console.error(err);
    }
})

web.post("/newFuelEntry", async (req, res) => {
    try {
        const { saleDate, vehicleNo, itemName, price, quantity, totalPrice } = req.body;

        const fuel_info = new fuel_collection({
            SLNO: await fuel_collection.find({}).count() + 1,
            SALE_DATE: saleDate,
            VEHICLE_NO: vehicleNo,
            ITEM_NAME: itemName,
            PRICE: price,
            QUANTITY: quantity,
            TOTAL_PRICE: totalPrice
        })

        const fuel_data = await fuel_info.save();

        fuel_data!=null? res.status(201).send(true):res.status(201).send(false);
    } catch (error) {
        console.error(err);
    }
})

web.get("/retrieveTransportInfo", async (req, res) => {
    try {
        const data = await transport_collection.find({});
        res.status(201).send(data);
    } catch (error) {
        console.error(error);
    }
})

web.get("/retrieveFuelInfo", async ( req, res)=>{
    try {
        const fuel_data = await fuel_collection.find({});
        res.status(201).send(fuel_data);
    } catch (error) {
        console.error(err);
    }
})

web.post("/editData", async (req, res) => {
    try {
        const { s_no, arr_time, dist_traveled, otherPayments } = req.body;

        await transport_collection.updateOne({ serialNo: s_no }, { $set: { arrivalTime: arr_time, distanceTraveled: dist_traveled, otherEssentialsPayments: otherPayments } })
    } catch (err) {
        console.error(err);
    }
})

web.post("/deleteFuelData", async (req, res)=>{
    try {
        const {s_no} = req.body;
        let temp = s_no;

        await fuel_collection.deleteOne({SLNO : temp});

        let data = await fuel_collection.updateMany({SLNO : {$gt : temp}}, {$inc : {SLNO : - 1}})

        data?res.status(201).send(true):res.status(201).send(false);
    } catch (error) {
        console.error(error);
    }
})

web.post("/deleteTransportData", async (req, res)=>{
    try {
        const {s_no} = req.body;
        let temp = s_no;

        await transport_collection.deleteOne({SLNO : temp});

        let data = await transport_collection.updateMany({SLNO : {$gt : temp}}, {$inc : {SLNO : - 1}})

        data?res.status(201).send(true):res.status(201).send(false);
    } catch (error) {
        console.error(error);
    }
})

web.use(express.static(path.join(__dirname, "./JyotishmanFrontEnd/clientSide/dist")))
web.get("*", (req, res)=>{
    try {
        res.sendFile(path.join(__dirname, "./JyotishmanFrontEnd/clientSide/dist/index.html"))
    } catch (error) {
        console.error(`Clientside Source Couldn't be recovered ===>>> ${error}`)
    }
})

web.listen(PORT, () => console.log(`server running at port number ${PORT}`));