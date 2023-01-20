import { Box } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

const DayTime: FC<DayTime.Props> = (props) => {
  const { today } = useSelector((state: any) => state.pageConfig)
  return (
    <Box color="#000" fontSize="18px" {...props}>
      {today}
    </Box>
  )
}

export default memo(DayTime)
