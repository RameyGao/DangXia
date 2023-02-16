declare namespace Task {
  // 任务状态
  type TaskStatus = 'ongoing' | 'delay' | 'complet'
  // | 'cancel' | 'delete' | string
  // 任务标签
  type TaskTag = 'STUDY' | 'JOB'
  // 任务优先级
  type TaskPriority = 'none' | 'low' | 'middle' | 'high'

  type TaskItem = {
    id: string
    title: string
    tag: TaskTag
    priority: TaskPriority
    status: TaskStatus
  }
  type InitialTaskState = {
    date: number
    todayList: Task[]
  }

  type UpdateTaskPayload = {
    id: string
    key: keyof TaskItem
    value: string | TaskStatus
  }
}
