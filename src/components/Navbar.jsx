import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import data from '../utils/data'
import NavBtns from './NavBtns'
import Sidebar from './Sidebar';

function Navbar() {
    return (
        <nav className='py-5 sticky top-0 z-50 bg-white/80 backdrop-blur-md'>
            <div className="container max-w-[1480px] flex items-center justify-between">
                <Logo />
                <ul className='navbar hidden md:flex items-center gap-3 lg:gap-[50px]'>
                    {
                        data.map((parent) => {
                            if (parent.children?.length) {
                                return (
                                    <ul key={parent.id} className='relative'>
                                        <li className='font-Jost content text-black capitalize cursor-pointer hover:text-beigie-100 group duration-300'>
                                            <div className='flex items-center gap-[10px]'>
                                                {parent.title}
                                                <svg className='group-hover:-rotate-180 duration-300' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className='group-hover:stroke-beigie-100 duration-300' d="M1 1.5L6 6.5L11 1.5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>

                                            <ul className='absolute top-full w-[350px] bg-white h-0 overflow-hidden group-hover:h-auto duration-300'>
                                                {
                                                    parent.children.map((child) => {
                                                        return (
                                                            <li key={child.id}
                                                                className='font-Jost body-18 text-black hover:text-beigie-100 hover:bg-beigie-100/10 duration-300 py-[10px] px-4 border border-stroke'>
                                                                <NavLink to={child.path}
                                                                    className={({ isActive }) => isActive ? "active innerActive" : ""}>
                                                                    {child.title}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    </ul>)
                            } else {
                                return (
                                    <li className='font-Jost content text-black hover:text-beigie-100 duration-300' key={parent.id}>
                                        <NavLink to={parent.path}
                                            className={({ isActive }) => isActive ? "active" : ""}>
                                            {parent.title}
                                        </NavLink>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <NavBtns />
                <Sidebar />
            </div>
        </nav>
    )
}

export default Navbar