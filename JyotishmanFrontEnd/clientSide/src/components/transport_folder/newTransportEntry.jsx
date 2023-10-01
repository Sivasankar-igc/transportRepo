import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alert from "alert";

const NewTransportEntry = () => {

    const navigate = useNavigate();

    const [bill_date, setBillDate] = useState();
    const [ship_to_party, setShiptoparty] = useState();
    const [destination, setDestination] = useState();
    const [truck_no, setTruckno] = useState();
    const [quantity, setQuantity] = useState();
    const [rate, setRate] = useState();
    const [amount, setAmount] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/newTransportEntry", { bill_date, ship_to_party, destination, truck_no, quantity, rate, amount })
            .then((res)=>{res.data? navigate("/transportDataPage") : alert("Something went wrong...check console for more details")})
            .catch(err => console.error(err))
    }

    return (
        <>
            <form className="transportEntry" onSubmit={handleSubmit}>
                <label htmlFor="bill_no">BILL DATE : </label><input type="datetime-local" id="bill_no" onChange={(e) => setBillDate(e.target.value)} /><br />
                <label htmlFor="ship_to_party">SHIP TO PARTY : </label><input type="text" placeholder="eg.: CEMENT STORE" autoComplete="false" id="ship_to_party" onChange={(e) => setShiptoparty(e.target.value)} /><br />
                <label htmlFor="destination">DESTINATION : </label><input type="text" placeholder="eg.: CuttackToBbsr" autoCorrect="true" id="destination" onChange={(e) => setDestination(e.target.value)} /><br />
                <label htmlFor="truck_no">TRUCK NO : </label><input type="text" placeholder="eg.: OD02AA5125" autoCorrect="true" id="truck_no" onChange={(e) => setTruckno(e.target.value)} /><br />
                <label htmlFor="quantity">QUANTITY : </label><input type="number" placeholder="Enter the quantity of item supplied in tons" id="quantity" onChange={(e) => setQuantity(e.target.value)} /><br />
                <label htmlFor="rate">RATE : </label><input type="number" placeholder="Enter the rate of the item per ton" id="rate" onChange={(e) => setRate(e.target.value)} /><br/>
                

                <button type="submit">SUBMIT</button>
            </form>

        </>
    )
}

export default NewTransportEntry;