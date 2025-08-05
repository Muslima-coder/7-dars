import Button from "./Button"
import {  } from '../assets/images'
import Heading from "./Heading"
import Text from "./Text"

const ProfileUsers = ({img, name, email}) => {
  return (
    <div className="flex items-center justify-between py-[25px]">
      <div className="flex items-center gap-[10px]">
      <img className='mr-[10px] w-[50px] h-[50px]' src={img} alt="img"/>
      <div className="flex flex-col gap-[1px]">
      <Heading  type={"h3"} title={name}/>
      <Text extraclass={"!text-[#a4a4a4]"} title={email}/>
      </div>
      </div>
     <Button classList={"bg-black flex items-center justify-center text-white !w-[92px] !h-[38px] rounded-[50px]"}>Follow</Button>
    </div>
  )
}

export default ProfileUsers
