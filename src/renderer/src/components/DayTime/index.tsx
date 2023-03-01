import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

const DayTime: FC<DayTime.Props> = (props) => {
  const { today } = useSelector((state: any) => state.pageConfig)
  {
    /* <div color="#000" fontSize="18px" {...props}>
      {today}
    </div> */
  }

  return (
    <p color="black" {...props}>
      {today}
    </p>
  )
}

export default memo(DayTime)
