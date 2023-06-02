import TaskForm from '@renderer/components/TaskForm'
import { memo } from 'react'
import { useDispatch } from 'react-redux'

// 拖拽变更背景色
const getBackgroundColor = (isDragging: boolean, isGroupedOver: boolean): string => {
  if (isDragging) {
    return 'bg-blue-500'
  }
  if (isGroupedOver) {
    return 'bg-blue-300'
  }
  return 'bg-blue-100'
}

function TaskItem({ task, isDragging, provided, index }: DnDTaskList.TaskItemProps): JSX.Element {
  const dispatch = useDispatch()

  return (
    <div
      className={`px-4 rounded-lg my-3 shadow-md border border-light-blue-500 border-opacity-25`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={provided.draggableProps.style}
      data-is-dragging={isDragging}
      data-testid={task.id}
      data-index={index}
      aria-label={`${task.title} task ${task.priority}`}
    >
      <TaskForm {...task} />
    </div>
  )
}

export default memo<DnDTaskList.TaskItemProps>(TaskItem)
