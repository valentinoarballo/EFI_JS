import { useContext, useEffect, useState } from "react"
import LMain from "../layouts/LMain"
import TaskCard from "../components/TaskCard"
import TaskList from "../components/TaskList"
import '../index.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


var age = 0

export default function Home() {

  const [pages, setPages] = useState('');

  const handlePageChange = (event) => {
    setPages(event.target.value);
  };

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(doc => doc.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, [])

  return (
    <LMain>
      <>
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
          <h1>Página Home</h1>
          <div>
            <FormControl style={{ minWidth: '200px' }} fullWidth>
              <InputLabel id="demo-simple-select-label">Pages</InputLabel>
              <Select
                style={{ color: 'blue' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pages}
                label="Pages"
                onChange={handlePageChange}
              >
                <MenuItem value={10}>10 pages</MenuItem>
                <MenuItem value={20}>25 pages</MenuItem>
                <MenuItem value={30}>35 pages</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly', minHeight: '40rem' }}>

          <TaskList tasks={tasks} />

        </div>
      </>
    </LMain>
  )
}