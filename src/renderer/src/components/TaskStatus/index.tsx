import { Circle } from '@chakra-ui/react'
import { FC } from 'react'

const tsList: TaskStatus.TsList = [
  { outBg: '#c1e4e9', innerBg: '#a1e4e9' },
  { outBg: '#21a675', innerBg: '#21a675' },
  { outBg: '#cc7eb1', innerBg: '#cc7eb1' }
]
const TaskStatus: FC<TaskStatus.Props> = ({ status }) => {
  return (
    <Circle bg={tsList[status]['outBg']} size="50">
      <Circle bg={tsList[status]['innerBg']} size="30" />
    </Circle>
  )
}

export default TaskStatus
