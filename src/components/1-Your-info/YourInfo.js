import React from 'react'
import './YourInfo.css';
function YourInfo() {
    return (
        <div className='main'>
            <div className='header'>
                <h1>Personal info</h1>
                <p>Please provide your name, email adress, and phone number.</p>
            </div>
            <div className='your-info-form'>
                <h3>Name</h3>
                <input type="text" />
                <h3>Email Adress</h3>
                <input type="text" />
                <h3>Phone Number</h3>
                <input type="text" />
            </div>
            <div className='buton-div'>
                <button className='next-btn'>
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default YourInfo