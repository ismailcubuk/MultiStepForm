import React, { useContext } from 'react'
import { useFormik } from 'formik'
import FormContext from '../../context/FormContext';
import './YourInfo.css';
import * as Yup from 'yup';
function YourInfo() {
    const { count, setCount } = useContext(FormContext)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        onSubmit: values => {
            console.log('form data', values);
            setCount(count + 1)
        },
        validate: values => {

        }
    })
    return (
        <div className='main'>
            <div className='header'>
                <h1>Personal info</h1>
                <p>Please provide your name, email adress, and phone number.</p>
            </div>
            <form className='your-info-form' onSubmit={formik.handleSubmit}>
                <label htmlFor="name"><h3>Name</h3></label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                <label htmlFor="name"><h3>Email Adress</h3></label>
                <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                <label htmlFor="name"><h3>Phone Number</h3></label>
                <input type="text" id='phone' name='phone' onChange={formik.handleChange} value={formik.values.phone} />
                <button className='next-btn' type='submit'>
                    Next Step
                </button>
            </form>

        </div>
    )
}

export default YourInfo