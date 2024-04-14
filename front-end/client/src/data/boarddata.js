// boarddata.js
import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/task.jpg";
import taskImage2 from "../assets/task2.jpg";
import taskImage3 from "../assets/task3.jpg";
import { getRandomColors } from "../helpers/getRandomColors";

export const BoardData = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        image: taskImage2,
        alt: "task image",
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
    ],
  },
  pending: {
    name: "Pending",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        image: taskImage,
        alt: "task image",
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
    ],
  },
  todo: {
    name: "To Do",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        image: taskImage3,
        alt: "task image",
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
    ],
  },
  doing: {
    name: "Doing",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
    ],
  },
  done: {
    name: "Done",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        image: taskImage,
        alt: "task image",
        tags: [
          { title: "Test", color: getRandomColors() },
          { title: "Front", color: getRandomColors() },
        ],
      },
    ],
  },
};
