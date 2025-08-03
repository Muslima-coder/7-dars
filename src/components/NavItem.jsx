import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({item,activeNav,setActiveNav}) => {
    const {} = useState("/")

  return (
    <NavLink onClick={() => setActiveNav(item.path)} to={item.path} key={item.id} className={"flex items-center gap-[20px] font-semibold text-[20px]"}>
        {activeNav == item.path ? item.activeIcon : item.icon}
          <span>{item.title}</span>
    </NavLink>
  )
}

export default NavItem
