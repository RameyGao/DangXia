import { FC } from 'react'

const tsList: TaskStatus.TsList = {
  ongoing: { outBg: '#c1e4e9', innerBg: '#a1e4e9' },
  delay: { outBg: '#21a675', innerBg: '#21a675' },
  complet: { outBg: '#cc7eb1', innerBg: '#cc7eb1' }
}

const TaskStatus: FC<TaskStatus.Props> = ({ status }) => {
  return (
    <div className={`w-[50px] h-[50px] rounded-full bg-[${tsList[status]['outBg']}]`}>
      <div className={`w-[30px] h-[30px] rounded-full bg-[${tsList[status]['innerBg']}]`} />
    </div>
  )
}

export default TaskStatus
