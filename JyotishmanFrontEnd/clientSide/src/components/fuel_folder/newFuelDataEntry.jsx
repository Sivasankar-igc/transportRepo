import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alert from "alert";

const NewFuelEntry = () => {

    const navigate = useNavigate();

    const [saleDate, setSaleDate] = useState();
    const [vehicleNo, setVehicleNo] = useState();
    const [itemName, setItemName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [totalPrice, setTotalPrice] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/newFuelEntry", { saleDate, vehicleNo, itemName, price, quantity, totalPrice })
            .then((res)=>{res.data ? navigate("/fuelDataPage"):alert("something went wrong...check console for more details")})
            .catch(err => console.error(err))
    }

    return (
        <>
            <form className="fuelEntry" onSubmit={handleSubmit}>
                <label htmlFor="saleDate">SALE DATE : </label><input type="datetime-local" id="saleDate" onChange={(e) => setSaleDate(e.target.value)} /><br />
                <label htmlFor="vehicleNo">VEHICLE NO : </label><input type="text" placeholder="eg.: OD02AA5125" autoComplete="false" id="vehicleNo" onChange={(e) => setVehicleNo(e.target.value)} /><br />
                <label htmlFor="itemName">ITEM NAME : </label><input type="text" placeholder="eg.: DIESEL" autoCorrect="true" id="itemName" onChange={(e) => setItemName(e.target.value)} /><br />
                <label htmlFor="price">PRICE : </label><input type="number" placeholder="Enter the current fuel price per litre" autoCorrect="true" id="price" onChange={(e) => setPrice(e.target.value)} /><br />
                <label htmlFor="quantity">QUANTITY : </label><input type="number" placeholder="Enter the quantity of the fuel" id="quantity" onChange={(e) => setQuantity(e.target.value)} /><br />
                <label htmlFor="total_price">TOTAL PRICE : </label><input type="number" placeholder="Enter the total price" id="total_price" onChange={(e) => setTotalPrice(e.target.value)} />

                <button type="submit">SUBMIT</button>
            </form>

        </>
    )
}

export default NewFuelEntry;