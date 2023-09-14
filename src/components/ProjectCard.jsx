
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const style= {
  body: {
    margin: '20px',
    borderRadius: '30px',
  
  }
}


export default function ProjectCard(props) {
  return (
    <Paper elevation={4} style={style.body}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
       
          <CardMedia
            style={{ backgroundSize: 'contain' }}
            sx={{ height: 80 }}
            image={props.image}
          />
     

        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.link} target="_blank" rel="noopener noreferrer">Github</Button>
        <Button size="small" href={props.link} target="_blank" rel="noopener noreferrer">Deployment</Button>
      </CardActions>
    </Paper>
  )
}
