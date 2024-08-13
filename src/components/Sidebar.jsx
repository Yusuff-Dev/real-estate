import ButtonUI from "../UI/ButtonUI"
import ChangeLang from "./ChangeLang"
import data from "../utils/data"
import { NavLink } from "react-router-dom"
import BtnBeigie from "../UI/BtnBeigie"
import { useSelector, useDispatch } from "react-redux"
import { toggle } from "../store/navbar/navSlice"

function Sidebar() {
  const {isOpen} = useSelector((state)=>state.navSlice);
  const dispatch = useDispatch();

  const handleToggle = ()=>{
    dispatch(toggle());
  }

  return (
    <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 sidebar md:hidden absolute top-0 right-0 w-full h-screen backdrop-blur-sm bg-black/50 flex justify-end`}>
      <ul className='bg-white flex flex-col gap-8 h-full basis-[408px] px-5 py-[25px]'>
        <div className='flex items-center justify-end gap-2'>
          <ChangeLang />
          <div onClick={handleToggle}>
          <ButtonUI bg={"bg-black"}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
            </svg>
          </ButtonUI>
          </div>
        </div>
        {
          data.map((parent) => {
            if (parent.children?.length) {
              return (
                <ul key={parent.id}>
                  <li className='font-Jost content text-black capitalize cursor-pointer hover:text-beigie-100 group duration-300 w-max'>
                    <div className='flex items-center gap-[10px]'>
                      {parent.title}
                      <svg className='group-hover:-rotate-180 duration-300' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover:stroke-beigie-100 duration-300' d="M1 1.5L6 6.5L11 1.5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <ul className='overflow-hidden h-0 group-hover:h-[150px] duration-300 flex flex-col gap-3'>
                      {
                        parent.children.map((child) => {
                          return (
                            <li key={child.id}
                              className='font-Jost body-18 text-black hover:text-beigie-100 duration-300 px-[10px]'>
                              <NavLink to={child.path}
                                className={({ isActive }) => isActive ? "active" : ""}>
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

        <div className="items-end mt-auto">
        <BtnBeigie>Задать вопрос</BtnBeigie>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar