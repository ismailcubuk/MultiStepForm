import React from 'react'
import './Step.css';

function Step() {
    return (
        <div className="step">
            <div className='all-step'>
                <div className='steps'>
                    <button>1</button>
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
                    <button>2</button>
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
                    <button>3</button>
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
                    <button>4</button>
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
        </div>
    )
}

export default Step