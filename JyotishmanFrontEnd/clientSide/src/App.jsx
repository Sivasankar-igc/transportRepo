import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import NewTransportEntry from "./components/transport_folder/newTransportEntry";
import TransportDataPage from "./components/transport_folder/dataPage_TableHead";
import TableEdit from "./components/transport_folder/dataPage_TableEdit";
import NewFuelEntry from "./components/fuel_folder/newFuelDataEntry";
import FuelDataPage from "./components/fuel_folder/fuelDataTableHead";
import AdminPage from "./adminPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AdminPage />} />
        <Route path="/homePage" element={<HomePage/>}/>
        <Route path="/newTransportEntry" element={<NewTransportEntry />} />
        <Route path="/transportDataPage" element={<TransportDataPage />} />
        <Route path="/editTable" element={<TableEdit />} />
        <Route path="/newFuelEntry" element={<NewFuelEntry />} />
        <Route path="/fuelDataPage" element={<FuelDataPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;