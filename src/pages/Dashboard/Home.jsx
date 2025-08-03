import { ChooseImgIcon, GifIcon, ListIcon, ModeIcon, SmileIcon, VectorIcon } from "../../assets/icons"
import { boburImg } from "../../assets/images"
import { Button, Heading, Text } from "../../components"

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-[1px] border-b-[#D8D8D8] p-[20px] ">
      <Heading type={"h2"} title={"Home"}/>
      <ModeIcon/>
      </div>
      <div className="border-b-[1px] border-b-[#D8D8D8] p-[20px]">
        <div className="flex gap-[15px] items-center mb-[32px]">
        <img src={boburImg} alt="img" />
        <Text title={"What's happening"}/>
        </div>
        <div className="flex justify-between items-start">
        <div className="pl-[70px] flex gap-[20px] items-center">
          <ChooseImgIcon/>
          <GifIcon/>
          <VectorIcon/>
          <SmileIcon/>
        </div>
        <Button classList={"!w-[108px] h-[50px] opacity-[40%] flex items-center justify-center"}>Tweet</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
