import { FC } from 'react'

const tsList: TaskStatus.TsList = {
  ongoing: { outBg: 'bg-indigo-500', innerBg: 'bg-pink-600' },
  delay: { outBg: 'bg-purple-500', innerBg: 'bg-green-600' },
  complet: { outBg: 'bg-yellow-500', innerBg: 'bg-red-600' }
}

const TaskStatus: FC<TaskStatus.Props> = ({ status }) => {
  console.log('status', status)
  return (
    <div
      className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center ${tsList[status]['outBg']}`}
    >
      <div className={`w-6 h-6 mx-auto rounded-full ${tsList[status]['innerBg']}`} />
    </div>
  )
}
export default TaskStatus
