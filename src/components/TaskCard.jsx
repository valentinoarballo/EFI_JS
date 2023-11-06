import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function TaskCard({data}) {
  const {title, id, completed} = data
  return (
    <Card sx={{ minWidth: 200, maxWidth: 250, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {'desc' + id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{completed ? 'complete' : 'incomplete'}</Button>
      </CardActions>
    </Card>
  );
}