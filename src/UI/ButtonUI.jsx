function ButtonUI({children, bg}) {
  return (
    <button className={`${bg} rounded-full border border-stroke sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] flex items-center justify-center`}>{children}
    </button>
  )
}

export default ButtonUI