const Input = ({extraClass, type, placeholder, name}) => {
  return (
    <input name={name} className={` ${extraClass} py-[23px] pl-[20px] w-full outline-none  border-[1px] border-[#00000033] rounded-[6px]`} required
     type={type} placeholder={placeholder} />
  )
}

export default Input