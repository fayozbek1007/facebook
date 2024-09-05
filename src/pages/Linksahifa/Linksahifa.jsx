import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Linksahifa = () => {
    return (
        <div className='w-[100%] h-[100vh] flex flex-col items-center justify-center'>
            <div>
                <p className='text-[32px] font-[600]'>Facebook</p>
                <button className='bg-blue-600 text-white px-[20px] py-[10px] rounded-md'>
                    Registratsiya
                </button>
            </div>
            <div className='mt-[20px]'>
                <DropdownButton id="dropdown-basic-button" title="Ro'yxatdan o'ting yoki Facebook hisobingizga kiring">
                    {/* Dropdown content can be added here */}
                </DropdownButton>
            </div>
        </div>
    );
}

export default Linksahifa;
