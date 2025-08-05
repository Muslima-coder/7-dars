const Link = ({href, text, extraClass}) => {
  return (
    <a className={`${extraClass} cursor-pointer font-normal text-[18px] text-[#1DA1F2]`} href={href}>{text}</a>
  )
}

export default Link