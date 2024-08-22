function ButtonUI({children, bg, br}) {
  return (
    <button className={`${bg} rounded-full border border-stroke md:w-[50px] md:h-[50px] w-[40px] h-[40px] flex items-center justify-center`}>{children}
    </button>
  )
}

export default ButtonUI