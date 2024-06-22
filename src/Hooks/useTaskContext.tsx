import { useContext, useEffect, useRef } from 'react';
import { TaskContext } from '../Contexts/TaskContext';
import { TaskItem } from '../Types/TaskItem';
import { useGetEnkiGroupData } from './useGetEnkiGroupData';


export const useTaskContext = () => {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('useTaskContext precisa estar no TaskProvider')
  }

  const { tasks, setTasks } = context

  const { data, isLoading }  = useGetEnkiGroupData('/DesafioReactFrontendJunior2024/todos')

  const loadData = useRef(true)

  const addTask = (task: string | TaskItem) => {
    if(typeof task === 'string') {
      task = {
        id: `${tasks.length + 1}`,
        title: task,
        isDone: false,
      };
    } 
    setTasks((previousTasks: TaskItem[]) => [task as TaskItem, ...previousTasks])
  };

  const addTaskAPI = () => {
    if (loadData.current && data?.length) {
      data.forEach((identifier: TaskItem) => {
        const isInList = tasks.find((task: TaskItem) => task.id === identifier.id)
        if (!isInList) {
          addTask(identifier)
        }
      })
      loadData.current = false
    }
  }

  const remTask = (id: string) => {
    setTasks(tasks.filter( task => id !== task.id )) 
  }

  const updateTask = (id: string, newTitle: string) => {
    setTasks(tasks.map( task => task.id === id? { ...task, title: newTitle }: task ))
  }

  const toggleStateTask = (id: string) => {
    setTasks(tasks.map( task => task.id === id? { ...task, isDone: !task.isDone }: task ))
  }

  const setAllTasksCompleted = () => {
    setTasks(tasks.map( task => !task.isDone? { ...task, isDone: !task.isDone }: task))
  }

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.isDone ))
  }

  return { tasks, setTasks, addTask, addTaskAPI, remTask, toggleStateTask, updateTask, setAllTasksCompleted, clearCompletedTasks, isLoading };
};
