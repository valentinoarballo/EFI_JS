import { useContext, useEffect, useState } from "react"
import LMain from "../layouts/LMain"
import TaskCard from "../components/TaskCard"
import TaskList from "../components/TaskList"
import '../index.css'


export default function Home() {


  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(doc => doc.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, [])

  console.log(tasks)
  
  return (
    <LMain>
      <>
        <h1>Página Home</h1>
        <div style={{display:'flex', gap:'30px', flexWrap:'wrap', justifyContent: 'space-evenly'}}>

          <TaskList tasks={tasks} />

        </div>
      </>
    </LMain>
  )
}