import { Heading, Input, Link, ProfileUsers, SitebarContent, SItebarDivContent, Text } from '../components'
import { SearchIcon, SettingIcon } from '../assets/icons'
import { Mushtariy, Shuhratbek } from '../assets/images'

const Sitebar = () => {
  return (
   <div className="w-[402px] pt-[20px] pl-[28px] ">
    <label className='relative '>
      <span className='absolute pl-[25px] pt-[18px]'>
      <SearchIcon/>
      </span>
      <Input extraClass={"mb-[20px] w-[373px] text-[18px]  text-[#5C6C79] bg-[#EFF3F4] border-none  p-0 pl-[64px] !py-[15px] rounded-[31px] "} type={'text'} placeholder={"Search Twitter"}/>
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
