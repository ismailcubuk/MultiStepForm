import React, { useContext } from 'react'
import FormContext from '../../context/FormContext';
import './Summary.css';

function Summary() {
    const { money, moYr, tax, customProfileMoney, largerStorageMoney, onlineServiceMoney, count, setCount, date, onlineServiceActive, largerStorageActive, customProfileeActive } = useContext(FormContext)
    const nextClick = () => {
        setCount(count + 1)
    }
    const backClick = () => {
        setCount(count - 1)
    }
    return (
        <div className='main'>
            <div className='header'>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='summary'>
                <div>
                    <div>
                        <h3>Arcade({date})</h3>
                        <button className='change' onClick={() => setCount(1)}>Change</button>
                    </div>
                    <div>
                        <h3>${tax}/{moYr}</h3>
                    </div>
                </div>
                <hr />
                {onlineServiceActive ?
                    <div>
                        <h4 className='sum-text'>Online service</h4>
                        <h4>+${onlineServiceMoney}/{moYr}</h4>
                    </div>
                    : null}
                {largerStorageActive ?
                    <div>
                        <h4 className='sum-text'>Larger storage</h4>
                        <h4>+${largerStorageMoney}/{moYr}</h4>
                    </div>
                    : null
                }
                {customProfileeActive ?
                    <div>
                        <h4 className='sum-text'>Customizable profile</h4>
                        <h4>+${customProfileMoney}/{moYr}</h4>
                    </div>
                    : null
                }
                <div className='total'>
                    <h4 className='sum-text'>Total(Per {date})</h4>
                    <h2>+${money}/{moYr}</h2>
                </div>
            </div>
            <div className='buton-div'>
                <button className='next-btn' onClick={nextClick}>
                    Confirm
                </button>
                <button className='go-back' onClick={backClick}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default Summary




