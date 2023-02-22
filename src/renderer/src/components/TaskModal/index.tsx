import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  useDisclosure
} from '@chakra-ui/react'
import { PRIORITY } from '@renderer/store/enum'
import { findAndUpdateTodayTask } from '@renderer/store/features/taskSlice'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// 默认task
const DefaultTask: TaskModalType.TaskInfo = { title: '', tag: 'STUDY', priority: 'none' }

// 优先级列表
const priorityList: Array<[string, string]> = Object.entries(PRIORITY)

// 输入框组件
const TaskModal: FC<TaskModalType.Props> = ({ children, ...props }) => {
  const [task, setTask] = useState<TaskModalType.TaskInfo>(DefaultTask)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const todayList = useSelector<Task.IRootState, Task.TaskItem[]>((state) => state.task.todayList)

  useEffect(() => {
    setTask(
      isOpen
        ? {
            ...DefaultTask,
            ...props
          }
        : DefaultTask
    )
  }, [isOpen])

  // 更新task的单个条目
  const handleChangeValue = (type: string, value: string): void => {
    setTask({ ...task, [type]: value })
  }

  // 保存或更新task
  const onSave = (): void => {
    console.log('task', task)
    // 存储task
    dispatch(findAndUpdateTodayTask(task))
    // 关闭弹窗
    console.log('todayList', todayList)
    onClose()
    // 动画展示新增元素
  }

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>需要做点啥...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4} isRequired>
              <FormLabel>具体事项</FormLabel>
              <Input
                type="text"
                placeholder="我想想.."
                value={task.title}
                onChange={(e): void => handleChangeValue('title', e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>标签</FormLabel>
              <Select
                variant="filled"
                w={200}
                value={task.tag}
                onChange={(e): void => handleChangeValue('tag', e.target.value)}
              >
                <option value="STUDY">自我提升</option>
                <option value="JOB">工作职能</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>优先级</FormLabel>
              <RadioGroup
                value={task.priority}
                onChange={(value: string): void => handleChangeValue('priority', value)}
              >
                <HStack spacing="24px">
                  {priorityList.map(
                    // FIXME: string应该用Priority来表示
                    ([value, label]: [string, string]): ReactNode => (
                      <Radio value={value} key={label}>
                        {label}
                      </Radio>
                    )
                  )}
                </HStack>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
              取消
            </Button>
            <Button colorScheme="teal" onClick={onSave}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskModal
