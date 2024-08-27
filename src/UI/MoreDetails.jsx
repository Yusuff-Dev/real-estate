import React from 'react'

function MoreDetails({ color }) {
    return (
        <button className={`flex items-center gap-1 btn-link text-[${color}]`}>
            Подробнее
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`stroke-[${color}]`} d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    )
}

export default MoreDetails