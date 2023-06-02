declare namespace TaskModalType {
  import { ReactElement } from 'react'
  type FuncType = () => void
  type Props = {
    children: ReactElement
    className: string
    [prop: string]: string | number | unknown
  }
  type TaskInfo = {
    id?: string
    status?: 'ongoing'
    title: string
    tag: Task.TaskTag
    priority: Task.TaskPriority
  }
}
