import React, { createContext, useState, ReactNode } from 'react';
import { TaskItem } from '../Types/TaskItem';

type TaskContextType = {
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
