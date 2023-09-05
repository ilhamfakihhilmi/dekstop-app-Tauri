import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";
import Service from "../../Pages/Services";
import Laporan from "../../Pages/Inventory";
Service

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Service />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/laporan" element={<Laporan />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
