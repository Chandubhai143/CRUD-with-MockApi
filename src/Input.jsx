import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Input = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location?.state?.data);

  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 
  const handleSubmit = async () => {
    let data = {
      Name: formData.name,
      Age: formData.age,
      Email: formData.email,
    };

    const response = await axios.post('https://6717c5b5b910c6a6e029e8a6.mockapi.io/chkdata', data);
    if (response?.status === 201 || response?.statusText === "Created") {
      setFormData({ name: '', age: '', email: '' }); 
    }
    console.log(response);

  };

  
  const handleUpdate = async () => {
    let data = {
      Name: formData.name,
      Age: formData.age,
      Email: formData.email,
    };

    const response = await axios.put(`https://6717c5b5b910c6a6e029e8a6.mockapi.io/chkdata/${location?.state?.data.id}`, data);
    if (response?.status === 200) {
      navigate('/show');
    }
  };

 
  useEffect(() => {
    const dataStatus = location?.state?.data;
    if (dataStatus) {
      setFormData({
        name: dataStatus.Name,
        age: dataStatus.Age,
        email: dataStatus.Email,
      });
    }
  }, [location]);

  return (
    <>
      <div className="frm w-50 ms-auto me-auto mt-5 border-dark bg-info-subtle p-3 rounded-5">
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={location?.state?.data ? handleUpdate : handleSubmit}>
          {location?.state?.data ? 'Update' : 'Submit'}
        </button>
      </div>
    </>
  );
};

export default Input;
