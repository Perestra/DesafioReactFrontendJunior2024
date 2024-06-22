import styles from './List.module.scss'
import { IoMdClose } from "react-icons/io";
import { FaRegCircleCheck, FaRegCircle } from "react-icons/fa6";
import { ChangeEvent, MouseEvent, useState } from 'react';

type Props = {
  item: string;
  done: boolean;
  remTask: (event: MouseEvent) => void;
  toggleStateTask: (event: MouseEvent) => void;
  updateTask: (newTitle: string) => void;
}

export const List: React.FC<Props> = ({  item, done, remTask, toggleStateTask, updateTask }) => {

  const [editable, setEditable] = useState(false)
  const [newTitle, setNewTitle] = useState(item)

  const handleBlur = () => {
    setEditable(false)
    updateTask(newTitle)
  };

  return (
    <li className={ styles.list }>
      <div id="todo-item" className={ styles.list__itens }>
        <div className={ styles.list__checkbox }>
          { done? 
            <FaRegCircleCheck className={ styles.list__checkedbox } onClick={toggleStateTask} />: 
            <FaRegCircle className={ styles.list__uncheckedbox } onClick={toggleStateTask}/>
          }  
        </div>
        { editable? 
          <input 
            className={done ? `${styles.labelChecked}` : `${styles.list__label}`}
            value={newTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />:
          <label 
            className={done ? `${styles.labelChecked}` : `${styles.list__label}`}
            onDoubleClick={() => setEditable(true)}
          >
            {item}
          </label>
        }
      </div>
      <IoMdClose className={ styles.list__del } onClick={remTask} />
    </li>
  ) 
}
