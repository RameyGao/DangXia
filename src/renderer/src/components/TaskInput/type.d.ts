declare namespace TaskInput {
  import type * as CSS from 'csstype'

  type FuncType = () => void
  // 输入框类型定义，参照TextField
  type Props = {
    id?: string
    sx?: CSS.Properties
    placeholder: string
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled'
    value: string
    onChange: (e: ChangeEventHandler) => arrowFn
    isDisabled?: boolean
    sx?: string
    [prop: string]: string | number | unknown
  }
}
