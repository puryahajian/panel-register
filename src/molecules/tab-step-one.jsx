import React from 'react'
import Input from '../atoms/input'
import Text from '../atoms/text'

function TabStepOne({
    valueName,
    setValueName,
    internationalNumber,
    setInternationalNumber,
    address,
    setAddress,
    phone,
    setPhone,
    nameCompony,
    setNameCompony,
    postalCode,
    setPostalCode
    }) {
    return (
        <div className='mt-6'>
            <div className='grid grid-cols-2 gap-4 mb-6 max-[480px]:grid-cols-1'>
                <div>
                    <Text> نام و نام خانوادگی :</Text>
                    <Input disabled value={nameCompony} onChange={(e) => setNameCompony(e.target.value)}  className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text>محصول خریداری شده :</Text>
                    <Input disabled inputMode={`text`} value={internationalNumber} onChange={(e) => setInternationalNumber(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div>
        </div>
    )
}

export default TabStepOne
