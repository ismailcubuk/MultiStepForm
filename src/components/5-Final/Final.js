import React from 'react'
import './Final.css';
import thanks from '../../assets/Images/icon-thank-you.svg';
import Step from '../Step/Step';
function Final() {
    return (
        <div className="border">
            <Step />
            <div className='final'>
                <div>
                    <img src={thanks} alt="thanks" />
                    <h1>Thank you!</h1>
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at iismailcubuk@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Final




