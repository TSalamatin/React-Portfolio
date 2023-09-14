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
        image: '/src/images/Weather.png',
        gitlink: 'https://github.com/TSalamatin/Weather-API',
        deplink: 'https://tsalamatin.github.io/Weather-API/',
    },
    {
        name: 'DayJS-Day-Scheduler',
        image: '/src/images/DayJS.png',
        gitlink: 'https://github.com/TSalamatin/DayJS-Day-Scheduler',
        deplink: 'https://tsalamatin.github.io/DayJS-Day-Scheduler/'
    },
    {
        name: 'E-Commerce Mapping',
        image: '/src/images/E-Commerce.png',
        gitlink: 'https://github.com/TSalamatin/E-Commerce-Mapping',
        
    },
    {
        name: 'Nutrition Tracker',
        image: 'Nutrition',
        gitlink: 'https://github.com/TSalamatin/Nutrition-Tracker'
        
    },
    {
        name: 'SQL-Employee-Tracker',
        image: '/src/images/SQL.png',
        gitlink: 'https://github.com/TSalamatin/SQL-Employee-Tracker'
    },
    {
        name: 'Password-Generator',
        image: '/src/images/Password.png',
        gitlink: 'https://github.com/TSalamatin/Password-Generator'
    },
]


export default function Portfolio() {
    //Comment out for sorting later
    // const publicProjects = props.projects.filter((d) => !d.private)
    // console.log(publicProjects)

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

