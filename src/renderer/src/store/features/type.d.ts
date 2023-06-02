declare namespace Task {
  // 任务状态
  type TaskStatus = 'ongoing' | 'delay' | 'complet'
  // | 'cancel' | 'delete' | string
  // 任务标签
  type TaskTag = 'STUDY' | 'JOB'
  // 任务优先级
  type TaskPriority = 'none' | 'low' | 'middle' | 'high'

  // 单条任务记录
  type TaskItem = {
    id: string
    title: string
    tag: TaskTag
    priority: TaskPriority
    status: TaskStatus
  }
  // 排序的任务对象
  interface TodayTask {
    [key in TaskPriority]: TaskItem[]
  }

  // 所有的任务记录
  interface AllTaskList {
    [key: string]: TaskItem[]
  }
  type TaskState = {
    date: number
    todayList: TodayTask
    allTaskList: AllTaskList | []
  }

  type UpdateTaskPayload = {
    id: string
    key: keyof TaskItem
    value: string | TaskStatus
    priority: Task.TaskPriority
  }

  type IRootState = {
    task: TaskState
    taskModal: TaskModalState
  }
  type TaskModalState = {
    open: boolean
    task: TaskItem
  }
}
