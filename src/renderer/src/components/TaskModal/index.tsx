import { PRIORITY } from '@renderer/store/enum'
import { findAndUpdateTodayTask } from '@renderer/store/features/taskSlice'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// 默认task
const DefaultTask: TaskModalType.TaskInfo = { title: '', tag: 'STUDY', priority: 'none' }

// 优先级列表
const priorityList: Array<[string, string]> = Object.entries(PRIORITY)

// 输入框组件
const TaskModal: FC<TaskModalType.Props> = ({ children, ...props }) => {
  const [task, setTask] = useState<TaskModalType.TaskInfo>(DefaultTask)
  const dispatch = useDispatch()
  const todayList = useSelector<Task.IRootState, Task.TaskItem[]>((state) => state.task.todayList)

  useEffect(() => {
    setTask({
      ...DefaultTask,
      ...props
    })
  }, [])

  // 更新task的单个条目
  const handleChangeValue = (type: string, value: string): void => {
    setTask({ ...task, [type]: value })
  }

  // 保存或更新task
  const onSave = (): void => {
    console.log('task', task)
    // 存储task
    dispatch(findAndUpdateTodayTask(task))
    // 关闭弹窗
    console.log('todayList', todayList)
    // 动画展示新增元素
  }

  return (
    <>
      <label htmlFor="my-modal" className="btn">
        {children}
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle cursor-pointer">
        <div className="modal-box relative">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg">需要做点啥...</h3>
          <div className="py-4">
            {/* 具体事项 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">具体事项</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                placeholder="我想想.."
                value={task.title}
                onChange={(e): void => handleChangeValue('title', e.target.value)}
              />
            </div>
            {/* 标签 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">标签</span>
              </label>
              <select
                className="select select-bordered"
                value={task.tag}
                onChange={(e): void => handleChangeValue('tag', e.target.value)}
              >
                <option value="STUDY">自我提升</option>
                <option value="JOB">工作职能</option>
              </select>
            </div>
            {/* 优先级 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">优先级</span>
              </label>
              <div className="flex">
                {priorityList.map(
                  // FIXME: string应该用Priority来表示
                  ([value, label]: [string, string]): ReactNode => (
                    <div className="flex mr-4" key={label}>
                      <input type="radio" className="radio radio-success mr-4" value={value} />
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={onSave}>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskModal
