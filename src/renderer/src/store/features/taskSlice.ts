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
  todayList: Task.TaskItem[],
  newData: Partial<Task.TaskItem>,
  key: keyof Task.TaskItem
): Task.TaskItem[] => {
  return todayList.map((v) =>
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
    todayList: []
  } as Task.InitialTaskState,
  reducers: {
    // 查找更新当天的task
    findAndUpdateTodayTask(state, action: PayloadAction<Partial<Task.TaskItem>>) {
      const { id, priority } = action.payload
      // 更新task
      if (id) {
        return {
          ...state,
          todayList: combineTodayList(state.todayList, action.payload, 'id')
        }
      } else {
        // 查询优先级，根据当前task的优先级插入list
        const newTask = generateTask
        if (priority === 'none' || state.todayList.length === 0) {
          state.todayList.push(newTask)
        } else {
          // 根据
          const prioritySort = ['high', 'middle', 'low', 'none']
          const lastPriorityIndex = state.todayList.findLastIndex(
            (v: Task.TaskItem) => v.priority === priority
          )
          if (lastPriorityIndex === -1) {
            // ...
          }
          state.todayList.splice(lastPriorityIndex + 1, 0, newTask)
        }
      }
      return state
    },

    // 设置单条栏目
    setTodayTask(state, action: PayloadAction<Task.UpdateTaskPayload>) {
      const { id, key, value } = action.payload
      return {
        ...state,
        todayList: combineTodayList(state.todayList, { id, [key]: value }, 'id')
      }
    },

    updateTodayTaskByIndex(state, action) {
      return {
        ...state,
        todayList: action.payload
      }
    }
  }
})

export const { findAndUpdateTodayTask, setTodayTask, updateTodayTaskByIndex } = taskSlice.actions
export default taskSlice
