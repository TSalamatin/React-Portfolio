import React from 'react';
import { Link, Grid } from '@mui/material';

function Header() {
  const style = {
    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '10px'
    },
   Link: {
    fontSize: '200%'
    
   }
  };

  return (
    <Grid style={style.nav}>
      
        <Link href="/" underline="hover" style={style.Link}>
          About Me
        </Link>
       
        <Link href="/portfolio" underline="hover" style={style.Link}>
          Portfolio
        </Link>
       <Link href="/contactme" underline="hover" style={style.Link}>
          Contact Me
        </Link>
        <Link href="/resume" underline="hover" style={style.Link}>
          Resume
        </Link>
    </Grid>
  );
}

export default Header;
