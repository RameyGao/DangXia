declare namespace Task {
  type TaskStatus = 'ongoing' | 'delay' | 'complet' | 'cancel' | 'delete' | string
  type TaskItem = {
    id: string
    title: string
    description: string
    status: TaskStatus
    addTime: number
    modifyTime: number
  }
  type OneDayTask = {
    date: number
    task: Task[]
  }

  type InitialTaskState = {
    today: OneDayTask
    allday: OneDayTask[]
  }
  type UpdateTaskPayload = {
    id: string
    key: 'title' | 'description' | 'status'
    value: string | TaskStatus
  }
}
