import { Link } from "react-router-dom"
import logoDesk from '../assets/icons/logo/logoDes.svg'
import logoMob from '../assets/icons/logo/logoMob.svg'

function Logo() {
    return (
        <div>
            <Link to={'/'} className='flex items-center gap-2'>
                <picture className='row-span-2'>
                    <source media="(min-width: 768px)" srcSet={logoDesk} />
                    <source media="(max-width: 465px)" srcSet={logoMob} />
                    <img src={logoDesk} alt="logo" />
                </picture>
                <div>
                    <p className='font-Belleza text-[17.63px] md:text-[21.97px] font-400 leading-[20.31px] md:leading-[25.31px] text-black uppercase '> Rmc De Luxe </p>
                    <span className='label font-Bellefair text-[15.38px] leading-[17.63px] -tracking-[3%] text-[#A6A6A6] font-400'>real estate</span>
                </div>
            </Link>
        </div>
    )
}

export default Logo