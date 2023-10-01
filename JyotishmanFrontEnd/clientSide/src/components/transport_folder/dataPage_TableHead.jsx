import TransportTableData from "./transportDataTable";
import { useState, useEffect, Fragment } from "react";
import TableEdit from "./dataPage_TableEdit";

const TransportDataPage = () => {
    const [info, setInfo] = useState([]);

    const transportInfo = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.length > 0)
                setInfo(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        transportInfo("/retrieveTransportInfo",
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
                <table className="transportTable">
                    <thead>
                        <tr>
                            <th>SL.NO.</th>
                            <th>BILL DATE</th>
                            <th>SHIP TO PARTY</th>
                            <th>DESTINATION</th>
                            <th>TRUCK NO.</th>
                            <th>QUANTITY</th>
                            <th>RATE</th>
                            <th>AMOUNT</th> 
                            <th>ACTION</th>         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.map((vehicle_info) => (
                                <TransportTableData vehicle_info={vehicle_info} handleEdit={handleEdit} />
                            ))
                        }
                    </tbody>
                </table>
        </>
    )
}

export default TransportDataPage;