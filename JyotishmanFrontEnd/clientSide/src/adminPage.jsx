import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import alert from "alert";

const AdminPage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const handleAdminSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/adminLogin", { user, pass })
            .then((res) => { res.data ? navigate("/homePage") : alert("Either User or password or both are incorrect... ") })
            .catch((err) => console.error(err))
    }

    return (
        <>
            <div className="adminForm">
            <div id="imageHolder"></div>
                <form onSubmit={handleAdminSubmit}>
                    
                    <ul>
                        <li><input type="text" id="username" placeholder="Enter the User name..." onChange={(e) => setUser(e.target.value)} /></li>
                        <li><input type="password" id="password" placeholder="Enter the password..." onChange={(e) => setPass(e.target.value)} /></li>
                    </ul>

                    <button type="submit">LOGIN</button>
                </form>
            </div>

        </>
    )
}

export default AdminPage;