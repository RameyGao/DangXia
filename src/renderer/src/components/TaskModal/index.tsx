import { PRIORITY } from '@renderer/store/enum'
import { findAndUpdateTodayTask } from '@renderer/store/features/taskSlice'
import { FC, ReactNode, useState } from 'react'
import { PortalWithState } from 'react-portal'

import { useDispatch } from 'react-redux'
// 默认任务
const DefaultTask: TaskModalType.TaskInfo = { title: '', tag: 'STUDY', priority: 'none' }

// 优先级列表
const priorityList: Array<[string, string]> = Object.entries(PRIORITY)

// 标题
const Title = ({ text }: { text: string }): JSX.Element => (
  <label className="label">
    <span className="label-text">{text}</span>
  </label>
)

// 输入框组件
const TaskModal: FC<TaskModalType.Props> = ({ children, ...props }) => {
  const [task, setTask] = useState<TaskModalType.TaskInfo>(DefaultTask)
  const dispatch = useDispatch()

  // 更新任务的单个条目
  const handleChangeValue = (type: string, value: string): void => {
    setTask({ ...task, [type]: value })
  }

  // 保存或更新任务
  const onSave = (closePortal): void => {
    // 存储任务
    dispatch(findAndUpdateTodayTask({ ...task, lastpriority: props?.priority }))
    // 关闭弹窗
    closePortal()
    // setVisible(false)
    // 动画展示新增元素
  }

  return (
    <PortalWithState
      closeOnOutsideClick
      closeOnEsc
      onOpen={(): void =>
        setTask({
          ...DefaultTask,
          ...props
        })
      }
    >
      {({ openPortal, closePortal, isOpen, portal }): JSX.Element => (
        <>
          <label htmlFor="task-modal-portal" className="cursor-pointer" onClick={openPortal}>
            {children}
          </label>
          {portal(
            <>
              <input
                type="checkbox"
                id="task-modal-portal"
                className="modal-toggle"
                checked={isOpen}
                onChange={(): void => (isOpen ? closePortal : openPortal)}
              />
              <div className={`modal modal-middle cursor-pointer z-0`} onClick={closePortal}>
                <div
                  className="modal-box relative max-w-md z-10"
                  onClick={(e): void => {
                    e.stopPropagation()
                  }}
                >
                  <h3 className="font-bold text-lg">需要做点啥...</h3>
                  <div className="py-4">
                    {/* 具体事项 */}
                    <div className="form-control w-full">
                      <Title text="具体事项" />
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="我想想.."
                        value={task.title}
                        onChange={(e): void => handleChangeValue('title', e.target.value)}
                      />
                    </div>
                    {/* 标签 */}
                    <div className="form-control w-full">
                      <Title text="标签" />
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
                      <Title text="优先级" />
                      <div className="flex mr-4">
                        {priorityList.map(
                          ([value, label]: [string, string]): ReactNode => (
                            <div className="flex mr-4" key={label}>
                              <input
                                type="radio"
                                className="radio radio-success mr-4"
                                value={value}
                                checked={value === task.priority}
                                onChange={(e): void => {
                                  console.log('eee', e)
                                  handleChangeValue('priority', e.target.value)
                                }}
                              />
                              {label}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="modal-action">
                    <button className="btn btn-wide mx-auto" onClick={() => onSave(closePortal)}>
                      保存
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </PortalWithState>
  )
}

export default TaskModal
