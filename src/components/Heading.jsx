
const Heading = ({type, title, classList}) => {
  if(type == "h1"){
    return <h1 className={`${classList} font-bold text-[42px] text-[#000000]`}>{title}</h1>
  }
  else if(type == "h2"){
     return <h2 className={`${classList} text-[24px] font-bold text-[#000]`}>{title}</h2>
  }
  else if(type == "h3"){
     return <h3 className={`${classList} text-[20px] font-semiBold text-[#000]`}>{title}</h3>
  }
}

export default Heading