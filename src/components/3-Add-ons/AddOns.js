import React, { useContext, useState } from 'react'
import FormContext from '../../context/FormContext';
import './AddOns.css';

function AddOns() {
    const { moYr, largerStorageMoney, customProfileMoney, onlineServiceMoney, onlineService, largerStorage, customProfileClick, largerStorageClick, customProfile, onlineServiceClick, onlineServiceActive, setOnlineServiceActive, largerStorageActive, setLargerStorageActive, customProfileeActive, setCustomProfileActive } = useContext(FormContext)
    const { count, setCount } = useContext(FormContext)
    const nextClick = () => {
        setCount(count + 1)
    }
    const backClick = () => {
        setCount(count - 1)
    }
    const border = {
        border: "2px solid blue",
    }
    return (
        <div className='main'>
            <div className='header'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='add-ons'>
                <button onClick={onlineServiceClick} style={onlineServiceActive ? border : null}>
                    <div>
                        <input type="checkbox" checked={onlineServiceActive} />
                        <div>
                            <h3>{onlineService}</h3>
                            <h4>Access to multiplayer games</h4>
                        </div>
                    </div>
                    <div className='add-ons-money'>
                        +${onlineServiceMoney}/{moYr}
                    </div>
                </button>
                <button onClick={largerStorageClick} style={largerStorageActive ? border : null}>
                    <div>
                        <input type="checkbox" checked={largerStorageActive} />
                        <div>
                            <h3>{largerStorage}</h3>
                            <h4>Extra 1TB of cloud save</h4>
                        </div>
                    </div>
                    <div className='add-ons-money'>
                        +${largerStorageMoney}/{moYr}
                    </div>
                </button>
                <button onClick={customProfileClick} style={customProfileeActive ? border : null}>
                    <div>
                        <input type="checkbox" checked={customProfileeActive} />
                        <div>
                            <h3>{customProfile}</h3>
                            <h4>Custom Theme on your profile</h4>
                        </div>
                    </div>
                    <div className='add-ons-money'>
                        +${customProfileMoney}/{moYr}
                    </div>
                </button>
            </div>
            <div className='buton-div'>
                <button className='next-btn' onClick={nextClick}>
                    Next Step
                </button>
                <button className='go-back' onClick={backClick}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default AddOns






