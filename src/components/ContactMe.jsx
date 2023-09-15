import { Label } from "@mui/icons-material"
import { FormControl, InputLabel, Input, Paper, TextField, Box, Button } from "@mui/material"

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        margin: '3%'
    },
    header:{
        fontFamily: 'Georgia',
        padding: '10px',
        fontSize: '200%'
    },

    fields: {
        margin: '20px'
    },
    button: {
        
    }
}

export default function ContactMe() {
    console.log('Contacts Rendered')
    return (
        <div>
            <Paper container style={style.container}>

                <Box style={style.header}> Contact Me</Box>

                <FormControl style={style.fields}>
                    <InputLabel htmlFor="component-helper">Name:</InputLabel>
                    <Input
                        id="name-input"

                        aria-describedby="component-helper-text"
                    />
                </FormControl>

                <FormControl style={style.fields}>
                    <InputLabel htmlFor="component-helper">Email:</InputLabel>
                    <Input
                        id="email-input"
                        aria-describedby="component-helper-text"
                    />
                </FormControl>


                <FormControl style={style.fields}>
                    <InputLabel htmlFor="component-helper">Message:</InputLabel>
                    <TextField
                        id="message=input"
                        rows={4}
                        multiline
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
                <Button>
                    Submit
                </Button>
            </Paper>
        </div>
    )
}