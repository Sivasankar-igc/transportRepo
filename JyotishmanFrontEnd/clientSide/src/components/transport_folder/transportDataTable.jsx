import { useNavigate } from "react-router-dom"
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";

const TransportTableData = ({ vehicle_info, handleEdit }) => {
    const navigate = useNavigate();
    const s_no = vehicle_info.SLNO;

    const deleteData = (e) => {
        e.preventDefault();
        axios.post("/deleteTransportData", { s_no })
            .then((res) => { res.data ? location.reload() : alert("something went wrong...check console for more details") })
            .catch((err) => console.error(err))
    }

    const confirmation = (e) => {
        if(window.confirm("Are You Sure"))
            deleteData(e);
    }

    return (
        <tr>
            <td>{vehicle_info.SLNO}</td>
            <td>{vehicle_info.BILL_DATE}</td>
            <td>{vehicle_info.SHIP_TO_PARTY}</td>
            <td>{vehicle_info.DESTINATION}</td>
            <td>{vehicle_info.TRUCK_NO}</td>
            <td>{vehicle_info.QUANTITY}</td>
            <td>{vehicle_info.RATE}</td>
            <td>{vehicle_info.AMOUNT}</td>
            {/* <td><button onClick={()=>navigate("/editTransportData",{state : {s_no: s_no}})}>EDIT</button></td>
            // <td><button onClick={()=>navigate("/deleteTransportData",{state : {s_no: s_no}})}>DELETE</button></td> */}

            <td><form onSubmit={confirmation}><button type="submit">DELETE</button></form></td>
        </tr>
    )
}

export default TransportTableData;