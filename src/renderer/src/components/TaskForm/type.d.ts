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
    [prop: string]: string
  }
  type ListProps = {
    updateZoomId: (id: string) => void
    children: React.ReactNode
    [prop: string]: string
  }

  type TaskFormContext = {
    updateZoomId: (id: string) => void
  }
}
