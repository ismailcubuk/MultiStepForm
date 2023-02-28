import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import FormContext from '../../context/FormContext';
import './YourInfo.css';
function YourInfo() {
    const { count, setCount } = useContext(FormContext)



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string()
                .matches(/^([0-9]{10})$/, 'Phone number is not valid')
                .required('Phone number is required'),
        }),
        onSubmit: values => {
            console.log('form data', values);
            setCount(count + 1)
        },
    })
    console.log('visit', formik.touched);
    console.log(formik.validationSchema);
    return (
        <div className='main'>
            <div className='header'>
                <h1>Personal info</h1>
                <p>Please provide your name, email adress, and phone number.</p>
            </div>
            <form className='your-info-form' onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name"><h3>Name</h3></label>
                    <input type="text" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>


                <div className='form-control'>
                    <label htmlFor="name"><h3>Email Adress</h3></label>
                    <input type="email" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>


                <div className='form-control'>
                    <label htmlFor="name"><h3>Phone Number</h3></label>
                    <input type="phone" id='phone' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                    {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                </div>





                <button className='next-btn' type='submit'>
                    Next Step
                </button>
            </form>

        </div>
    )
}

export default YourInfo