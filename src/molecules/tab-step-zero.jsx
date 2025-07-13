import React from 'react'
import Text from '../atoms/text'
import Input from '../atoms/input'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
                    <div>
                        <Text className={`text-right mb-2`}>دسته بندی</Text>
                        <Select
                            className='!outline-none bg-gray-100 h-11 !border-none !text-gray-400 !rounded-lg text-right w-full'
                            // value={selectorCategory}
                            // onChange={(e) => setSelectorCategory(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                outline: 'none'
                            }}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {/* <MenuItem value="" className=' !py-3'>
                                    <Text className={`text-gray-400`}>
                                        {dataCategory?.map(c => c?.name)?.name || 'انتخاب کنید'}
                                    </Text>
                                </MenuItem> */}
                                {/* {dataCategory?.map((item) => ( */}
                                    <MenuItem>
                                        <Text>
                                            {/* {item?.name} */}
                                            sdsd
                                        </Text>    
                                    </MenuItem>
                                    <MenuItem>
                                        <Text>
                                            {/* {item?.name} */}
                                            sdsd
                                        </Text>    
                                    </MenuItem>
                                {/* ))} */}
                        </Select>
                    </div>
                </div>
                <div>
                    <Text>نام خانوادگی :</Text>
                    <Input value={valueFamily} onChange={(e) => setValueFamily(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div>

            {/* <div className='mt-4'>
                <Text>شماره ملی :</Text>
                <Input inputMode={`numeric`} value={internationalNumber} onChange={(e) => setInternationalNumber(e.target.value)} className={`mt-2 text-left w-full`}/>
            </div> */}

            {/* <div className='grid grid-cols-2 gap-4 mt-4 max-[480px]:grid-cols-1'>
                <div>
                    <Text>آدرس :</Text>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} className={`mt-2 w-full`}/>
                </div>
                <div>
                    <Text>کد پستی :</Text>
                    <Input value={postalCode} inputMode={`numeric`} onChange={(e) => setPostalCode(e.target.value)} className={`mt-2 w-full`}/>
                </div>
            </div> */}

            <div className='grid grid-cols-2 gap-4 mt-4 mb-6 max-[480px]:grid-cols-1'>
                <div>
                    <Text>نام دامنه :</Text>
                    <Input value={numberPass} inputMode={`numeric`} onChange={(e) => setNumberPass(e.target.value)} className={`mt-2 text-left w-full`}/>
                </div>
                <div>
                    <Text>شماره همراه :</Text>
                    <Input value={phone} inputMode={`numeric`} onChange={(e) => setPhone(e.target.value)} className={`mt-2 text-left w-full`}/>
                </div>
            </div>

             <div className='grid grid-cols-3'>
                <div className='flex justify-start items-center gap-2 mt-2'>
                    <input type="radio" 
                    name="level"
                        // checked={isCheckedAmazon}
                        // onChange={handleCheckboxChangeAmazon} 
                    />
                    <Text>پایه</Text>
                </div>
                <div className='flex justify-start items-center gap-2 mt-2'>
                    <input type="radio" 
                    name="level"
                        // checked={isCheckedSoqMaftoh}
                        // onChange={handleCheckboxChangeSoqMaftoh} 
                    />
                    <Text>متوسط</Text>
                </div>
                <div className='flex justify-start items-center gap-2 mt-2'>
                    <input type="radio" 
                    name="level"
                        // checked={isCheckedNon}
                        // onChange={handleCheckboxChangeNon} 
                    />
                    <Text>پیشرفته</Text>
                </div>
            </div>
        </div>
    )
}

export default TabStepZero
