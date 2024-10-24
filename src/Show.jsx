
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Show = () => {
  const navigate = useNavigate()
  const [dataList, setDataList] = useState([])
  // Handle delete
  const handleDelete = async (id) => {
    const response = await axios.delete(`https://6717c5b5b910c6a6e029e8a6.mockapi.io/chkdata/${id}`)
    if (response?.status === 200) {
      getData()
      alert('Delete!')
    }

  };

  // Handle edit
  const handleEdit = (id) => {

  };

  const getData = async () => {
    const response = await axios.get('https://6717c5b5b910c6a6e029e8a6.mockapi.io/chkdata')
    setDataList(response?.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="w-100 p-5 mt-4 d-flex flex-wrap gap-3">
      {dataList?.length > 0 ? (
        dataList?.map((data) => (
          <div key={data.id} className="border-dark bg-info-subtle p-3 rounded-5 mb-3" style={{ width: '300px' }}>
            <p><strong>Name:</strong> {data.Name}</p>
            <p><strong>Age:</strong> {data.Age}</p>
            <p><strong>Email:</strong> {data.Email}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-warning" onClick={() => navigate('/Input', { state: { data: data }, replace: true })}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default Show;


