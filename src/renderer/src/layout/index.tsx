import { Box, Flex } from '@chakra-ui/react'
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
    <Flex id="outer-container" color="red">
      <Sidebar />
      <Box bg="#fbfaf5" flex="1" p="20px">
        <PageHeader title={title} />
        <Outlet />
      </Box>
    </Flex>
  )
}

export default Layout
