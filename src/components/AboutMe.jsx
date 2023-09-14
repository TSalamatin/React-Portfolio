import { Label } from "@mui/icons-material";
import { Grid, Box, Paper } from "@mui/material";

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
    marginLeft: '10%',
  },
  content: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    padding: '2%',
    fontFamily: 'Trebuchet MS'
  },
  header:{
    fontSize: '200%',
    fontFamily: 'Georgia',
    marginBottom: '20px'

  }
}

export default function AboutMe() {
  return (
    <Grid container style={style.container}>

      <Paper  elevation={3} style={style.content}>
        <div style={style.header}>About Me </div>
        <div>
          Hello and welcome to my page! My name is Timothy Salamatin, I usually go by Tim, and I am a developer. 
         I specialize in developing GUIS and programs for the industrial and manufacturing with PLCs and controllers. 
        </div>
        <div>
          My motto is "Simple and Intuitive."
        </div>
      </Paper>
    </Grid>
  );
}