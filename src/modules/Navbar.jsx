import { Logo } from '../assets/images'
import { Button,  Logout, routeList } from '../components'
import NavItem from '../components/NavItem'
import { useState } from 'react'

const Navbar = () => {
  const[activeNav, setActiveNav] = useState("/")
  return (
    <div className='w-[283px] py-[31px] pr-[15px]'>  
    <a href="#">
    <img className='mb-[49px]' src={Logo} alt="logo" width={40} height={33}/>
    </a>
    <nav className='flex flex-col gap-[32px]'>
      {routeList.map(item => <NavItem key={item.id}  setActiveNav={setActiveNav} activeNav={activeNav} item={item}/>)}
      <Button classList={"flex items-center justify-center !w-[230px] h-[55px]"}>Tweet</Button>
    </nav>
    <Logout/>
    </div>
  )
}

export default Navbar
