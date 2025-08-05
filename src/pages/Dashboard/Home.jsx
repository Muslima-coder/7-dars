import {  useState } from "react"
import { ChooseImgIcon, GifIcon, ModeIcon,  SmileIcon,  VectorIcon } from "../../assets/icons"
import { boburImg, kebabImg } from "../../assets/images"
import { Button, Heading, Input, PostItem} from "../../components"
import { useCookies } from "react-cookie"

const Home = () => {
  const [cookies] = useCookies(['token'])
  const [chooseImg, setChooseImg] = useState(null)
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
  

  function handleCreatePost(e){
    e.preventDefault()
    const data = {
      id: postList[postList.length - 1].id ? postList[postList.length - 1].id + 1 : 1,
      img: boburImg,
      username: cookies.token.username,
      email: cookies.token.email,
      content: e.target.todo.value,
      commentCount:0,
      repostCount:0,
      likeCount:0,
      uploadCount:0,
      statisticCount:0,
      postImg:chooseImg
    }
    setPostList([data, ...postList])
    setChooseImg(null)
    e.target.reset()
  }
  localStorage.setItem("postList", JSON.stringify(postList))

  return (
    <div>
      <div className="flex justify-between items-center border-b-[1px] border-b-[#D8D8D8] p-[20px] ">
      <Heading type={"h2"} title={"Home"}/>
      <ModeIcon/>
      </div>
      <div className="relative border-b-[1px] border-b-[#D8D8D8] p-[20px]">
        <div className=" flex gap-[15px] items-center mb-[32px]">
        <img src={boburImg} alt="img" />
        <form onSubmit={handleCreatePost} className="w-full" autoComplete="off">
          <Input type={"text"} extraClass={'border-none bg-transparent !p-0 font-semibold text-[22px]'} name={"todo"} placeholder={"What's happening"} />
          <Button type={'submit'} classList={"!w-[108px] h-[50px] absolute right-[25px] bottom-[5px] flex items-center justify-center"}>Tweet</Button>
        </form>
        </div>
        <div className="pl-[70px] mb-[26px] flex gap-[22px] items-center">
          <label className="cursor-pointer">
            <ChooseImgIcon/>
            <input onChange={(e) => setChooseImg(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file" />
          </label>
          <button className=" cursor-pointer"><GifIcon/></button>
          <button className=" cursor-pointer"><VectorIcon/></button>
          <button className=" cursor-pointer"><SmileIcon/></button>
        </div>
      </div>
      {postList.map(item => <PostItem key={item.id} item={item}/>)}
    </div>
  )
}

export default Home
