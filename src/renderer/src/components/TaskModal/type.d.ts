import { ReactElement } from 'react'

declare namespace TaskModalType {
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
