import { useState } from 'react'

function Tabs({ children }) {
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => setSelected(index);
    return (
        <>
            <div className='flex items-center gap-2 border-b border-stroke mb-4 justify-between text-black-60'>
                {
                    children.map((child, index) => <button className={`${index === selected ? 'active !font-bold duration-200 border-b-2 border-beigie-100' : ''} pb-5 content text-black font-Jost`} key={index} onClick={() => handleClick(index)}>{child.props.title}</button>)
                }
            </div>
            <div>
                {
                    <div >{children[selected].props.children}</div>
                }
            </div>
        </>

    )
}

export default Tabs