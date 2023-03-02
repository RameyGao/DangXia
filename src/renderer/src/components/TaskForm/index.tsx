// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { deleteTaskById, setTaskStatus } from '@renderer/store/features/taskSlice'
import { FC } from 'react'
import { TbSettings } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import TaskModal from '../TaskModal'
import TaskStatus from '../TaskStatus'

// Form组件
const TaskForm: FC<TaskForm.Props> = ({ id, title, tag, priority, status, onChange, ...prop }) => {
  const dispatch = useDispatch()

  // 状态标记
  const onChangeStatus = (status: Task.TaskStatus): void => {
    dispatch(setTaskStatus({ id, status }))
  }
  // 任务删除
  const onDelete = (): void => {
    dispatch(deleteTaskById(id))
  }
  return (
    <div
      className="flex flex-row justify-between items-center w-full px-4 py-0 relative select-none"
      {...prop}
    >
      {/* 任务状态 - 颜色标记 */}
      <TaskStatus status={status} />
      {/* 任务名称 修改、disable... */}
      <input
        id={id}
        type="text"
        placeholder="请输入任务名称"
        className="input input-md w-full mx-4 text-base font-normal"
        value={title}
        onChange={(e): void => onChange({ id, key: 'title', value: e.target.value, priority })}
        readOnly={false}
      />
      {/* 设置：任务状态、操作 */}
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <label tabIndex={0} className="align-middle">
          <TbSettings size="24px" cursor="pointer" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-purple-100 rounded-box w-32"
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
          <li>
            <TaskModal id={id} title={title} tag={tag} priority={priority}>
              编辑
            </TaskModal>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TaskForm
