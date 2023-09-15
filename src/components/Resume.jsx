import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Resume() {
  console.log('Resume Rendered');



  return (
    <Grid container alignItems="center" spacing={2} style={{ marginTop: '5%' }}>
     
        <Grid container justifyContent='center'>
          <Paper elevation={5} style={{ padding: '16px', width: '70%' }}>
            <Typography variant="h2" gutterBottom>
              My Resume
            </Typography>
            <Typography variant="h3" gutterBottom>
              Skills
            </Typography>
            <ul>
              <Typography component="li" variant='h4'>
                HTML
              </Typography>
              <Typography component="li" variant='h4'>
                CSS
              </Typography>
              <Typography component="li" variant='h4'>
                JavaScript: including Express, Node, React
              </Typography>
              <Typography component="li" variant='h4'>
                SQL, and NoSQL
              </Typography>
              <Typography component="li" variant='h4'>
                Object relational mapping
              </Typography>
              <Typography component="li" variant='h4'>
                Communications
              </Typography>
            </ul>
            <a href='../Timothy-Salamatin.pdf' download='Timothy-Salamatin.pdf'>
            <Button variant="outlined" style={{ marginTop: '8px', height: 'fit-content' }}>
              Have a copy!
            </Button>
          </a>
          </Paper>

          





      
      </Grid>
    </Grid>
  );
}
