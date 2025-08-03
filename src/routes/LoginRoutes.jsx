import { Route, Routes } from 'react-router-dom'
import { PageLoading, PATH } from '../components'
import {Login} from "../pages"
import { Suspense } from 'react'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path={PATH.main} element={
          <Suspense fallback={<PageLoading/>}><Login/></Suspense>
        }/>
    </Routes>
  )
}

export default LoginRoutes