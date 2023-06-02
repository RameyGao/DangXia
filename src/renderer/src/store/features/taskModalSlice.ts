import { createSlice, Slice } from '@reduxjs/toolkit'

const taskModalSlice: Slice = createSlice({
  name: 'taskModal',
  initialState: {
    open: false,
    task: {}
  } as Task.TaskModalState,
  reducers: {
    // 修改modal状态及数据
    toggleTaskModal(state, action) {
      const { open, data } = action.payload
      state.open = open
      state.task = data
      return state
    }
  }
})

export const { toggleTaskModal } = taskModalSlice.actions
export default taskModalSlice
