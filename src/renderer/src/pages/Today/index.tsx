import { Box, Circle } from '@chakra-ui/react'
import TaskForm from '@renderer/components/TaskForm'
import { addNewTodayTask, setTodayTask } from '@renderer/store/features/taskSlice'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { FC, useEffect, useMemo, useState } from 'react'
import { MdOutlineAddCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
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
    <Box
      sx={{
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#828282'
        }}
      >
        {desc}
      </Box>
    </Box>
  )
}

// 当天的任务新建修改
const Today: FC = () => {
  const dispatch = useDispatch()
  const todayList = useSelector((state: any) => state.task.today.task)

  // 缩放id，采用数组index作为key，设置缩放拉伸
  const [zoomId, setZoomId] = useState<string>('')

  useEffect(() => {
    // TODO:若无任务，默认新增第一条
    // 当新增一条任务，展开所在任务的缩放
    if (todayList.length > 0) {
      updateZoomId(todayList[todayList.length - 1].id)
    }
  }, [todayList])
  useEffect(() => {
    return () => {
      // 离开页面时，更新任务到后台
      console.log('......', todayList)
    }
  }, [todayList])
  // 缩放，拉伸，收起form表单，将这件事交付于父组件执行
  const updateZoomId = (id: string) => {
    setZoomId(id)
  }
  // 新增一条空task
  const newTodayTask = () => {
    dispatch(addNewTodayTask())
  }
  // 新增task详细记录
  const handleTodayTask = (value: Task.UpdateTaskPayload) => {
    dispatch(setTodayTask(value))
  }

  return (
    <Box>
      {/* 下拉选项控制、标题输入、描述输入、单项设置 */}
      {/* {todayList.length === 0 && <EmptyToday />} */}
      <Box>
        {[{ id: '1' }].map((task) => {
          return (
            <TaskForm
              id={task.id}
              value={task}
              key={task.id}
              onChange={handleTodayTask}
              mb="12px"
            />
          )
        })}
      </Box>
      <Circle
        position={'fixed'}
        right="28px"
        bottom="36px"
        cursor={'pointer'}
        onClick={newTodayTask}
        color="red"
      >
        <MdOutlineAddCircle size="50" title="添加" />
      </Circle>
    </Box>
  )
}
export default Today
