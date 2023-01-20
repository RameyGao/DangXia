// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Input } from '@chakra-ui/react'
import { FC } from 'react'

// 输入框组件
const TaskInput: FC<TaskInput.Props> = ({
  id = '',
  placeholder = '',
  variant = 'outline',
  value,
  onChange,
  sx,
  disabled = false,
  ...props
}) => {
  return (
    <Input
      w="full"
      bg="#eee8e872"
      borderRadius="18px"
      variant={variant}
      id={id}
      placeholder={placeholder}
      required
      defaultValue={value}
      onBlur={onChange}
      disabled={disabled}
      {...props}
    />
  )
}

export default TaskInput
