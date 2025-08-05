
const SItebarDivContent = ({children, extraClass}) => {
  return (
    <div className={`${extraClass} w-[373px] rounded-[10px] bg-[#F7F9F9] pt-[15px] px-[20px] pb-[30px]`}>
      {children}
    </div>
  )
}

export default SItebarDivContent
