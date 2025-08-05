import { Heading, Input, Link, ProfileUsers, SitebarContent, SItebarDivContent, Text } from '../components'
import { SearchIcon, SettingIcon } from '../assets/icons'
import { Mushtariy, Shuhratbek } from '../assets/images'
import { useState } from 'react'

const Sitebar = () => {
     const [postList, setPostList] = useState (JSON.parse(localStorage.getItem("postList")) || [
        {
          id:1,
          img: boburImg,
          username:"Designsta",
          email: "@inner · 25m",
          content:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
          commentCount:10,
          repostCount:1,
          likeCount:8,
          uploadCount:0,
          statisticCount:0,
          postImg:null
        },
        {
          id:2,
          img: boburImg,
          username:"cloutexhibition",
          email: "@RajLahoti · 22m",
          content:"YPIP dasturining bu yilgi sezoni ham o'z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o'sayotganini ko'rib hursand bo'ladi odam.",
          commentCount:0,
          repostCount:5,
          likeCount:9,
          uploadCount:0,
          statisticCount:0,
          postImg:null
        },
        {
          id:3,
          img: boburImg,
          username:"CreativePhoto",
          email: "@cloutexhibition · 1h",
          content:"Обетда.....Кечиринглар",
          commentCount:10,
          repostCount:1,
          likeCount:8,
          uploadCount:0,
          statisticCount:0,
          postImg:kebabImg
        }
      ])
      
    const [searchValue, setsearchValue] = useState("");

    const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setsearchValue(value);

    const filtered = postList.filter((item) =>
      item.username.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value) ||
      item.content.toLowerCase().includes(value)
    );

    setPostList(filtered);
  };
  return (
   <div className="w-[402px] pt-[20px] pl-[28px] ">
    <label className='relative '>
      <span className='absolute pl-[25px] pt-[18px]'>
      <SearchIcon/>
      </span>
      <input value={searchValue} onChange={handleSearch} className='searchInput mb-[20px] outline-none w-[373px] text-[18px]  text-[#5C6C79] bg-[#EFF3F4] border-none pl-[64px] py-[15px] rounded-[31px] ' type="text" placeholder='Search Twitter'  />
    </label>

    <SItebarDivContent>
      <div className='flex justify-between items-center'>
      <Heading classList={"mb-[20px]"} type={"h2"} title={"Trends for you"}/>
      <SettingIcon/>
      </div>
      <SitebarContent content1={"Trending in Germany"} title={"Revolution"} content2={"50.4K Tweets"}/>
      <SitebarContent content1={"Trending in Germany"} title={"Revolution"} content2={"50.4K Tweets"}/>
      <SitebarContent content1={"Trending in Germany"} title={"Revolution"} content2={"50.4K Tweets"}/>
      <Link href={"#"} extraClass={"mt-[15px]"} text={"Show more"} />
    </SItebarDivContent>

    <SItebarDivContent extraClass={"!px-[15px] mt-[20px]"}>
      <ProfileUsers img={Mushtariy} name={"Mushtariy"} email={"@Mushtar565266"}/>
      <ProfileUsers img={Shuhratbek} name={"Shuhratbek"} email={"@mrshukhrat"}/>
      <Link href={"#"} extraClass={"mt-[15px]"} text={"Show more"} />
    </SItebarDivContent>

    <div className='py-[30px]'>
      <div className='flex gap-[15px] items-center mb-[10px]'>
        <Text extraclass={"!text-[#536471]"} title={"Terms of Service"}/>
        <Text extraclass={"!text-[#536471]"} title={"Privacy Policy"}/>
        <Text extraclass={"!text-[#536471]"} title={"Cookie Policy"}/>
      </div>
      <div className='flex gap-[15px] items-center mb-[10px]'>
        <Text extraclass={"!text-[#536471]"} title={"Imprint"}/>
        <Text extraclass={"!text-[#536471]"} title={"Ads Info"}/>
        <Text extraclass={"!text-[#536471]"} title={"More ···"}/>
        <Link href={"/"} extraClass={"!text-[16px] !text-[#536471]"} text={"© 2021 Twitter, Inc."}/>
      </div>
    </div>

   </div>
  )
}

export default Sitebar
