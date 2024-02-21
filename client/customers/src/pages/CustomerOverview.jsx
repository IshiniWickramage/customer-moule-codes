import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import TextField from "../components/TextField";
import Header from "../components/Header";
import LeftSideNavBar from "../components/LeftSideNavBar";

function CustomerOverview() {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3005/customers/${id}`)
      .then(res => setCustomerData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="App">
      <Header />
      <div className="parts" style={{ float: 'left', marginLeft: '0px', marginRight: '20px' }}>
        <LeftSideNavBar />
      </div>

      <div className="parts" style={{ float: 'left', padding: "17px", paddingBottom: "50px", marginTop: "24px", borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: "30px", height: '40px', width: '900px', borderRadius: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 className="subheaderTitle" style={{ padding: 10, marginLeft: '20px' }}>Customer Overview</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Search" style={{ marginRight: '10px', padding: '2px', borderRadius: 10 }} />
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }} />
            <FontAwesomeIcon icon={faSave} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }} />
            <FontAwesomeIcon icon={faTrash} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer', height: '20px' }} />
            <FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: '1.5rem', cursor: 'pointer', margin: '10px', height: '20px' }} />
          </div>
        </div>

        <div className="body-part" style={{ padding: 20, borderRadius: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="customerId">Customer ID:</label>
              <TextField
                id="customerId"
                type="text"
                value={customerData.name}
                disabled
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="fullName">Full Name:</label>
              <TextField
                id="fullName"
                type="text"
                value={customerData.fullName}
                disabled
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="identifier">Identifier:</label>
              <TextField
                id="identifier"
                type="text"
                value={customerData.identifier}
                disabled
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="address">Address:</label>
              <TextField
                id="address"
                type="text"
                value={customerData.address}
                disabled
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="email">Email:</label>
              <TextField
                id="email"
                type="text"
                value={customerData.email}
                disabled
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label htmlFor="contactNo">Contact No:</label>
              <TextField
                id="contactNo"
                type="text"
                value={customerData.contactNo}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerOverview;
