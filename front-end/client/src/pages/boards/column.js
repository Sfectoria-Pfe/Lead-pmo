import React from "react";
import styled from "styled-components";
import Card from "../../pages/boards/card"; // Import correct de Card
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  background-color: ${(props) => props.backgroundColor}; // Utilisation du thème pour la couleur de fond
  border-radius: 2.5px;
  width: 300px; // Modification de la largeur
  height: px; // Modification de la hauteur
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: ;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: ${(props) => props.backgroundColor}; // Utilisation du thème pour la couleur de fond
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id, backgroundColor }) {
  return (
    <Container className="column" backgroundColor={backgroundColor}>
      <Title
        style={{
          backgroundColor: "lightblue",
          position: "sticky",
          top: "0",
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            backgroundColor={backgroundColor} // Utilisation du thème pour la couleur de fond
          >
            {tasks.map((task, index) => (
              <Card key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
