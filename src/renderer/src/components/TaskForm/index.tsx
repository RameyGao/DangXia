// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { TbSettings } from 'react-icons/tb'
import TaskInput from '../TaskInput'
import TaskModal from '../TaskModal'
import TaskStatus from '../TaskStatus'

// 默认的TaskFormContext
// const TaskFormCxt = createContext<TaskForm.TaskFormContext>({ updateZoomId: () => {} })

// const TaskFormList: FC<TaskForm.ListProps> = ({ updateZoomId, children, ...prop }) => {
//   return (
//     <TaskFormCxt.Provider value={{ updateZoomId }}>
//       <Box {...prop}>{children}</Box>
//     </TaskFormCxt.Provider>
//   )
// }

// Form组件
const TaskForm: FC<TaskForm.Props> = ({ id, title, tag, priority, status, onChange, ...prop }) => {
  return (
    <Flex
      direction={'row'}
      justify="space-between"
      alignItems={'center'}
      w="full"
      bg="#fff"
      p="24px 20px"
      h="auto"
      pos="relative"
      // userSelect="none"
      {...prop}
    >
      {/* 任务状态 - 颜色标记 */}
      <TaskStatus status={status} />
      {/* 任务名称 修改、disable... */}
      <TaskInput
        id={id}
        variant="outline"
        placeholder="请输入任务名称"
        value={title}
        onChange={(nextValue): void => onChange({ id, key: 'title', value: nextValue })}
        isDisabled={false} // 如果是昨天的内容不可修改内容
        sx={{
          mx: '18px',
          w: 'full',
          h: '48px',
          bg: '#eee8e872',
          rounded: 'md',
          fontSize: '18px',
          textAlign: 'left',
          fontWeight: 'normal',
          color: '#000000'
        }}
      />
      {/* 设置：任务状态、操作 */}
      <TaskModal id={id} title={title} tag={tag} priority={priority}>
        <TbSettings size="24px" cursor="pointer" />
      </TaskModal>
    </Flex>
  )
}

export default TaskForm
