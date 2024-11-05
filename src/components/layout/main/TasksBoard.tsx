import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Cols from "../../features/Tasks/Cols";
import {
  resetHomeIndex,
  setHomeIndex,
} from "../../../store/slices/homeIndexSlice";
import { moveCard } from "../../../store/slices/currentBlockSlice";

const Board = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function TasksBoard() {
  const data = useAppSelector((state) => state.currentBlock.currentBlock);
  const homeIndex = useAppSelector((state) => state.homeIndex.homeIndex);
  const dispatch = useAppDispatch();

  if (!data) return null;

  const onDragStart = (start: DragStart) => {
    const newHomeIndex = data.columnOrder.indexOf(start.source.droppableId);

    dispatch(setHomeIndex(newHomeIndex));
  };

  const onDragEnd = (result: DropResult) => {
    dispatch(resetHomeIndex());

    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    if (start === finish) {
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      dispatch(moveCard(newState));
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    dispatch(moveCard(newState));
  };

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Board>
        {data.columnOrder.map((columnId, index) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          let isDropDisabled = false;
          if (homeIndex !== null) {
            isDropDisabled = index > homeIndex + 1 || index < homeIndex;
          }

          return (
            <Cols
              key={column.id}
              column={column}
              tasks={tasks}
              isDropDisabled={isDropDisabled}
            />
          );
        })}
      </Board>
      <svg>
        <clipPath id="card-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.009,1 V0.01 C0.452,0.087,0.53,0.952,1,1 H0.009"></path>
        </clipPath>
      </svg>
    </DragDropContext>
  );
}

export default TasksBoard;
