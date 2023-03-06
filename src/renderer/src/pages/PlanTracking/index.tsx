import { FC } from 'react'
import { useSelector } from 'react-redux'

// 任务追踪列表
const PlanTracking: FC = () => {
  // 全量的任务记录
  const { allTaskList } = useSelector<Task.IRootState, Task.TodayTask>((state) => state.task)

  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">2022-10-02</div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  )
}
export default PlanTracking
