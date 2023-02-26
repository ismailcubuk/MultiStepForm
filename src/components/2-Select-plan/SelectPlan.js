import React from 'react'
import './SelectPlan.css';
import arcade from '../../assets/Images/icon-arcade.svg';
import advanced from '../../assets/Images/icon-advanced.svg';
import pro from '../../assets/Images/icon-pro.svg';


function SelectPlan() {
    return (
        <div className='main'>
            <div className='header'>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='plans'>
                <button>
                    <img src={arcade} alt="arcade" />
                    <div>
                        <h3>Arcade</h3>
                        <h4>$9/mo</h4>
                        <h5>2 months free</h5>
                    </div>
                </button>
                <button>
                    <img src={advanced} alt="advanced" />
                    <div>
                        <h3>Advancved</h3>
                        <h4>$12/mo</h4>
                        <h5>2 months free</h5>
                    </div>
                </button>
                <button>
                    <img src={pro} alt="pro" />
                    <div>
                        <h3>Pro</h3>
                        <h4>$15/mo</h4>
                        <h5>2 months free</h5>
                    </div>
                </button>
            </div>
            <div className='MorY'>
                <h3>Monthly</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <h3>Yearly</h3>
            </div>
            <div className='buton-div'>
                <button className='next-btn'>
                    Next Step
                </button>
                <button className='go-back'>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default SelectPlan




