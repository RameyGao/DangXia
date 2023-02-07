// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import { FC } from 'react'

// 输入框组件
const TaskInput: FC<TaskInput.Props> = ({
  placeholder = '',
  variant = 'outline',
  value,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <Editable
      w="full"
      bg="#eee8e872"
      borderRadius="12px"
      pl="12px"
      variant={variant}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      {...props}
    >
      <EditablePreview />
      <EditableInput disabled={disabled} />
    </Editable>
  )
}

export default TaskInput
