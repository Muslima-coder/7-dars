
const Text = ({title,extraclass}) => {
  return (
    <p className={` font-normal text-[16px] text-black  cursor-pointer ${extraclass}`}>{title}</p>
  )
}

export default Text
