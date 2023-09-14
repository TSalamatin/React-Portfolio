import { Grid, IconButton, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 
const style = {
    container:{

        display: 'flex',
        position:"absolute",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: "10px",
        bottom:"0px"
    },
    icons: {
        fontSize: 'large'
    }
}

export default function Footer(){

    return (           
    <Grid container style={style.container}>
       
       <Link
       style={style.icons} 
       to="https://github.com/TSalamatin" 
       underline="hover"
       >
          <GitHubIcon />
        </Link>
       
        <Link 
        style={style.icons} 
        href=" https://www.linkedin.com/in/timothy-salamatin-07811426a/" 
        underline="hover"
        >
          <LinkedInIcon />
        </Link>
      
    </Grid>
    )
}