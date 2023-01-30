// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Box, Container, Flex } from '@chakra-ui/react'
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
    <Container
      borderRadius="18px"
      bg="#fff"
      px="60px"
      py="24px"
      // p="24px 60px 24px 20px"
      position="relative"
      userSelect="none"
      height="auto"
      onClick={() => {}}
      className="container"
      {...prop}
    >
      <Flex direction={'row'} justify="space-between" align={'center'}>
        {/* 任务状态 - 颜色标记 */}
        <TaskStatus status={0} />
        {/* 任务名称 修改、disable... */}
        <TaskInput
          id={id}
          placeholder="请输入任务名称"
          value={value.title}
          key={id}
          onChange={(e) => onChange({ id: value.id, key: 'title', value: e.target.value })}
          ml="18px"
        />
        {/* 设置：任务状态、操作 */}
        <Box position="absolute" right="16px" bottom="16px">
          <GoSettings size="20px" />
        </Box>
      </Flex>
    </Container>
  )
}

export default TaskForm
export { TaskFormList }
