import Navbar from './Navbar.jsx'
import './Profile.css'
import diseaseList from "./data/diseaseList.json"
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';


function Disease() {
  const list = diseaseList.diseaseList;
  const [showAlert, setShowAlert] = useState(false);

  const messageLines = [
    'Directorate General of Mines Safety (DGMS): 0326 2221015',
    'Coal India Limited: 9477011383',
    'National Disaster Response Force (NDRF):1070 (Toll-Free)'
  ];


  // Step 3: Create a function to update the message state when the button is clicked
  const handleClick = () => {
    setShowAlert(!showAlert);
  };

  return (

    <div className='container'>
      <Navbar/>
      <h1>Rescue GUI</h1>
      <div className='diseases'>
          {list.map((list) => (
            <div className='list' key={list.plant_id}>
              <h2 className='title'>{list.title}</h2>
              
              <Button variant="contained" color="primary" onClick={handleClick}><p className='content'>{list.content}</p> </Button>
            </div>
          ))}
          {showAlert && (
        <div className="modal">
          <div className="modal-content">
            {/* Step 7: Render each line of the multiline message */}
            {messageLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            {/* Step 8: Button to close the alert */}
            <button onClick={handleClick}>Close</button>
          </div>
        </div>
      )}
        </div>
    </div>
  )
}

export default Disease