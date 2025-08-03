import { LoginRoutes } from "./routes"
import { DashboardRoutes } from "./routes"
import { useCookies } from "react-cookie"

const App = () => {
  const [cookies] = useCookies(['token'])
  return cookies?.token ? <DashboardRoutes/> : <LoginRoutes/>
}

export default App