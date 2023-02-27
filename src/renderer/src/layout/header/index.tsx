import DayTime from '@renderer/components/DayTime'
import { FC } from 'react'

const PageHeader: FC<LayoutHeader.Props> = ({ title, children }) => {
  return (
    <div className="pb-[22px] relative">
      <div className="flex items-baseline">
        <p className="text-[32px] text-black font-medium">{title}</p>
        <DayTime ml="8px" />
      </div>
      {children}
    </div>
  )
}

export default PageHeader
