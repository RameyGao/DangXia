declare namespace TaskInput {
  // 输入框类型定义，参照TextField
  type Props = {
    id?: string
    placeholder: string
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled'
    value: string
    onChange: (e: ChangeEventHandler) => void
    sx?: SxProps<Theme> | undefined
    disabled?: boolean
    [prop: string]: string | number | unknown
  }
}
