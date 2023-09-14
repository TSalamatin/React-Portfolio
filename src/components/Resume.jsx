import { Button, Grid, Paper } from "@mui/material"

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
  
    },
    button: {
        justifyContent: 'flex-end',
        width: 'fit-content'
    }
  }

export default function Resume() {

    return (
        <Grid container style={style.container}>

            <Paper elevation={3} style={style.content}>
                
                <h1 style={style.header} className="header">My Resume</h1>

                <h2 className="body"> Skills </h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Javascript: including Express, Node, React
                    </li>
                    <li>
                        SQL, and NoSQL
                    </li>
                    <li>
                    Object–relational mapping
                    </li>
                </ul>
                <Button style={style.button}>
                    Download 
                </Button>
            </Paper>
        </Grid>
    )
}