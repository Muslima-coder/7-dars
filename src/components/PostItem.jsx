import { CommentIcon, DotsIcon, LikeIcon, RepostIcon, StatisticIcon, UploadIcon } from "../assets/icons"

const PostItem = ({item}) => {
  return (
    <div className=" border-b-[1px] border-b-[#D8D8D8] p-[20px] ">
    <div className="relative mb-[22px] flex gap-[15px] items-center">
    <img className="w-[60px] h-[60px]" src={item.img} alt="img" />
    <div>
    <div className="mb-[5px] flex gap-[5px] items-center">
        <strong className="font-bold text-[20px]">{item.username}</strong>
        <p className="font-normal text-[18px]">{item.email}</p>
    </div>
    <p className="font-normal text-[18px]">{item.content}</p>
    </div>
    <button className="cursor-pointer absolute right-[10px] top-[15px]"> <DotsIcon/></button>
    </div>
    
    {item.postImg && <img className="rounded-[20px] w-[679px] h-[453px] pb-[15px] mx-auto" src={item.postImg} alt="post img" /> }

    <div className="flex items-center justify-between w-[80%] mx-auto">
        <div className="flex items-center gap-[8px]">
        <CommentIcon/>
        <span>{item.commentCount}</span>
        </div>
        <div className="flex items-center gap-[8px]">
        <RepostIcon/>
        <span>{item.repostCount}</span>
        </div>
        <div className="flex items-center gap-[8px]">
        <LikeIcon/>
        <span>{item.likeCount}</span>
        </div>
        <div className="flex items-center gap-[8px]">
        <UploadIcon/>
        <span>{item.uploadCount}</span>
        </div>
        <div className="flex items-center gap-[8px]">
        <StatisticIcon/>
        <span>{item.statisticCount}</span>
        </div>
    </div>
    </div>
  )
}

export default PostItem