import React, { useContext } from 'react'
import FormContext from '../../context/FormContext';
import './Step.css';

function Step() {
    const active = {
        backgroundColor: "#BEE2FD",
        color: "black",
        border: "2px solid #BEE2FD"
    }
    const { count } = useContext(FormContext)
    return (
        <div className="step">
            <div className='all-step'>
                <div className='steps'>
                    <button style={count === 1 ? active : null}>1</button>
                    <div>
                        <div className='step-number'>
                            STEP 1
                        </div>
                        <h3>
                            YOUR INFO
                        </h3>
                    </div>
                </div>
                <div className='steps'>
                    <button style={count === 2 ? active : null}>2</button>
                    <div>
                        <div className='step-number'>
                            STEP 2
                        </div>
                        <h3>
                            SELECT PLAN
                        </h3>
                    </div>
                </div>
                <div className='steps'>
                    <button style={count === 3 ? active : null}>3</button>
                    <div>
                        <div className='step-number'>
                            STEP 3
                        </div>
                        <h3>
                            ADD-ONS
                        </h3>
                    </div>
                </div>
                <div className='steps'>
                    <button style={count === 4 ? active : null}>4</button>
                    <div>
                        <div className='step-number'>
                            STEP 4
                        </div>
                        <h3>
                            SUMMARY
                        </h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Step