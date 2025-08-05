import { DotsIcon } from "../assets/icons"

const Sitebar = ({content1, content2, title}) => {
  return (
    <div className="mb-[15px] relative">
      <p className="text-[16px] text-[#393B41]">{content1}</p>
      <strong className="text-[20px] font-semibold">{title}</strong>
      <p className="text-[16px] text-[#393B41]">{content2}</p>
      <span className="absolute top-[32px] right-0">
      <DotsIcon/>
      </span>
    </div>
  )
}

export default Sitebar
