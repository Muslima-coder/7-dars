import { useCookies } from "react-cookie"
import { DotsIcon } from "../assets/icons"
import { boburImg } from "../assets/images"
import Heading from "./Heading"
import Text from "./Text"

const Logout = () => {
    const [cookies, removeCookies] = useCookies(['token'])

    function handleLogOut(){
        const isConfirm = confirm("Chiqib ketmoqchimisiz?")
        if(isConfirm){
            removeCookies("token")
        }
    }

  return (
    <div className="flex pt-[100px]">
      <img className='mr-[10px] w-[50px] h-[50px]' src={boburImg} alt="img"/>
      <div className="flex flex-col">
      <Heading  type={"h3"} title={cookies.token.username}/>
      <Text extraclass={"!text-[#a4a4a4]"} title={cookies.token.email}/>
      </div>
      <button onClick={handleLogOut} className="cursor-pointer pt-[20px] pl-[32px]"><DotsIcon/></button>
    </div>
  )
}

export default Logout
