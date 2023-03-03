import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { getUid } from '@renderer/utils/uuid'

// 生成一条task
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

// 重组今日的task list
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
    }
  } as Task.InitialTaskState,
  reducers: {
    // 查找 => 新增 / 更新当天的task
    findAndUpdateTodayTask(state, action: PayloadAction<Partial<Task.TaskItem>>) {
      const { id, priority, lastPriority } = action.payload as {
        id: string
        priority: Task.TaskPriority
        lastPriority?: Task.TaskPriority
      }
      if (id) {
        if (lastPriority) {
          // 删除上一次，并新增到新的优先级列表下
          state.todayList[lastPriority] = state.todayList[lastPriority].filter(
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
      return {
        ...state,
        todayList: state.todayList.filter((v: Task.TaskItem) => v.id !== action.payload)
      }
    },
    // 任务删除
    deleteTaskByIndex(state, action) {
      return {
        ...state,
        todayList: state.todayList.splice(action.payload, 1)
      }
    },
    // 标记当天任务状态
    setTaskStatus(state, action) {
      const { id, priority, status } = action.payload
      state.todayList[priority] = combineTodayList(state.todayList[priority], { id, status }, 'id')
      return state
    }
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
