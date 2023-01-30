declare namespace TaskForm {
  type Task = {
    id: string
    title: string // 标题内容
    status: TaskStatus.Status
  }
  type Props = {
    id: string
    value: Task
    onChange: (v: ChangeEventHandler) => void
    [key: string]: unknown
  }
  type ListProps = {
    updateZoomId: (id: string) => void
    children: React.ReactNode
    [prop: string]: unknown
  }

  type TaskFormContext = {
    updateZoomId: (id: string) => void
  }
}
