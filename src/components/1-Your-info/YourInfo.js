import React, { useContext } from 'react'
import FormContext from '../../context/FormContext';
import './YourInfo.css';
import InputMask from 'react-input-mask';
import Step from '../Step/Step';
function YourInfo() {
    const { formik } = useContext(FormContext)

    return (
        <div className="border">
            <Step />
            <div className='main'>
                <div className='header'>
                    dsadsadsa
                    <h1>Personal info</h1>
                    <p>Please provide your name, email adress, and phone number.</p>
                </div>

                < form className='your-info-form' onSubmit={formik.handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="name"><h3>Name Surname</h3></label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                    </div>


                    <div className='form-control'>
                        <label htmlFor="email"><h3>Email Adress</h3></label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />

                        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                    </div>


                    <div className='form-control'>
                        <label htmlFor="phone"><h3>Phone Number</h3></label>
                        <InputMask
                            onChange={formik.handleChange}
                            type="phone"
                            id='phone' name='phone'
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            mask="(999) 999-9999"
                            placeholder="(123) 456-7890" />
                        {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                    </div>
                    <button className='next-btn' type='submit' disabled={!formik.isValid || formik.values.name === ""}>
                        Next Step
                    </button>
                </form>
            </div>
        </div >
    )
}

export default YourInfo