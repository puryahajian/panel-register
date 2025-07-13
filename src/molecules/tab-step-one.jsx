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
    setPostalCode,
    err
    }) {
    return (
        <div className='mt-6'>
            <div className='grid grid-cols-2 gap-4 max-[480px]:grid-cols-1'>
                <div>
                    <Text>نام شرکت :</Text>
                    <Input value={nameCompony} onChange={(e) => setNameCompony(e.target.value)}  className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text>شناسه ملی :</Text>
                    <Input inputMode={`numeric`} value={internationalNumber} onChange={(e) => setInternationalNumber(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-4 max-[480px]:grid-cols-1'>
                <div>
                    <Text>نام نماینده (ثبت کننده) :</Text>
                    <Input value={valueName} onChange={(e) => setValueName(e.target.value)} className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text> شماره همراه : <span className='text-red-500'>{err ? err.message : ''}</span></Text>
                    <Input inputMode={`numeric`} value={phone} onChange={(e) => setPhone(e.target.value)}  className={`mt-2 w-full ${err ? 'border !border-red-500' : ''}`}/>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-4 mt-4 mb-6 max-[480px]:grid-cols-1'>   
                <div>
                    <Text>آدرس ثبتی :</Text>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text>کد پستی :</Text>
                    <Input inputMode={`numeric`} value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div>


        </div>
    )
}

export default TabStepOne
