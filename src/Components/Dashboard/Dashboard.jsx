import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSupplierButtonClick = () => {
    // Navigate to the WasteSupplierPage
    navigate('/WasteSupplierPage');
  };

  const handleComposterButtonClick = () => {
    // Navigate to the ComposterPage
    navigate('/ComposterPage');
  };

  const handleFarmerButtonClick = () => {
    // Navigate to the FarmerPage
    navigate('/FarmerPage');
  };

  return (
    <div>
      <div className='Button1'>
        <button id="btn1" onClick={handleSupplierButtonClick}>For Suppliers</button>
      </div>
      <div className='Button2'>
        <button id="btn2" onClick={handleComposterButtonClick}>For Composters</button>
      </div>
      <div className='Button3'>
        <button id="btn3" onClick={handleFarmerButtonClick}>For Farmers</button>
      </div>
    </div>
  );
}

export default Dashboard;
