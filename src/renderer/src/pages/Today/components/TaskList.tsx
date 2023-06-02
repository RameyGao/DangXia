import CSS from 'csstype'
import type {
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
  DroppableStateSnapshot
} from 'react-beautiful-dnd'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TaskItem from './TaskItem'
export const getBackgroundColor = (isDraggingOver: boolean, isDraggingFrom: boolean): string => {
  if (isDraggingOver) {
    return 'bg-red-400'
  }
  if (isDraggingFrom) {
    return 'bg-red-600'
  }
  return 'bg-red-300'
}

const grid = 8

const getItemStyle = (isDragging: boolean, draggableStyle: CSS.Properties): CSS.Properties => {
  return {
    userSelect: 'none',
    padding: `${grid * 2}px`,
    margin: `0 0 0 0`,
    background: isDragging ? 'green' : 'transparent',
    ...draggableStyle
  }
}

const getListStyle = (isDraggingOver: boolean): CSS.Properties & { rounded: string } => {
  return {
    background: isDraggingOver ? 'lightyellow' : 'transparent',
    rounded: 'md'
  }
}

export default function TaskList({
  taskList,
  listId = 'none',
  listType,
  isDropDisabled,
  ignoreContainerClipping,
  isCombineEnabled
}: DnDTaskList.Props): JSX.Element {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
    >
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot): JSX.Element => {
        return (
          <div
            className={`${getBackgroundColor(
              dropSnapshot.isDraggingOver,
              !!dropSnapshot.isDraggingFrom
            )} ${isDropDisabled ? 'opacity-50' : 'opacity-100'}`}
            {...dropProvided.droppableProps}
            style={getListStyle(dropSnapshot.isDraggingOver)}
          >
            <div ref={dropProvided.innerRef}>
              {taskList?.map((task: Task.TaskItem, index: number) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(
                    dragProvided: DraggableProvided,
                    dragSnapshot: DraggableStateSnapshot
                  ): JSX.Element => {
                    return (
                      //   <div
                      //     style={getItemStyle(
                      //       dragSnapshot.isDragging,
                      //       dragProvided.draggableProps.style
                      //     )}
                      //   >

                      <TaskItem
                        key={task.id}
                        task={task}
                        isDragging={dragSnapshot.isDragging}
                        provided={dragProvided}
                        index={index}
                      />
                      //   </div>
                    )
                  }}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </div>
          </div>
        )
      }}
    </Droppable>
  )
}
