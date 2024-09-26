 import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import We from "./Components/We";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import FarmerPage from "./Components/Farmer/FarmerPage";
import ComposterPage from "./Components/Composter/ComposterPage";
import WasteSupplierPage from "./Components/Supplier/wasteSupplierPage";
import ProfilePage from "./Components/Supplier/ProfilePage";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";




const App = () => {

  

 
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="We" element={ < We />} /> 
       <Route path="Contact" element={ < Contact />} /> 
        <Route path="Login" element={ < Login />} /> 
        <Route path="Signup" element={ < Signup />} /> 
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="WasteSupplierPage" element={<WasteSupplierPage/>} />
        <Route path="WasteSupplierPage/Profile" element={<ProfilePage/>} />
        <Route path="ComposterPage" element={<ComposterPage/>} />
        <Route path="ComposterPage/Profile" element={<ProfilePage/>} />
        <Route path="FarmerPage" element={<FarmerPage/>} />
      <Route path="FarmerPage/Profile" element={<ProfilePage/>} />
      </Routes>
      </Router>

  );
}

export default App
