import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../../pages/boards/column';
import Header from '../../components/header';
import { tokens } from '../../theme';
import { Box, useTheme } from "@mui/material";
import { BoardData } from "../../data/boarddata";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  

  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export default function Board() {
  const { backlog, pending, todo, doing, done } = BoardData;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [columns, setColumns] = useState({
    backlog,
    pending,
    todo,
    doing,
    done
  });

  const handleDragEnd = (result) => {
    onDragEnd(result, columns, setColumns);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Box m="20px">
        <Header title="Progress Board" subtitle="Your project's progress" />
        </Box>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: '' }}>
  <Column
    title={backlog.name}
    tasks={columns.backlog.items}
    id={'backlog'}
    backgroundColor={colors.primary[400]}
    columnWidth="20%"
    columnHeight="20%" // Ajustez la largeur ici
  />
  <Column
    title={pending.name}
    tasks={columns.pending.items}
    id={'pending'}
    backgroundColor={colors.primary[400]}
    columnWidth="20%" // Ajustez la largeur ici
  />
  <Column
    title={todo.name}
    tasks={columns.todo.items}
    id={'todo'}
    backgroundColor={colors.primary[400]}
    columnWidth="20%" // Ajustez la largeur ici
  />
  <Column
    title={doing.name}
    tasks={columns.doing.items}
    id={'doing'}
    backgroundColor={colors.primary[400]}
    columnWidth="20%" // Ajustez la largeur ici
  />
  <Column
    title={done.name}
    tasks={columns.done.items}
    id={'done'}
    backgroundColor={colors.primary[400]}
    columnWidth="20%" // Ajustez la largeur ici
  />
</div>


      </div>
    </DragDropContext>
  );
}
