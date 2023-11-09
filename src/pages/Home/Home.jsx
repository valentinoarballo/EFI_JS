import { useContext, useEffect, useState } from "react"
import LMain from "../../layouts/LMain"
import TaskContainer from "../../components/TaskContainer"
import '../../index.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes/theme'
import { DarkModeContext } from '../../context/DarkModeContext';
import "./Home.css"

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);

  const [pages, setPages] = useState('12');
  const [completeParameter, setCompleteParameter] = useState(2);
  const [tasks, setTasks] = useState([])

  const handleCompleteParameterChange = (event) => {
    setCompleteParameter(event.target.value);
  };

  const handlePageChange = (event) => {
    setPages(event.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(doc => doc.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LMain>

        <div className="homeMain">
          <FormControl className="homePageFilter" fullWidth>
            <InputLabel id="demo-simple-select-label">Pages</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pages}
              label="Pages"
              onChange={handlePageChange}
            >
              <MenuItem value={8}>8 pages</MenuItem>
              <MenuItem value={10}>10 pages</MenuItem>
              <MenuItem value={12}>12 pages</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="homePageFilter" fullWidth>
            <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={completeParameter}
              label="Filter by"
              onChange={handleCompleteParameterChange}
            >
              <MenuItem value={2}>sin filtro</MenuItem>
              <MenuItem value={1}>complete</MenuItem>
              <MenuItem value={0}>incomplete</MenuItem>
            </Select>
          </FormControl>

        </div>
        <div className="homeTaskContainer">

          <TaskContainer tasks={tasks} pages={pages} completeParameter={completeParameter} />

        </div>

      </LMain>
    </ThemeProvider>
  )
}