import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const Showmodal = ({ show, handleClose }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [showDays, setShowDays] = useState(false);
    const [showMonths, setShowMonths] = useState(false);
    const [showYears, setShowYears] = useState(false);

    const toggleDaysDropdown = () => setShowDays(!showDays);
    const toggleMonthsDropdown = () => setShowMonths(!showMonths);
    const toggleYearsDropdown = () => setShowYears(!showYears);

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
    const years = Array.from({ length: 2023 - 1900 }, (_, i) => 2023 - i);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            className="fixed inset-0 z-50 ml-[500px] mt-[100px]"
        >
            <div className="bg-white w-[400px] p-5 rounded-lg shadow-lg relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>
                <h3 className="text-center text-xl font-semibold mb-4">Ro'yxatdan o'tish</h3>
                <p className="text-[16px] font-[400] text-center">Tez va oson.</p>

                <div className='flex justify-between mt-4'>
                    <input
                        className='w-[48%] px-[10px] py-[7px] rounded-md border border-gray-400 focus:outline-none focus:border-blue-500'
                        placeholder='Ism'
                        type="text"
                    />
                    <input
                        className='w-[48%] px-[10px] py-[7px] rounded-md border border-gray-400 focus:outline-none focus:border-blue-500'
                        placeholder='Familiya'
                        type="text"
                    />
                </div>

                <div className='mt-[20px]'>
                    <input
                        className='w-full px-[10px] py-[7px] rounded-md border border-gray-400 focus:outline-none focus:border-blue-500'
                        placeholder='Mobil telefon raqami yoki elektron pochta'
                        type="text"
                    />
                    <input
                        className='w-full mt-4 px-[10px] py-[7px] rounded-md border border-gray-400 focus:outline-none focus:border-blue-500'
                        placeholder='Parol'
                        type="password"
                    />
                </div>

                <div className="mt-4 flex space-x-2 justify-between">
                    <div className="relative">
                        <button
                            className="w-[50px] px-[10px] py-[7px] border rounded-md border-gray-400"
                            onClick={toggleDaysDropdown}
                        >
                            {day || 'Kun'}
                        </button>
                        {showDays && (
                            <div className="absolute top-full mt-1 w-[100px] max-h-[150px] bg-white border rounded-md shadow-lg overflow-y-auto">
                                {days.map((d) => (
                                    <div
                                        key={d}
                                        onClick={() => {
                                            setDay(d);
                                            setShowDays(false);
                                        }}
                                        className="cursor-pointer hover:bg-gray-200 text-center p-2"
                                    >
                                        {d}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            className="w-[70px] px-[10px] py-[7px] border rounded-md border-gray-400"
                            onClick={toggleMonthsDropdown}
                        >
                            {month || 'Oy'}
                        </button>
                        {showMonths && (
                            <div className="absolute top-full mt-1 w-[120px] max-h-[150px] bg-white border rounded-md shadow-lg overflow-y-auto">
                                {months.map((m, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setMonth(m);
                                            setShowMonths(false);
                                        }}
                                        className="cursor-pointer hover:bg-gray-200 text-center p-2"
                                    >
                                        {m}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            className="w-[70px] px-[10px] py-[7px] border rounded-md border-gray-400"
                            onClick={toggleYearsDropdown}
                        >
                            {year || 'Yil'}
                        </button>
                        {showYears && (
                            <div className="absolute top-full mt-1 w-[100px] max-h-[150px] bg-white border rounded-md shadow-lg overflow-y-auto">
                                {years.map((y) => (
                                    <div
                                        key={y}
                                        onClick={() => {
                                            setYear(y);
                                            setShowYears(false);
                                        }}
                                        className="cursor-pointer hover:bg-gray-200 text-center p-2"
                                    >
                                        {y}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <p className="mt-4 text-sm">
                    People who use our service may have uploaded your contact information to Facebook. Learn more.
                </p>
                <p className="mt-2 text-sm">
                    By clicking Ro‘yxatdan o‘tish, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                </p>

                <button
                    onClick={handleClose}
                    className="mt-4 py-[10px] w-full bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                    Ro'yxatdan o'tish
                </button>
            </div>
        </Modal>
    );
}

export default Showmodal;
