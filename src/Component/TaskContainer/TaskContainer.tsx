import { ReactNode, useEffect } from "react"
import { useTaskContext } from "../../Hooks/useTaskContext"

type Props = {
    children: ReactNode;
  };

export const TaskContainer: React.FC<Props> = ({ children }) => {

    const { addTaskAPI } = useTaskContext()

    useEffect(() => {
        addTaskAPI()
      }, [addTaskAPI])

  return (
    <>
        {children}
    </>
  )
}