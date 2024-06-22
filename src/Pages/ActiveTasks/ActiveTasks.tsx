import styles from './ActiveTasks.module.scss'

import { Form } from "../../Component/Form/Form";
import { UnordenedList } from "../../Component/UnordenedList/UnordenedList";
import { List } from "../../Component/List/List";
import { Navigation } from "../../Component/Navigation/Navigation";
import { useTaskContext } from "../../Hooks/useTaskContext";

export const ActiveTasks: React.FC = () => {
 
  const { tasks, addTask, remTask, toggleStateTask, updateTask } = useTaskContext()
  
  const notCompletedTasks = tasks.filter(task => !task.isDone )

  return (
    <section className={ styles.section }>
      <header>
        <Form 
          type="text" 
          placeholder="Whats need to be done?"
          addTask= { addTask }
        />
      </header>
      <main className="main">
        <UnordenedList 
          list= {notCompletedTasks.map( task => 
            <List 
              key={task.id} 
              item={task.title} 
              done={task.isDone} 
              remTask={() => remTask(task.id)}
              toggleStateTask={() => toggleStateTask(task.id)}
              updateTask={(newTitle: string) => updateTask(task.id, newTitle)}
            />
          )}
        />
        { tasks.length >= 1 && <Navigation /> }
      </main>
    </section>
  )
}