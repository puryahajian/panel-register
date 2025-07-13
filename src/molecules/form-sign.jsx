import React, { useState } from 'react'
import Text from '../atoms/text'
import TabStepZero from './tab-step-zero';
import TabStepOne from './tab-step-one';
import ButtonGeneral from '../atoms/button';
import usePostRegister from '../db/use-post-register';
import Input from '../atoms/input';
import Logo from '../assets/image/iranishop favicon.png'


function FormSign() {
    const [address, setAddress] = useState('');
    const [numberPass, setNumberPass] = useState('');
    const [phone, setPhone] = useState('');
    const [internationalNumber, setInternationalNumber] = useState('');
    const [valueName, setValueName] = useState('');
    const [nameCompony, setNameCompony] = useState('');
    const [valueFamily, setValueFamily] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const {mutate , isPending} = usePostRegister();

    const [step, setStep] = useState(0);
    const [stepCode, setStepCode] = useState(2);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handlePostRegister = (e) => {
        e.preventDefault()
        // console.log(address,numberPass,phone,internationalNumber,valueName)

        mutate(
            {
                address,numberPass,phone,internationalNumber,valueName, nameCompony, valueFamily, activeTab, postalCode
            },
            {
                onSuccess: (data) => {
                    setStepCode(3)
                    // queryClient.removeQueries('allRider');
                }
            }
        )

    }


    return (
        <div>
            <div className='max-w-[600px] m-auto mt-4 px-4'>
                <div className='flex justify-center items-center gap-2'>
                    <Text className={`text-center py-8`}>پنل ثبت نام دلیوری</Text>
                    {/* <img src={Logo} className='w-9 h-9'/> */}
                </div>
               <div className="w-max m-auto flex">
                    <div
                        className={`px-12 py-3 min-w-44 rounded-tr-xl flex justify-center rounded-br-xl cursor-pointer transition-all duration-100 ${
                            activeTab === 0
                            ? 'bg-gradient-to-r from-blue-500/80 to-blue-400/100 backdrop-blur-md text-white shadow-lg shadow-blue-300/50 border-blue-400/50'
                            : 'bg-gray-100 text-black border-gray-300'
                        }`}
                        onClick={() => {
                            handleTabClick(0);
                            setStep(0)
                        }}
                    >
                        <Text>ثبت نام</Text>
                    </div>
                    <div
                        className={`px-12 py-3 min-w-44 rounded-tl-xl rounded-bl-xl cursor-pointer transition-all duration-100 ${
                            activeTab === 1
                            ? 'bg-gradient-to-r from-blue-500/80 to-blue-400/100 backdrop-blur-md text-white shadow-lg shadow-blue-300/50 border-blue-400/50'
                            : 'bg-gray-100 text-black border-gray-300'
                        }`}
                        onClick={() => {
                            handleTabClick(1);
                            setStep(1)
                        }}
                    >
                        <Text>لیست مشتریان</Text>
                    </div>
                </div>

                <form action=""> 
                    {stepCode === 2 && (  
                        <>
                        {step === 0 && (
                            <TabStepZero
                                address={address}
                                setAddress={setAddress}

                                numberPass={numberPass}
                                setNumberPass={setNumberPass}

                                phone={phone}
                                setPhone={setPhone}

                                internationalNumber={internationalNumber}
                                setInternationalNumber={setInternationalNumber}

                                valueName={valueName}
                                setValueName={setValueName}

                                valueFamily={valueFamily}
                                setValueFamily={setValueFamily}

                                postalCode={postalCode}
                                setPostalCode={setPostalCode}
                                />
                        )}
                        {step === 1 && (
                            <TabStepOne
                                address={address}
                                setAddress={setAddress}

                                numberPass={numberPass}
                                setNumberPass={setNumberPass}

                                phone={phone}
                                setPhone={setPhone}

                                internationalNumber={internationalNumber}
                                setInternationalNumber={setInternationalNumber}

                                valueName={valueName}
                                setValueName={setValueName}

                                nameCompony={nameCompony}
                                setNameCompony={setNameCompony}

                                postalCode={postalCode}
                                setPostalCode={setPostalCode}
                            />
                        )}

                        <ButtonGeneral onClick={handlePostRegister}>
                            {isPending ? 'درحال ارسال ' : " ثبت رجیستر" }
                        </ButtonGeneral>
                        </>
                    )}

                    {stepCode === 3 && (  
                        <div className='w-full mt-6 flex justify-center'>
                            <Text className={`!text-green-500`}>ثبت نام انجام شد</Text>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default FormSign
