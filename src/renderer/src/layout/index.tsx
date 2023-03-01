import { FC, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PageHeader from './header'
import Sidebar from './sidebar'
import { getMenuItems, getOptionItems } from './sidebar/constant'

const Layout: FC = () => {
  const location = useLocation()

  const menus: SideBar.SideItem[] = [...getMenuItems(), ...getOptionItems()]
  const title = useMemo(
    () => menus.find((m: SideBar.SideItem) => m.link && m.link === location.pathname)?.title,
    [location]
  )
  return (
    <div className="flex" id="outer-container" color="red">
      <Sidebar />
      <div className="flex-1 p-[20px] bg-[#fbfaf5]">
        <PageHeader title={title} />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
