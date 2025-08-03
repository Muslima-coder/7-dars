import { Button, Heading, routeList, Text } from '../components'
import { boburImg, Logo } from '../assets/images'
import NavItem from '../components/NavItem'
import { useState } from 'react'
import { DotsIcon } from '../assets/icons'

const Navbar = () => {
  const[activeNav, setActiveNav] = useState("/")
  return (
    <div className='w-[283px] h-[100vh] pt-[31px] pr-[15px]'>  
    <a href="#">
    <img className='mb-[49px]' src={Logo} alt="logo" width={40} height={33}/>
    </a>
    <nav className='flex flex-col gap-[32px]'>
      {routeList.map(item => <NavItem key={item.id}  setActiveNav={setActiveNav} activeNav={activeNav} item={item}/>)}
      <Button classList={"flex items-center justify-center !w-[230px] h-[55px]"}>Tweet</Button>
    </nav>
    <div className="flex pt-[260px]">
      <img className='mr-[10px] w-[50px] h-[50px]' src={boburImg} alt="hero img"/>
      <div className="flex flex-col">
      <Heading  type={"h3"} title={"Bobur"}/>
      <Text extraclass={"!text-[#a4a4a4]"} title={"@bobur_mavlonov"}/>
      </div>
      <div className="pt-[20px] pl-[42px]"><DotsIcon/></div>
     </div>
    </div>
  )
}

export default Navbar
