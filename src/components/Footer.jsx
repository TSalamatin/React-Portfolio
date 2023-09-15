import { Grid, IconButton, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Grid container justifyContent='space-around' >
            <Link
                href="https://github.com/TSalamatin"
                target="_blank"
                underline="none"
            >
                <IconButton>
                    <GitHubIcon />
                </IconButton>
            </Link>

            <Link
                href="https://www.linkedin.com/in/timothy-salamatin-07811426a/"
                target="_blank"
                underline="none"
            >
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
            </Link>
        </Grid>
    )
}
