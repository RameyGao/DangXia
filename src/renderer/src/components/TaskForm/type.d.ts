declare namespace TaskForm {
  type Zoom = 'expand' | 'collapse'
  type Props = {
    sx?: SxProps<Theme>
    zoom?: Zoom
    id: string
    value: Task
    onChange: (v: ChangeEventHandler) => void
  }
  type ListProps = {
    zoomId: string
    updateZoomId: (id: string) => void
    sx?: SxProps<Theme>
    children: React.ReactNode
  }

  type TaskFormContext = {
    zoomId: string
    updateZoomId: (id: string) => void
  }
}
