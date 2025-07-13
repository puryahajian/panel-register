import React from 'react'
import Text from '../atoms/text'
import Input from '../atoms/input'

function TabStepZero({
    valueName,
    setValueName,
    internationalNumber,
    setInternationalNumber,
    address,
    setAddress,
    numberPass,
    setNumberPass,
    phone,
    setPhone,
    valueFamily,
    setValueFamily,
    postalCode,
    setPostalCode
    }) {

    return (
        <div className='mt-6'>
            <div className='grid grid-cols-2 gap-4 max-[480px]:grid-cols-1'>
                <div>
                    <Text>نام :</Text>
                    <Input value={valueName} onChange={(e) => setValueName(e.target.value)} className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text>نام خانوادگی :</Text>
                    <Input value={valueFamily} onChange={(e) => setValueFamily(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div>

            <div className='mt-4'>
                <Text>شماره ملی :</Text>
                <Input inputMode={`numeric`} value={internationalNumber} onChange={(e) => setInternationalNumber(e.target.value)} className={`mt-2 text-left w-full`}/>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-4 max-[480px]:grid-cols-1'>
                <div>
                    <Text>آدرس :</Text>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text>کد پستی :</Text>
                    <Input value={postalCode} inputMode={`numeric`} onChange={(e) => setPostalCode(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-4 mb-6 max-[480px]:grid-cols-1'>
                <div>
                    <Text>شماره شناسنامه :</Text>
                    <Input value={numberPass} inputMode={`numeric`} onChange={(e) => setNumberPass(e.target.value)} className={`mt-2 text-left w-full`}/>
                </div>
                <div>
                    <Text>شماره همراه :</Text>
                    <Input value={phone} inputMode={`numeric`} onChange={(e) => setPhone(e.target.value)} className={`mt-2 text-left w-full`}/>
                </div>
            </div>
        </div>
    )
}

export default TabStepZero
