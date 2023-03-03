declare namespace DnDTaskList {
  import type { Provided, StateSnapshot, DraggableProvided } from 'react-beautiful-dnd'

  type Props = {
    taskList: Task.TaskItem[]
    listId: Task.TaskPriority
    listType: Task.TaskPriority
    isDropDisabled?: boolean
    ignoreContainerClipping?: boolean
    isCombineEnabled?: boolean
  }
  type InnerListProps = {
    taskList: Task.TaskItem[]
    dropProvided: Provided
    snapshot: StateSnapshot
    provided: DraggableProvided
  }
  type TaskListProps = {
    taskList: Task.TaskItem[]
    snapshot: StateSnapshot
    provided: DraggableProvided
  }
  type TaskItemProps = {
    task: Task.TaskItem
    isDragging: boolean
    provided: DraggableProvided
    index?: number
  }
}
