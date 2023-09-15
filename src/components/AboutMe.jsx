import { Label } from "@mui/icons-material";
import { Grid, Box, Paper, Typography } from "@mui/material";



export default function AboutMe() {
  console.log('AboutMe Rendered')
  return (
    <Grid container justifyContent='center' alignItems="center" style={{marginTop: '5%', height: '100%'}}>
      
  
        <Grid item xs={8}>
          <Paper elevation={5} style={{padding: '5%'}}>
            <Typography variant="h1" style={{marginBottom: '20px'}}>
              About Me
              </Typography>

              <Typography variant="h4">
              Hello and welcome to my page! My name is Timothy Salamatin, I usually go by Tim, and I am a developer.
              I specialize in developing GUIS and programs for the industrial and manufacturing with PLCs and controllers.
              </Typography>

            <Typography variant="h4">
              My motto is "Simple and Intuitive."
              </Typography>
          </Paper>
   
     

      </Grid>
    </Grid>
  );
}