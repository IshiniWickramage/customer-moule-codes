import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPencilAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import LeftSideNavBar from '../components/LeftSideNavBar';

function CustomerList() {
  const [data, setData] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3005/customers")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  return (
    <div className="App">
      <Header />
      <div className="parts" style={{ float: 'left', marginLeft: '0px', marginRight: '20px' }}>
        <LeftSideNavBar />
      </div>
      <div className="parts" style={{ float: 'left', padding: "17px", paddingBottom: "50px", width: "900px", marginLeft: "30px", marginTop: "40px", borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div className='d-flex flex-column w-800 vh-40 bg-white'>
          <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: "30px", height: '45px', width: '860px', borderRadius: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 className="subheaderTitle" style={{ paddingTop: 5, paddingLeft: 30 }}>
              Customers
            </h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="text" placeholder="Search" style={{ marginRight: '10px', padding: '2px', borderRadius: 10, height: "30px" }} />
            </div>
          </div>
          <table className='table table-bordered' style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: 'white' }}>
                <th style={{ height: "50px" }}>Action</th>
                <th style={{ backgroundColor: '#F0ECE8', }}>Customer ID</th>
                <th style={{ backgroundColor: '#F0ECE8', }}>FullName</th>
                <th style={{ backgroundColor: '#F0ECE8', }}>Identifier</th>
                <th style={{ backgroundColor: '#F0ECE8', }}>Address</th>
                <th style={{ backgroundColor: '#F0ECE8', }}>Email</th>
                <th style={{ backgroundColor: '#F0ECE8', }}>ContactNo</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i} style={{ backgroundColor: 'white' }}>
                  <td>
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faEllipsisH} onClick={toggleOptions} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    {showOptions && (
                      <div>
                        {/* Use Link to navigate to CustomerOverview with the specific ID */}
                        <Link to={`/CustomerOverview/${d.id}`}>
                          <FontAwesomeIcon icon={faPencilAlt} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                        </Link>
                        <FontAwesomeIcon icon={faInfoCircle} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                      </div>
                    )}
                  </td>
                  <td>{d.name}</td>
                  <td>{d.fullName}</td>
                  <td>{d.identifier}</td>
                  <td>{d.address}</td>
                  <td>{d.email}</td>
                  <td>{d.contactNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CustomerList;
