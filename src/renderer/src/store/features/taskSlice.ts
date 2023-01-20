import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { getUuid } from '@renderer/utils/uuid'

const taskSlice: Slice = createSlice({
  name: 'task',
  initialState: {
    today: {
      date: Date.now(),
      task: [],
      modifyTime: Date.now(),
      addTime: Date.now()
    },
    allday: []
  } as Task.InitialTaskState,
  reducers: {
    addNewTodayTask(state) {
      state.today.task.push({
        id: getUuid(),
        title: '',
        description: '',
        status: 'ongoing',
        addTime: Date.now(),
        modifyTime: Date.now()
      })
    },
    setTodayTask(state, action: PayloadAction<Task.UpdateTaskPayload>) {
      const { id, key, value } = action.payload
      const task = state.today.task.find((item) => item.id === id) as Task.TaskItem
      task[key] = value
    }
    // changeSidebarStatus(state) {
    //     console.log('....');
    //     state.isSidebarOpen = !state.isSidebarOpen;
    // },
  }
})

export const { addNewTodayTask, setTodayTask } = taskSlice.actions
export default taskSlice
