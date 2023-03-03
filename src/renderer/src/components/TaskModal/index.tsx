import { PRIORITY } from '@renderer/store/enum'
import { findAndUpdateTodayTask } from '@renderer/store/features/taskSlice'
import { FC, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
// 默认task
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
  let lastPriority = props?.priority
  const [task, setTask] = useState<TaskModalType.TaskInfo>(DefaultTask)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    setTask(
      visible
        ? {
            ...DefaultTask,
            ...props
          }
        : DefaultTask
    )
    if (!visible) {
      lastPriority = ''
    }
  }, [visible])

  // 更新task的单个条目
  const handleChangeValue = (type: string, value: string): void => {
    setTask({ ...task, [type]: value })
  }

  // 保存或更新task
  const onSave = (): void => {
    // 存储task
    dispatch(findAndUpdateTodayTask({ ...task, lastPriority }))
    // 关闭弹窗
    setVisible(false)
    // 动画展示新增元素
  }

  return (
    <>
      <div className="cursor-pointer" onClick={(): void => setVisible(true)}>
        {children}
      </div>
      {createPortal(
        <div
          className={`${visible ? 'modal-open' : ''} modal modal-middle cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            console.log(e)
            setVisible(false)
          }}
        >
          <div className="modal-box relative max-w-md">
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
                    // FIXME: string用Priority来表示
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
              <button className="btn btn-wide mx-auto" onClick={onSave}>
                保存
              </button>
            </div>
          </div>
        </div>,
        document.querySelector('#task-modal') as Element
      )}
    </>
  )
}

export default TaskModal
