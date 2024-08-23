import React from 'react'

function MoreDetails({ color }) {
    return (
        <button className={`flex items-center gap-1 font-Jost text-[14px] sm:btn-link text-${color || 'black'}`}>
            <span>
                Подробнее
            </span>
            <svg className='hidden sm:block' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke={`${color || 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


            <svg className='sm:hidden' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.375 1.5L10.875 6L6.375 10.5M10.25 6L1.125 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </button>
    )
}

export default MoreDetails