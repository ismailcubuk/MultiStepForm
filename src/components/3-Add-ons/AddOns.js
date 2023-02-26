import React from 'react'
import './AddOns.css';

function AddOns() {
    return (
        <div className='main'>
            <div className='header'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='add-ons'>
                <button>
                    <div>
                        <input type="checkbox" />
                        <div>
                            <h3>Online service</h3>
                            <h4>Access to multiplayer games</h4>
                        </div>
                    </div>
                    <div className='add-ons-money'>
                        +$1/mo
                    </div>
                </button>
                <button>
                    <div>
                        <input type="checkbox" />
                        <div>
                            <h3>Larger storage</h3>
                            <h4>Extra 1TB of cloud save</h4>
                        </div>
                    </div>
                    <div className='add-ons-money'>
                        +$2/mo
                    </div>
                </button>
                <button>
                    <div>
                        <input type="checkbox" />
                        <div>
                            <h3>Customizable profile</h3>
                            <h4>Custom Theme on your profile</h4>
                        </div>
                    </div>
                    <div className='add-ons-money'>
                        +$2/mo
                    </div>
                </button>
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

export default AddOns






