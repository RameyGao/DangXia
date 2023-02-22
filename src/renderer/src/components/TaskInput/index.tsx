// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Box, Input } from '@chakra-ui/react'
import { FC } from 'react'

// 输入框组件
const TaskInput: FC<TaskInput.Props> = ({
  sx,
  placeholder,
  isDisabled = false,
  value,
  onChange
}) => {
  return (
    <Box {...sx}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e): void => onChange(e.target.value)}
        isReadOnly={isDisabled}
        h="full"
      />
      {/* <Editable
        placeholder="Paste here"
        fontSize="2xl"
        defaultValue={value || '-'}
        onClick={(e) => {
          console.log('eee', e)
          e.preventDefault()
        }}
      >
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable> */}
    </Box>
  )
}

export default TaskInput
