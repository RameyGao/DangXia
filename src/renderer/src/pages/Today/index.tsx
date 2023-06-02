import TaskModal from '@renderer/components/TaskModal'
import { updateTodayTaskByIndex } from '@renderer/store/features/taskSlice'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { FC, useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { MdOutlineAddCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TaskList from './components/TaskList'
dayjs.extend(isBetween)

/**
 * 空白任务，根据时间点引导新建任务
 * 0:00 - 11:59 早上好，用Dangxia开启新一天的快乐生活吧
 * 12:00 - 17:59 中午好，上午未见任务喔，开启今天的任务吧
 * 18:01 - 23:59 晚上好，今天好像没有什么重要任务哦
 */
const EmptyToday: FC = () => {
  const desc = useMemo(() => {
    if (dayjs().isBetween(dayjs('YYYY-MM-DD 00:00'), dayjs('YYYY-MM-DD 11:59'), 'minute')) {
      return '早上好，用Dangxia开启新一天的快乐生活吧'
    }
    if (dayjs().isBetween(dayjs('YYYY-MM-DD 12:00'), dayjs('YYYY-MM-DD 17:59'), 'minute')) {
      return '中午好，上午未见任务喔，开启今天的任务吧'
    }
    return '晚上好，今天未开启任务，明天不要忘记哦'
  }, [])
  return (
    <div className="h-[40vh] flex justify-center items-center">
      <div className="text-[24px] font-bold text-[#828282]">{desc}</div>
    </div>
  )
}

// a little function to help us with reordering the result
const reorder = (list: Task.TaskItem[], startIndex: number, endIndex: number): Task.TaskItem[] => {
  console.log('list', list, startIndex, endIndex)
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

// 当天的任务新建修改
const Today: FC = () => {
  const dispatch = useDispatch()
  const todayList = useSelector<Task.IRootState, Task.TodayTask>((state) => state.task.todayList)

  console.log('todayList coming', todayList)
  // useEffect(() => {
  //   // TODO:若无任务，默认新增第一条
  //   // 当新增一条任务，展开所在任务的缩放
  //   if (todayList?.length > 0) {
  //     updateZoomId(todayList[todayList.length - 1].id)
  //   }
  // }, [todayList])
  // useEffect(() => {
  //   return () => {
  //     // 离开页面时，更新任务到后台
  //     console.log('......', todayList)
  //   }
  // }, [todayList])

  const onDragEnd = (result: {
    destination: { index: number }
    source: { index: number }
    type: Task.TaskPriority
  }): void => {
    const { destination, source, type } = result
    if (!destination) {
      return
    }
    // 更新排序
    const list = reorder(todayList[type], source.index, destination.index)
    dispatch(
      updateTodayTaskByIndex({
        list,
        priority: type
      })
    )
  }
  const TaskPrioritys = ['high', 'middle', 'low', 'none'] as Task.TaskPriority[]

  return (
    <div>
      {Object.values(todayList).flat(1)?.length === 0 ? (
        <EmptyToday />
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          {TaskPrioritys.map((key: Task.TaskPriority): JSX.Element => {
            return (
              <div className="my-4" key={key}>
                <TaskList taskList={todayList[key]} listId={key} listType={key} />
              </div>
            )
          })}
        </DragDropContext>
      )}

      <TaskModal>
        <div
          className="fixed right-[28px] bottom-[36px] pointer text-[red]"
          // onClick={newTodayTask}
        >
          <MdOutlineAddCircle size="50" title="添加" />
        </div>
      </TaskModal>
    </div>
  )
}
export default Today
