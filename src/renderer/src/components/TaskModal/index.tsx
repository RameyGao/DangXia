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
import { findAndUpdateTodayTask } from '@renderer/store/features/taskSlice'
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskModalType } from './type'

// 输入框组件
const TaskModal: FC<TaskModalType.Props> = ({ id, children, ...props }) => {
  const dispatch = useDispatch()
  const todayList = useSelector((state: any) => state.task.todayList)

  const { isOpen, onOpen, onClose } = useDisclosure()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [task, setTask] = useState<TaskModalType.TaskInfo>({
    title: '',
    tag: 'STUDY',
    priority: 'none'
  })
  const onSave = (): void => {
    // 存储数据
    dispatch(findAndUpdateTodayTask(task))
    // 关闭弹窗
    console.log('todayList', todayList)
    onClose()
    // 动画展示新增元素
  }

  // 更新task
  const handleChangeValue = (type: string, value: string): void => {
    setTask({ ...task, [type]: value })
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
              {/* <FormHelperText>这件事我今天可以做完..</FormHelperText> */}
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
                  <Radio value="none">无</Radio>
                  <Radio value="low">低</Radio>
                  <Radio value="middle">中</Radio>
                  <Radio value="high">高</Radio>
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
