import { cloneElement, FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getMenuItems, getOptionItems } from './constant'

const Sidebar: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // 验证选中
  const isChecked = (link: string | undefined): boolean => !!link && location.pathname === link

  // 渲染Menu
  const renderMenuItem: FC<SideBar.SideItem> = ({ title = '', icon, link, click }) => (
    <div className={`tooltip tooltip-primary tooltip-right`} data-tip={title} key={title}>
      <div className="py-[20px]" onClick={(): void => (link ? navigate(link) : click?.())}>
        {cloneElement(icon as JSX.Element, {
          color: isChecked(link) ? '#8774E7' : '#003400',
          size: '28px'
        })}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col justify-between items-center bg-[#f3f3f3] w-[80px] h-screen">
      <div className="flex flex-col">
        <div className="my-[20px] text-white">
          <div className="text-md bg-[tomato] text-white">DX</div>
        </div>
        {/* 菜单栏 */}
        {getMenuItems().map(renderMenuItem)}
      </div>

      {/* 操作栏 */}

      <div>{getOptionItems().map(renderMenuItem)}</div>
    </div>
  )
}

export default Sidebar
