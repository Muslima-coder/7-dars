import { Loading, Logo } from '../assets/images'

const PageLoading = () => {
  return (
    <div className='fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center '>
      <img className='loading-img w-[100px] h-[100px]' src={Logo} alt="loading" />
    </div>
  )
}

export default PageLoading