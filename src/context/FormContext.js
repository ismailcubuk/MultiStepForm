import React, { createContext, useState, useEffect } from 'react'
const FormContext = createContext();

export const FormContextprovider = ({ children }) => {
    const [count, setCount] = useState(1)
    const [plan, setPlan] = useState()
    const [date, setDate] = useState()
    const onlineService = "Online service"
    const largerStorage = "Larger storage"
    const customProfile = "Customizable profile"
    const [onlineServiceActive, setOnlineServiceActive] = useState(false)
    const [largerStorageActive, setLargerStorageActive] = useState(false)
    const [customProfileeActive, setCustomProfileActive] = useState(false)
    const [money, setMoney] = useState(0)

    const onlineServiceClick = () => {
        setOnlineServiceActive(!onlineServiceActive)

    }
    const largerStorageClick = () => {
        setLargerStorageActive(!largerStorageActive)
    }
    const customProfileClick = () => {
        setCustomProfileActive(!customProfileeActive)
    }
    const [onlineServiceMoney, setOnlineServiceMoney] = useState(1)
    const [largerStorageMoney, setLargerStorageMoney] = useState(2)
    const [customProfileMoney, setCustomProfileMoney] = useState(2)

    useEffect(() => {
        onlineServiceActive ? setMoney(money + onlineServiceMoney) : setMoney(money - onlineServiceMoney)
    }, [onlineServiceActive])
    useEffect(() => {
        largerStorageActive ? setMoney(money + largerStorageMoney) : setMoney(money - largerStorageMoney)
    }, [largerStorageActive])
    useEffect(() => {
        customProfileeActive ? setMoney(money + customProfileMoney) : setMoney(money - customProfileMoney)
    }, [customProfileeActive])

    // SELECT PLAN
    const [ArcadeActive, setArcadeActive] = useState(false)
    const [AdvancedActive, setAdvancedActive] = useState(false)
    const [ProActive, setProActive] = useState(false)
    const [arcadeMoney, setArcadeMoney] = useState(9)
    const [advancedMoney, setAdvancedMoney] = useState(12)
    const [proMoney, setProMoney] = useState(15)
    const [moYr, setMoYr] = useState("mo")
    const [tax, setTax] = useState()

    const arcadeClick = () => {
        setPlan("Arcade")
        setArcadeActive(true)
        setAdvancedActive(false)
        setProActive(false)
        setTax(arcadeMoney)
        setCustomProfileActive(false)
        setLargerStorageActive(false)
        setOnlineServiceActive(false)
    }
    useEffect(() => {
        ArcadeActive ? setMoney(arcadeMoney) : AdvancedActive ? setMoney(advancedMoney) : ProActive ? setMoney(proMoney) : setMoney("")
    }, [ArcadeActive, AdvancedActive, ProActive])


    const AdvancedClick = () => {
        setPlan("Advanced")
        setAdvancedActive(true)
        setArcadeActive(false)
        setProActive(false)
        setTax(advancedMoney)
        setCustomProfileActive(false)
        setLargerStorageActive(false)
        setOnlineServiceActive(false)
    }

    const ProClick = () => {
        setPlan("Pro")
        setProActive(true)
        setAdvancedActive(false)
        setArcadeActive(false)
        setTax(proMoney)
        setCustomProfileActive(false)
        setLargerStorageActive(false)
        setOnlineServiceActive(false)
    }
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };



    useEffect(() => {
        const year = 10
        if (isChecked) {
            setArcadeMoney(90)
            setAdvancedMoney(120)
            setProMoney(150)
            setMoYr("yr")
            setDate("Yearly")
            setMoney(money * year)
            setOnlineServiceMoney(onlineServiceMoney * year)
            setLargerStorageMoney(largerStorageMoney * year)
            setCustomProfileMoney(customProfileMoney * year)
            setTax(tax * 10)
        } else {
            setArcadeMoney(9)
            setAdvancedMoney(12)
            setProMoney(15)
            setMoYr("mo")
            setDate("Monthly")
            setMoney(money / year)
            setOnlineServiceMoney(1)
            setLargerStorageMoney(2)
            setCustomProfileMoney(2)
            setTax(tax / 10)
        }
    }, [isChecked])
    const data = {
        tax,
        customProfileMoney,
        largerStorageMoney,
        onlineServiceMoney,
        customProfileClick,
        largerStorageClick,
        onlineServiceClick,
        money,
        handleCheckboxChange,
        arcadeMoney,
        advancedMoney,
        proMoney,
        moYr,
        isChecked,
        ArcadeActive,
        AdvancedActive,
        ProActive,
        arcadeClick,
        AdvancedClick,
        ProClick,
        count,
        setCount,
        setPlan,
        plan,
        setDate,
        date,
        onlineService,
        largerStorage,
        customProfile,
        onlineServiceActive,
        setOnlineServiceActive,
        largerStorageActive,
        setLargerStorageActive,
        customProfileeActive,
        setCustomProfileActive
    }
    return (
        <FormContext.Provider value={data}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext