import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Linksahifa = () => {
    return (
        <div>
            <div className='bg-[#066CD2]'>
                <div className='w-[80%] h-[82px] flex mx-[auto] my-0 justify-between'>
                    <div className='flex items-center gap-[20px]'>
                        <p className='text-[32px] font-[600] text-white'>Facebook</p>
                        <button className='rounded-[5px] bg-green-600 text-white px-[10px] py-[5px]'>
                            Registratsiya
                        </button>
                    </div>
                    <div className='mt-[20px]'>
                        <DropdownButton className='text-white' id="dropdown-basic-button" title="Ro'yxatdan o'ting yoki Facebook hisobingizga kiring">

                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Linksahifa;
