// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Box, Flex } from '@chakra-ui/react'
import { createContext, FC } from 'react'
import { GoSettings } from 'react-icons/go'
import TaskInput from '../TaskInput'
import TaskStatus from '../TaskStatus'

// 默认的TaskFormContext
const TaskFormCxt = createContext<TaskForm.TaskFormContext>({ updateZoomId: () => {} })

const TaskFormList: FC<TaskForm.ListProps> = ({ updateZoomId, children, ...prop }) => {
  return (
    <TaskFormCxt.Provider value={{ updateZoomId }}>
      <Box {...prop}>{children}</Box>
    </TaskFormCxt.Provider>
  )
}

// Form组件
const TaskForm: FC<TaskForm.Props> = ({ id = '', value, onChange, ...prop }) => {
  return (
    <Box
      borderRadius="18px"
      bg="#fff"
      p="24px 20px"
      position="relative"
      userSelect="none"
      height="auto"
      onClick={() => {}}
      {...prop}
    >
      <Flex direction={'row'} justify="space-between" alignItems={'center'} w="full">
        {/* 任务状态 - 颜色标记 */}
        <TaskStatus status={0} />
        {/* 任务名称 修改、disable... */}
        <TaskInput
          id={id}
          placeholder="请输入任务名称"
          value={value.title}
          onChange={(e) => onChange({ id: value.id, key: 'title', value: e.target.value })}
          mx="18px"
        />
        {/* 设置：任务状态、操作 */}
        <GoSettings size="32px" />
      </Flex>
    </Box>
  )
}

export default TaskForm
