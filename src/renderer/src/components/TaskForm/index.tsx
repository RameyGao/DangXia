// 任务表单，包含任务名称、任务描述、任务状态、任务执行时间、任务设置
import { Box, Container, Flex } from '@chakra-ui/react'
import { createContext, FC, useContext, useMemo } from 'react'
import TaskInput from '../TaskInput'
import TaskStatePopover from '../TaskStatePopover'

// 默认的TaskFormContext
const TaskFormCxt = createContext<TaskForm.TaskFormContext>({ zoomId: '', updateZoomId: () => {} })

const TaskFormList: FC<TaskForm.ListProps> = ({ zoomId = '', updateZoomId, sx, children }) => {
  return (
    <TaskFormCxt.Provider value={{ zoomId, updateZoomId }}>
      <Box sx={sx}>{children}</Box>
    </TaskFormCxt.Provider>
  )
}

// 根据缩放的id，判断当前第几个缩放
function getZoom<T extends string>(fatherId: T, childId: T): TaskForm.Zoom | null {
  if (fatherId > '-1') {
    if (fatherId === childId) {
      return 'collapse'
    }
    return 'expand'
  }
  return null
}

// Form组件
const TaskForm: FC<TaskForm.Props> = ({ sx, zoom = 'expand', id = '', value, onChange }) => {
  // 展开 / 收起 expand / collapse
  const zoomCtx = useContext(TaskFormCxt)
  // id === zoomCtx.zoomId ? zoom = 'expand' : zoom = 'collapse';
  // 缩放的状态
  const zoomState = useMemo<TaskForm.Zoom>(
    () => getZoom(zoomCtx.zoomId, id) || zoom,
    [zoomCtx?.zoomId, id, zoom]
  )

  return (
    <Container
      //   borderRadius= '18px'
      //   bg= '#FFFFFF'
      //   p= '24px 60px 24px 20px'
      //   position= 'relative'
      //   userSelect= 'none'
      //   height= zoomState === 'expand' ? '70px' : 'auto'
      //   const Container = styled(Box)(({ theme }) => ({
      //     '&': {

      //     },
      //     '& .description': {
      //       display: zoomState === 'expand' ? 'none' : 'block'
      //     },
      //     '& .setting': {
      //       display: zoomState === 'expand' ? 'none' : 'block'
      //     }
      //   }))
      onClick={() => {
        zoomCtx?.updateZoomId(id)
      }}
      className="container"
    >
      <Flex align="center">
        {/* 状态设置 */}
        <TaskStatePopover id={''} />
        {/* 任务名称 修改、disable... */}
        {zoomState === 'expand' ? (
          <Box ml="18px" color="#000" fontWeight="medium" fontSize="24px" textAlign="left">
            {value.title || '未命名任务'}
          </Box>
        ) : (
          <TaskInput
            id={id}
            placeholder="请输入任务名称"
            value={value.title}
            key={id}
            onChange={(e) => onChange({ id: value.id, key: 'title', value: e.target.value })}
            sx={{ marginLeft: '18px' }}
          />
        )}
      </Flex>
      <TaskInput
        id={id}
        placeholder="可输入具体的任务描述"
        multiline
        maxRows={4}
        key={id + 'description'}
        // sx={{
        //   h: '163px',
        //   mt: '18px',
        //   borderRadius: '18px',
        //   bg: '#eee8e872',
        //   '& .MuiOutlinedInput-input': {
        //     height: '132px!important'
        //   }
        // }}
        value={value.description}
        onChange={(e) => onChange({ id: value.id, key: 'description', value: e.target.value })}
        className={'description'}
      />
      {/* <Settings
        sx={{
          position: 'absolute',
          right: '16px',
          bottom: '16px'
        }}
        className="setting"
      /> */}
    </Container>
  )
}

export default TaskForm
export { TaskFormList }
