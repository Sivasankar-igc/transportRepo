import axios from "axios";
import { useNavigate } from "react-router-dom"

const FuelTableData = ({ fuel_info, handleEdit }) => {
    const navigate = useNavigate();
    const s_no = fuel_info.SLNO;

    const deleteData = (e) => {
        e.preventDefault();
        axios.post("/deleteFuelData", { s_no })
            .then((res) => {res.data ? location.reload():alert("something went wrong...check console for more details")})
            .catch((err) => console.error(err))
    }

    const confirmation = (e) => {
        if(window.confirm("Are You Sure"))
            deleteData(e);
    }

    return (
        <tr>
            <td>{fuel_info.SLNO}</td>
            <td>{fuel_info.SALE_DATE}</td>
            <td>{fuel_info.VEHICLE_NO}</td>
            <td>{fuel_info.ITEM_NAME}</td>
            <td>{fuel_info.PRICE}</td>
            <td>{fuel_info.QUANTITY}</td>
            <td>{fuel_info.TOTAL_PRICE}</td>
            {/* <td><button onClick={()=>navigate("/editFuelData",{state : {s_no: s_no}})}>EDIT</button></td> */}
            <td><form onSubmit={confirmation}><button type="submit">DELETE</button></form></td>
        </tr>
    )
}

export default FuelTableData;