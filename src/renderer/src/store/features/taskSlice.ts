import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { getUid } from '@renderer/utils/uuid'

const taskSlice: Slice = createSlice({
  name: 'task',
  initialState: {
    date: Date.now(),
    todayList: []
  } as Task.InitialTaskState,
  reducers: {
    findAndUpdateTodayTask(state, action: PayloadAction<Partial<Task.TaskItem>>) {
      const { id, priority } = action.payload

      if (id) {
        let todayTask = state.todayList.find((item) => item.id === id) as Task.TaskItem
        todayTask = {
          ...todayTask,
          ...action.payload
        }
        // 更新task
      } else {
        // 查询优先级，根据当前task的优先级插入list
        const newTask = {
          id: getUid(),
          title: '',
          tag: 'STUDY',
          priority: 'none',
          status: 'ongoing',
          ...action.payload
        }
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
    setTodayTask(state, action: PayloadAction<Task.UpdateTaskPayload>) {
      const { id, key, value } = action.payload
      const todayTask = state.todayList.find((item) => item.id === id) as Task.TaskItem
      console.log('....', todayTask)
      // todayTask[key] = value
    }
    // changeSidebarStatus(state) {
    //     console.log('....');
    //     state.isSidebarOpen = !state.isSidebarOpen;
    // },
  }
})

export const { findAndUpdateTodayTask, setTodayTask } = taskSlice.actions
export default taskSlice
