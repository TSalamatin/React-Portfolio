import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Resume() {
  console.log('Resume Rendered');

  return (
    <Grid container alignItems="center" spacing={2} style={{marginTop: '5%'}}>
      <Grid item xs={12} sm={6}>
        <Grid container justifyContent="flex-end">
          <Paper elevation={5} style={{ padding: '16px', marginRight: '8px', width: '60%' }}>
            <Typography variant="h2" gutterBottom>
              My Resume
            </Typography>
            <Typography variant="h3" gutterBottom>
              Skills
            </Typography>
            <ul>
              <Typography component="li">
                HTML
              </Typography>
              <Typography component="li">
                CSS
              </Typography>
              <Typography component="li">
                JavaScript: including Express, Node, React
              </Typography>
              <Typography component="li">
                SQL, and NoSQL
              </Typography>
              <Typography component="li">
                Object relational mapping
              </Typography>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container justifyContent='flex-start'>
          <Button variant="outlined" style={{ marginTop: '8px'}}>
            Have a copy!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
