import { Link } from "react-router-dom"
import logo from '../assets/icons/logo/logoDes.svg'

function Logo() {
    return (
        <div>
            <Link to={'/'} className='flex items-center gap-2'>
                <div className="w-5 md:w-6">
                    <img src={logo} alt="logo image" className="block w-full h-auto object-cover"/>
                </div>                
                <div>
                    <p className='font-Belleza text-[17.63px] md:text-[21.97px] font-400 leading-[20.31px] md:leading-[25.31px] text-black uppercase break-words w-full'> Rmc De Luxe </p>
                    <span className='label font-Bellefair text-[15.38px] leading-[17.63px] -tracking-[3%] text-[#A6A6A6] font-400'>real estate</span>
                </div>
            </Link>
        </div>
    )
}

export default Logo