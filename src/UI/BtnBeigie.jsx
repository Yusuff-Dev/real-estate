import React from 'react'

function BtnBeigie({children}) {
  return (
    <button className='bg-beigie-100 hover:bg-beigie-70 duration-300 text-white py-3 px-7 text-[17px] font-Jost font-semibold w-[175px] md:max-w-[225px]'>{children}</button>
  )
}

export default BtnBeigie