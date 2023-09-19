import ProjectCard from "./ProjectCard";
import { Grid , Paper } from "@mui/material";

const style = {
    body: {
        marginTop: '5%',
        // borderRadius: '25px'
    }
}


const publicProjects = [
    {
        name: 'Weather API',
        image: '/public/images/Weather.png',
        gitlink: 'https://github.com/TSalamatin/Weather-API',
        deplink: 'https://tsalamatin.github.io/Weather-API/',
    },
    {
        name: 'DayJS-Day-Scheduler',
        image: './public/images/DayJS.png',
        gitlink: 'https://github.com/TSalamatin/DayJS-Day-Scheduler',
        deplink: 'https://tsalamatin.github.io/DayJS-Day-Scheduler/'
    },
    {
        name: 'E-Commerce Mapping',
        image: './public/images/E-Commerce.png',
        gitlink: 'https://github.com/TSalamatin/E-Commerce-Mapping',
        
    },
    {
        name: 'Nutrition Tracker',
        image: './public/images/Logo.png',
        gitlink: 'https://github.com/TSalamatin/Nutrition-Tracker',
        deplink: 'https://tsalamatin.github.io/Nutrition-Tracker/'
        
    },
    {
        name: 'Basic Programming Quiz',
        image: './public/images/Quiz.png',
        gitlink: 'https://github.com/TSalamatin/Tims-Programming-Quiz',
        deplink: 'https://tsalamatin.github.io/Tims-Programming-Quiz/'

    },
    {
        name: 'Password-Generator',
        image: './public/images/Password.png',
        gitlink: 'https://github.com/TSalamatin/Password-Generator',
        deplink: 'https://tsalamatin.github.io/Password-Generator/',
    },
]

//Comment out for sorting later
    // const publicProjects = props.projects.filter((d) => !d.private)
    // console.log(publicProjects)

export default function Portfolio() {
    
    console.log('Portfolio Rendered')
    return (
        <Grid container style={style.body}>
            {publicProjects.map((d, index) => (

                <Grid item xs={12} sm={6} key={index}>
                    <ProjectCard
                        name={d.name}
                        desc={d.desc}
                        image={d.image}
                        link={d.gitlink}

                        index={index}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

