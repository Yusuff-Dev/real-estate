import React from 'react'

function BtnBeigie({children}) {
  return (
    <button className='bg-beigie-100 hover:bg-beigie-70 duration-300 text-white py-3 px-2 sm:px-8 text-[17px] font-semibold'>{children}</button>
  )
}

export default BtnBeigie