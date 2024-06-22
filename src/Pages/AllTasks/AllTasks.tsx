import styles from './AllTasks.module.scss'

import { Form } from "../../Component/Form/Form";
import { UnordenedList } from "../../Component/UnordenedList/UnordenedList";
import { List } from "../../Component/List/List";
import { Navigation } from "../../Component/Navigation/Navigation";
import { useTaskContext } from "../../Hooks/useTaskContext";

export const AllTasks: React.FC = () => {
 
  const { tasks, isLoading, addTask, remTask, toggleStateTask, updateTask } = useTaskContext()

  return (
    <section className={ styles.section }>
      <header>
        <Form 
          type="text" 
          placeholder="Whats need to be done?"
          addTask= { addTask }
        />
      </header>
      <main className={ styles.main }>
        {!isLoading &&
          <UnordenedList 
            list= { 
              tasks?.map(task => 
                <List 
                key={task.id} 
                item={task.title} 
                done={task.isDone} 
                remTask={() => remTask(task.id)}
                toggleStateTask={() => toggleStateTask(task.id)}
                updateTask={(newTitle: string) => updateTask(task.id, newTitle)}
              />
              ) 
            }
          />
        }
        { tasks.length >= 1 && <Navigation /> }
      </main>
    </section>
  )
}