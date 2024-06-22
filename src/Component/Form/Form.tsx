import { FormEvent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import style from './Form.module.scss'
import { useTaskContext } from "../../Hooks/useTaskContext";

type Props = {
    type: string,
    placeholder: string
    addTask: (event: string) => void
}

export const Form: React.FC<Props> = ({ type, placeholder, addTask }) => {

    const { tasks, setAllTasksCompleted } = useTaskContext()

    const [task, setTask] = useState('')

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        if(task.trim() === '') return
        addTask(task)
        setTask('')
    }

    const findNotDone = () => {
       const existisNotDone = tasks.some(item => !item.isDone )
       return existisNotDone
    }

  return (
    <div className={style.todo}>
        { tasks.length >= 1 && 
            <div className={style.todo__iconDiv}>
                <IoIosArrowDown 
                    className={`${style.todo__icon} ${!findNotDone() ? style.allCompleted : ""}`} 
                    onClick={() => setAllTasksCompleted()}
                />    
            </div>
               
            }
        <form onSubmit={onSubmit} className={style.todo__form}>
            <input 
                className={style.todo__input}
                type={type}
                value={task}
                placeholder={placeholder}
                onChange={event => setTask(event.target.value)}
            />  
        </form>
    </div>
  )
}