import { useState, useEffect } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';

function App() {


  const [tasksItems, setTaskItems] = useState([])

  const [showCompleted, setShowCompleted] = useState(false)

  // Crear nueva Task
  const createNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTaskItems([...tasksItems, {name: taskName, done: false}])
    }  
  }

  // traemos la data del localstorage y la parseamos
  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTaskItems(JSON.parse(data))
    }

  }, [])

  // Seteamos el local storage
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasksItems))
  }, [ tasksItems ])


  const cleanTasks = () => {
    setTaskItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  // cambio de valor del done
  const toggleTask = task => {
    setTaskItems( // cambiamos todas las task con los nuevos valores
      tasksItems.map(t => (t.name === task.name) ? {...t, done: !t.done} : t)
    )
  }

  return (
    <main className="bg-dark vh-100 text-white">
        <div className="container col-md-4 offset-md-4 p-4">
          <TaskCreator createNewTask={createNewTask} />
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

          <VisibilityControl 
            isChecked={showCompleted}
            setShowCompleted={ (checked) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
            />
            
          {
            showCompleted && (
              <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
            )
          }
      </div>
    </main>
  );
}

export default App;
