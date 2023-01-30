declare namespace TaskInput {
  type FuncType = () => void
  // 输入框类型定义，参照TextField
  type Props = {
    id?: string
    placeholder: string
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled'
    value: string
    onChange: (e: ChangeEventHandler) => arrowFn
    disabled?: boolean
    [prop: string]: string | number | unknown
  }
}
