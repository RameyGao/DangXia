declare namespace TaskForm {
  interface Props extends Task.TaskItem {
    onChange: (v: ChangeEventHandler) => void
    [prop: string]: unknown
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
