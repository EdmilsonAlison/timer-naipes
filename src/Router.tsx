import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.tsx'
import { History } from './pages/History/History.tsx'
import {Index} from "./layout/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
        <Route path={"/"} element={<Index/>}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/history'} element={<History />} />
        </Route>
    </Routes>
  )
}
