import { Route, Routes } from "react-router-dom"
import { routeList } from "../components"

const DashboardRoutes = () => {
  return (
    <Routes>
        {routeList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default DashboardRoutes