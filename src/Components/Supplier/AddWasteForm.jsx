import React, { useState } from 'react';
import './addWasteForm.css';

const AddWasteForm = () => {
  const [wasteName, setWasteName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [organizationName, setOrganizationName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('wasteName', wasteName);
    formData.append('category', category);
    formData.append('quantity', quantity);
    formData.append('image', image);
    formData.append('price', price);
    formData.append('supplierName', supplierName);
    formData.append('organizationName', organizationName);

    try {
      const response = await fetch('/api/waste', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Waste data added successfully');
        setWasteName('');
        setCategory('');
        setQuantity('');
        setImage(null);
        setPrice('');
        setSupplierName('');
        setOrganizationName('');
      } else {
        console.error('Failed to add waste data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form className="add-waste-form-container" onSubmit={handleSubmit}>
      <h2>Add Waste</h2>
      <div>
        <label>Waste Name:</label>
        <input type="text" value={wasteName} onChange={(e) => setWasteName(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Supplier Name:</label>
        <input type="text" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} />
      </div>
      <div>
        <label>Organization Name:</label>
        <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddWasteForm;
