import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { getUid } from '@renderer/utils/uuid'

// 生成一条任务
const generateTask = (data: Partial<Task.TaskItem>): Task.TaskItem => {
  return {
    id: getUid(),
    title: '',
    tag: 'STUDY',
    priority: 'none',
    status: 'ongoing',
    ...data
  }
}

// 重组今日的任务列表
const combineTodayList = (
  taskList: Task.TaskItem[],
  newData: Partial<Task.TaskItem>,
  key: keyof Task.TaskItem
): Task.TaskItem[] => {
  return taskList.map((v) =>
    v[key] == newData[key]
      ? {
          ...v,
          ...newData
        }
      : v
  )
}
const taskSlice: Slice = createSlice({
  name: 'task',
  initialState: {
    date: Date.now(),
    todayList: {
      high: [],
      middle: [],
      low: [],
      none: []
    },
    allTaskList: [] // 包含当天的任务列表
  } as Task.TaskState,
  // effects: {},
  reducers: {
    // 查找 => 新增 / 更新当天的任务
    findAndUpdateTodayTask(state, action: PayloadAction<Partial<Task.TaskItem>>) {
      const { id, priority, lastpriority } = action.payload as {
        id: string
        priority: Task.TaskPriority
        lastpriority?: Task.TaskPriority
      }
      if (id) {
        if (lastpriority) {
          // 删除上一次，并新增到新的优先级列表下
          state.todayList[lastpriority] = state.todayList[lastpriority].filter(
            (v: Task.TaskItem) => v.id !== id
          )
          const newTask = generateTask(action.payload)
          state.todayList[priority].push(newTask)
        } else {
          state.todayList[priority] = combineTodayList(
            state.todayList[priority],
            action.payload,
            'id'
          )
        }
      } else {
        const newTask = generateTask(action.payload)
        state.todayList[priority] = [...state.todayList[priority], newTask]
      }
      return state
    },

    // 设置单条栏目
    setTodayTask(state, action: PayloadAction<Task.UpdateTaskPayload>) {
      const { id, key, value, priority } = action.payload
      state.todayList[priority] = combineTodayList(
        state.todayList[priority],
        { id, [key]: value },
        'id'
      )
      return state
    },
    // 根据索引更新排序
    updateTodayTaskByIndex(state, action) {
      const { list, priority } = action.payload
      state.todayList[priority] = list
      return state
    },
    // 任务删除
    deleteTaskById(state, action) {
      const { id, priority } = action.payload
      return {
        ...state,
        todayList: state.todayList[priority].filter((v: Task.TaskItem) => v.id !== id)
      }
    },
    // 标记当天任务状态
    setTaskStatus(state, action) {
      const { id, priority, status } = action.payload
      state.todayList[priority] = combineTodayList(state.todayList[priority], { id, status }, 'id')
      return state
    }

    // 获取所有的任务列表
  }
})

export const {
  findAndUpdateTodayTask,
  setTodayTask,
  updateTodayTaskByIndex,
  setTaskStatus,
  deleteTaskById
} = taskSlice.actions
export default taskSlice
