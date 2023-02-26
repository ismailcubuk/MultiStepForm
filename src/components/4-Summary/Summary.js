import React from 'react'
import './Summary.css';

function Summary() {
    return (
        <div className='main'>
            <div className='header'>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='summary'>
                <div>
                    <div>
                        <h3>Arcade(Monthly)</h3>
                        <div className='change'>Change</div>
                    </div>
                    <div>
                        <h3>$9/mo</h3>
                    </div>
                </div>
                <hr />
                <div>
                    <h4 className='sum-text'>Online service</h4>
                    <h4>+$1/mo</h4>
                </div>
                <div>
                    <h4 className='sum-text'>Larger storage</h4>
                    <h4>+$2/mo</h4>
                </div>
                <div className='total'>
                    <h4 className='sum-text'>Total(per month)</h4>
                    <h2>+$12/mo</h2>
                </div>
            </div>
            <div className='buton-div'>
                <button className='next-btn'>
                    Confirm
                </button>
                <button className='go-back'>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default Summary




