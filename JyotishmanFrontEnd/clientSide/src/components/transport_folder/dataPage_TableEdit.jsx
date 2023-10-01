import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const TableEdit = () => {
    const location = useLocation();
    const data = `Edit Data Of Serial No ${location.state.s_no}`;
    const s_no = location.state.s_no;
    
    const [arr_time, setArrTime] = useState();
    const [dist_traveled, setDestTraveled] = useState();
    const [otherPayments, setotherPayments] = useState();

    const handleEditInfo = (event) =>{
        event.preventDefault();
        axios.post("/editData", {s_no, arr_time, dist_traveled, otherPayments})
        .then(()=>console.log("data is edited"))
        .catch((err)=>console.log(err))
    }
    const newInput=()=>{
        return(
            <>
        <input type="text" name="" id="" />
        </>
        )
    }
    return (
        <>
            <form onSubmit={handleEditInfo}>
                <div>{data}</div>
                <label htmlFor="arr_time">Arrival Time : </label><input type="datetime-local" name="arr_time" id="arr_time" onChange={(e)=>setArrTime(e.target.value)}/><br />
                <label htmlFor="dest_traveled">Distance Traveled : </label><input type="number" name="dest_traveled" id="dest_traveled" onChange={(e)=>setDestTraveled(e.target.value)}/><br />
                <label htmlFor="otherEssentials">Other Payments : </label><input type="text" name="ohterEssentials" id="ohterEssentials" placeholder="e.g petrol : 10000, puncture : 500" onChange={(e)=>setotherPayments(e.target.value)}/>
                <button type="submit">SAVE</button>
            </form>
            
                
           
        </>
    )
}

export default TableEdit;