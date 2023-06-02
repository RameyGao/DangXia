import { FC } from 'react'
import { useSelector } from 'react-redux'

// 任务追踪列表
const PlanTracking: FC = () => {
  // 全量的任务记录
  const { allTaskList } = useSelector<Task.IRootState, Task.TodayTask>((state) => state.task)

  return (
    <div>
      {allTaskList.map((task, index) => (
        <div className="collapse bg-base-200" key={index}>
          <input type="radio" name="my-accordion-1" checked />
          <div className="collapse-title text-xl font-medium">{task.title}</div>
          <div className="collapse-content">
            <p>{task.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PlanTracking
