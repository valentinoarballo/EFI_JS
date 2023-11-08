import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { DarkModeContext } from '../context/DarkModeContext';
import IconButton from '@mui/material/IconButton';
import { lightTheme, darkTheme } from '../themes/theme'
import { ThemeProvider } from '@mui/material/styles';
import '../index.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >

  </Box>
);
function check(completed) {
  if (completed) {
    return (
      <svg width="16" height="16" fill="green" class="bi bi-check-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
      </svg>
    )
  } else {
    return (
      <svg width="16" height="16" fill="red" class="bi bi-x-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
      </svg>
    )
  }
}
export default function TaskCard({ data }) {
  const { title, id, completed, userId } = data
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Card className={'cardPersonalizada'} sx={{ width: '300px', marginTop: 2, height: '250px', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <p>User {userId}</p>
          </div>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{`Task id: ${id}`}</Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', marginTop: 'auto', marginLeft: 'auto' }}>
          {check(completed)}
          <Button size="small">{completed ? 'complete' : 'incomplete'}</Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}