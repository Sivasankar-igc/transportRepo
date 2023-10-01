import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="home-page">
                <ul>
                    <li><button onClick={() => navigate("/newTransportEntry")}>NEW TRANSPORT ENTRY</button></li>
                    <li><button onClick={() => navigate("/newFuelEntry")}>NEW FUEL ENTRY</button></li>
                    <li><button onClick={() => navigate("/transportDatapage")}>SHOW TRANSPORT DATA</button></li>
                    <li><button onClick={() => navigate("/fuelDatapage")}>SHOW FUEL DATA</button></li>
                </ul>
            </div>
        </>
    )
}

export default HomePage;