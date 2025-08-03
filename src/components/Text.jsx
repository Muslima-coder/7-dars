
const Text = ({title,extraclass}) => {
  return (
    <p className={` font-normal hover:text-black duration-150 cursor-pointer ${extraclass}`}>{title}</p>
  )
}

export default Text
