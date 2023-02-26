import React, { createContext, useState } from 'react'
const FormContext = createContext();

export const FormContextprovider = ({ children }) => {
    const count = 0
    const [nextClick, setNextClick] = useState(count + 1)
    const [backClick, setBackClick] = useState(count - 1)

    const data = {

    }
    return (
        <FormContext.Provider value={data}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext