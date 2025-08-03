import { LoginRoutes } from "./routes"
import { DashboardRoutes } from "./routes"

const App = () => {
  const token = false
  return token ? <DashboardRoutes/> : <LoginRoutes/>
}

export default App