import React, { useContext } from 'react'
import FormContext from '../../context/FormContext';
import './YourInfo.css';
function YourInfo() {
    const { count, setCount } = useContext(FormContext)
    const firstClick = () => {
        setCount(count + 1)
    }
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
                <button className='next-btn' onClick={firstClick}>
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default YourInfo