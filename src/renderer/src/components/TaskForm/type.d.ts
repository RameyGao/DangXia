declare namespace TaskForm {
  interface Props extends Task.TaskItem {
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
