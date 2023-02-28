import React, { useContext, useEffect, useState } from 'react'
import './SelectPlan.css';
import arcade from '../../assets/Images/icon-arcade.svg';
import advanced from '../../assets/Images/icon-advanced.svg';
import pro from '../../assets/Images/icon-pro.svg';
import FormContext from '../../context/FormContext';

function SelectPlan() {
    const { isChecked, handleCheckboxChange, arcadeMoney, advancedMoney, proMoney, moYr, ArcadeActive, AdvancedActive, ProActive, arcadeClick, AdvancedClick, ProClick, count, setCount, setPlan, plan, setDate, date } = useContext(FormContext)
    const nextClick = () => {
        setCount(count + 1)
    }
    const backClick = () => {
        setCount(count - 1)
    }

    const border = {
        border: "2px solid blue"
    }

    return (
        <div className='main'>
            <div className='header'>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='plans'>
                <button value={arcadeMoney} onClick={arcadeClick} style={ArcadeActive ? border : null}>
                    <img src={arcade} alt="arcade" />
                    <div>
                        <h3>Arcade</h3>
                        <h4>${arcadeMoney}/{moYr}</h4>
                        {isChecked ? <h5>2 months free</h5> : null}
                    </div>
                </button>
                <button value={advancedMoney} onClick={AdvancedClick} style={AdvancedActive ? border : null}>
                    <img src={advanced} alt="advanced" />
                    <div>
                        <h3>Advancved</h3>
                        <h4>${advancedMoney}/{moYr}</h4>
                        {isChecked ? <h5>2 months free</h5> : null}
                    </div>
                </button>
                <button value={proMoney} onClick={ProClick} style={ProActive ? border : null}>
                    <img src={pro} alt="pro" />
                    <div>
                        <h3>Pro</h3>
                        <h4>${proMoney}/{moYr}</h4>
                        {isChecked ? <h5>2 months free</h5> : null}
                    </div>
                </button>
            </div>
            <div className='MorY'>
                <h3>Monthly</h3>
                <label className="switch">
                    <input type="checkbox" onClick={handleCheckboxChange} checked={isChecked} />
                    <span className="slider round"></span>
                </label>
                <h3>Yearly</h3>
            </div>
            <div className='buton-div'>
                <button className='next-btn' onClick={nextClick} disabled={ArcadeActive === false && AdvancedActive === false && ProActive === false ? true : false}>
                    Next Step
                </button>
                <button className='go-back' onClick={backClick}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default SelectPlan




