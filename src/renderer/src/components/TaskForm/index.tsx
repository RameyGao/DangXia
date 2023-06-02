// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { deleteTaskById, setTaskStatus } from '@renderer/store/features/taskSlice'
import { FC } from 'react'
import { TbSettings } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import DragLine from '../DragLine'
import TaskModal from '../TaskModal'
import TaskStatus from '../TaskStatus'

// Form组件
const TaskForm: FC<TaskForm.Props> = ({ id, title, tag, priority, status, onChange, ...prop }) => {
  const dispatch = useDispatch()

  // 状态标记
  const onChangeStatus = (status: Task.TaskStatus): void => {
    dispatch(setTaskStatus({ id, priority, status }))
  }
  // 任务删除
  const onDelete = (): void => {
    dispatch(deleteTaskById({ id, priority }))
  }
  return (
    <div
      className="flex flex-row justify-between items-center w-full py-5 select-none relative"
      {...prop}
    >
      <DragLine className="absolute left-2/4 top-1 transform translate-x-1/2" />
      {/* 任务状态 - 颜色标记 */}
      <TaskStatus status={status} />
      {/* 任务名称 修改、disabled... */}
      <TaskModal id={id} title={title} tag={tag} priority={priority} className="flex-1">
        <div className="w-[98%] mx-[1%] text-base font-normal rounded-lg border-current bg-white p-3">
          {title}
        </div>
      </TaskModal>
      {/* 设置：任务状态、操作 */}
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <label tabIndex={0} className="align-middle">
          <TbSettings size="24px" cursor="pointer" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow w-32 p-2 rounded-box bg-slate-100"
          style={{ right: -30 }}
        >
          <li className="menu-title">
            <span>状态类</span>
          </li>
          <li>
            <button onClick={(): void => onChangeStatus('delay')}>延后</button>
          </li>
          <li>
            <button onClick={(): void => onChangeStatus('complet')}>完成</button>
          </li>
          <li className="menu-title">
            <span>任务类</span>
          </li>
          <li>
            <button onClick={onDelete}>删除</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TaskForm
