declare namespace TaskModalType {
  import { ReactElement } from 'react'
  type FuncType = () => void
  type Props = {
    children: ReactElement
    [prop: string]: string | number | unknown
  }
  type TaskInfo = {
    title: string
    tag: Task.TaskTag
    priority: Task.TaskPriority
  }
}
