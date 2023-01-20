import { createSlice, Slice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export interface PageConfigState {
  isSidebarOpen: boolean
  today: string
}

const pageConfigSlice: Slice = createSlice({
  name: 'pageConfig',
  initialState: {
    isSidebarOpen: true,
    today: dayjs().format('YYYY年M月DD日')
  } as PageConfigState,
  reducers: {
    changeSidebarStatus(state) {
      state.isSidebarOpen = !state.isSidebarOpen
    }
  }
})

export const { changeSidebarStatus } = pageConfigSlice.actions
export default pageConfigSlice
