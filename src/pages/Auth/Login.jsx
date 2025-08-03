import { useState } from "react"
import { Loading, Logo } from "../../assets/images"
import { Button, Heading, Input, Link, PageLoading } from "../../components"
import {useCookies} from "react-cookie"

const Login = () => {
  const [cookies, setCookie] = useCookies(['token'])
  const [loading, setLoading] = useState(false)

  function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    setTimeout(() => {
      setCookie("token", data)
    },1000);
  }

  return (
    <>
    <div className=" w-[450px] mx-auto mt-[60px] ">
    <img src={Logo} alt="logo" />
    <Heading classList={"!my-[36px]"} type={"h1"} title={"Log in to Twitter"} />
    <form onSubmit={handleLogin} autoComplete="off">
      <Input extraClass={"mb-[25px]"} name={"email"} type={"text"} placeholder={"Phone number, email address"} />
      <Input extraClass={"mb-[25px]"} name={"password"} type={"password"} placeholder={"Password"} />
      <Button type={"submit"}>
        {loading ?  <img className="scale-[2.5] w-[28px] h-[28px] mx-auto" src={Loading} alt="loading" /> : "Log in"}
      </Button>
    </form>
    <div className="mt-[40px] flex justify-between items-center">
    <Link text={"Forgot password?"}/>
    <Link text={"Sign up to Twitter"}/>
    </div>
    </div>
    </>
  )
}

export default Login
