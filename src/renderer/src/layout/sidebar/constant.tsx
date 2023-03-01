import { AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import { IoTodayOutline } from 'react-icons/io5'
import { MdOutlineWbSunny } from 'react-icons/md'
import { SiProgress } from 'react-icons/si'
export const getMenuItems = (): SideBar.SideItem[] => {
  return [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: <BiHomeSmile />
      // icon: RiDashboard3Line
    },
    {
      title: 'Today',
      link: '/today',
      icon: <IoTodayOutline />
    },
    {
      title: 'Plan Tracking',
      link: '/plan-tracking',
      icon: <SiProgress />
      // MdTrackChanges
    }
  ]
}

export const getOptionItems = (): SideBar.SideItem[] => [
  // 设置
  {
    title: 'Setting',
    link: '/setting',
    icon: <AiOutlineSetting />
  },
  // 切换主题色
  {
    icon: <MdOutlineWbSunny />,
    click: (): void => {
      // 切换主题色
      // MdOutlineWbSunny
      // MdOutlineNightlight
      return
    }
  },
  // 留言
  {
    title: 'Leave a message',
    link: '/leave-message',
    icon: <AiOutlineMessage />
  }
]
