import LMain from "../../layouts/LMain"
import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from '../../context/DarkModeContext';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes/theme'
import '../../index.css'

export default function ListProducts(props) {
  const [userIds, setUserIds] = useState(new Set()) // Utilizamos un Set para almacenar los IDs únicos
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        // Filtrar solo los usuarios y almacenar sus IDs en el Set
        // const usersData = data.filter(item => item.hasOwnProperty('userId'));
        const usersData = data.filter(({ userId }) => userId !== undefined);

        const uniqueUserIds = new Set(usersData.map(user => user.userId));
        setUserIds(uniqueUserIds);
      })
      .catch(error => console.error('Error fetching user IDs:', error));
  }, [])

  return (
    <LMain>
      <h1>Users list</h1>
      <div style={{display:'flex', gap:'15px', flexWrap: 'wrap', justifyContent:'center'}}>
        
        {[...userIds].map((userId, key) => (
            // {userId} {/* Mostrar el ID del usuario */}
          <ThemeProvider key={key} theme={darkMode ? darkTheme : lightTheme}>
          <Card className={'cardPersonalizada'} sx={{ width: '300px', marginTop: 2, height: '250px', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <div className='taskCardContent'>
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <p>User {userId}</p>
              </div>

              <Typography variant="h6" component="div">
                Ejemplo nombre de usuario
              </Typography>
              
            </CardContent>
          </Card>
        </ThemeProvider>
        ))}
      </div>
    </LMain>
  )
}
