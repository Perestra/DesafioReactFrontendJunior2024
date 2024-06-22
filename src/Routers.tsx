import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllTasks } from './Pages/AllTasks/AllTasks'
import { ActiveTasks } from './Pages/ActiveTasks/ActiveTasks'
import { CompletedTasks } from './Pages/CompletedTasks/CompletedTasks'

import { Title } from './Component/Title/Title'
import { Footer } from './Component/Footer/Footer'
import { TaskProvider } from './Contexts/TaskContext'
import { TaskContainer } from './Component/TaskContainer/TaskContainer'

export const Routers = () => {
  return (
    <BrowserRouter>
      <TaskProvider>
        <TaskContainer>
          <Title title="todos"/>
            <Routes>
                <Route index element={ <AllTasks /> } />
                <Route path='active' element={ <ActiveTasks /> } />
                <Route path='completed' element={ <CompletedTasks /> } />
            </Routes>
            <Footer/>  
        </TaskContainer>
      </TaskProvider>
    </BrowserRouter>
  )
}