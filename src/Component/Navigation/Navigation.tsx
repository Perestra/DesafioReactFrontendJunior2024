import styles from './Navigation.module.scss'

import { NavLink } from "react-router-dom"
import { useTaskContext } from '../../Hooks/useTaskContext'

export const Navigation: React.FC = () => {

  const {tasks, clearCompletedTasks} = useTaskContext()

  const activeStyle = {
    borderColor: '#ce4646'
  }

  const notCompletedLength = () => {
    const notCompleted = tasks.filter(task => !task.isDone)
    return notCompleted.length
  }

  return (
    <div className={styles.navigation}>
      <p className={styles.navigation__length}>{notCompletedLength()} item left!</p>
      <ul className={styles.navigation__links}>
        <NavLink
          to="/"
          style={({ isActive }) => isActive ? activeStyle : undefined}
          className={styles.navigation__link}>
          All
        </NavLink>
        <NavLink 
          to="/active" 
          style={({ isActive }) => isActive ? activeStyle : undefined}
          className={styles.navigation__link}>
          Active
        </NavLink>
        <NavLink 
          to="/completed" 
          style={({ isActive }) => isActive ? activeStyle : undefined}
          className={styles.navigation__link}>
          Completed
        </NavLink>
      </ul>
      <button 
        className={styles.navigation__clear} 
        value='Clear completed'
        onClick={() => clearCompletedTasks()}
        >Clear completed
      </button>
    </div>
  )
}