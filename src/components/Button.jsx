const Button = ({children, classList, type}) => {
  return (
  <button type={type} className={`${classList} bg-[#1DA1F2] duration-300 hover:opacity-90 py-[18px] text-white font-bold text-[18px] rounded-[76px] w-full cursor-pointer `}>
    {children}
  </button>
  )
}

export default Button