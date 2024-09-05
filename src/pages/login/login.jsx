import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); 
    const handleRegister = () => {
        navigate('/Linksahifa'); 
    };

    return (
        <div className='w-[100%] h-[737px] bg-slate-100'>
            <div className='w-[1000px] flex mx-[auto] pt-[200px] my-0 justify-between'>
                <div className='m'>
                    <img 
                        className='w-[320px] h-[106px]' 
                        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" 
                        alt="facebook" 
                    />
                    <p className='font-[400] ml-[30px] text-[28px] leading-[32px] w-[500px] h-[116px]'>
                        Facebook hayotingizdagi odamlar bilan bog‘lanishga va o‘zaro o‘rtoqlashishga yordam beradi.
                    </p>
                </div>
                <div>
                    <div className='w-[396px] h-[380px] rounded-[10px] bg-[white] px-[17px] shadow-lg'>
                        <form>
                            <input 
                                className='w-[363px] h-[51.6px] mt-[20px] px-[10px] py-[8px] font-[400] text-[18px] rounded-[8px] border-[1px] border-[#00000089] shadow-xl focus:border-transparent focus:outline-none' 
                                type="text" 
                                placeholder='Elektron pochta yoki telefon raqami' 
                            />
                            <input
                                className='w-[363px] h-[51.6px] mt-[20px] px-[10px] py-[8px] font-[400] text-[18px] rounded-[8px] border-[1px] border-[#00000089] shadow-xl focus:border-transparent focus:outline-none'
                                type="password"
                                placeholder='Parol'
                            />
                            <button className='w-[363px] h-[54px] bg-[#0866ff] font-[700] mt-[20px] text-[20px] text-[white] rounded-[8px]'>
                                Kirish
                            </button>
                        </form>
                        <p className='text-[#0866ff] font-[400] text-[15px] text-center mt-[16px]'>
                            Parolni unitdingizmi?
                        </p>
                        <p className='border-[#0000003d] border-[0.5px] mt-[20px]'></p>
                        <button
                            className='w-[330px] h-[54px] bg-[#42b72a] mt-[20px] ml-[16px] rounded-[8px] text-[19px] font-[600] text-[white]'
                            onClick={handleRegister} 
                        >
                            Yangi hisob qaytnomasini yaratish
                        </button>
                    </div>
                    <div className='flex gap-[10px] ml-[20px] mt-[20px]'>
                        <Link to="/Linksahifa" className='font-[700] text-black'>Sahifa yaratish</Link>
                        <p> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
