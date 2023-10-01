import FuelTableData from "./fuelDataTable";
import { useState, useEffect, Fragment } from "react";
// import TableEdit from "..//dataPage_TableEdit";

const FuelDataPage = () => {
    const [fuelinfo, setFuelInfo] = useState([]);

    const fuelInfo = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.length > 0)
                setFuelInfo(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fuelInfo("/retrieveFuelInfo",
            { method: "GET" }
        )
    }, [])

    const [editInfo, setEditInfo] = useState(null);
    const [serial_no, setserial_no] = useState(null);

    const handleEdit = (event, curEditInfo) => {
        event.preventDefault();
        setEditInfo(curEditInfo.serialNo);
        setserial_no(curEditInfo.serialNo);
    }

    return (
        <>
                <table className="fuelTable">
                    <thead>
                        <tr>
                            <th>SL NO</th>
                            <th>SALE DATE</th>
                            <th>VEHICLE NO</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL PRICE</th>
                            <th>ACTION</th>                                      
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fuelinfo.map((fuel_info) => (
                                <FuelTableData fuel_info={fuel_info} handleEdit={handleEdit} />
                            ))
                        }
                    </tbody>
                </table>
        </>
    )
}

export default FuelDataPage;