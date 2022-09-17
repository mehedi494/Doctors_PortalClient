import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import fluoride from "../../../assets/images/fluoride.png"
import cavite from "../../../assets/images/cavity.png"
import Whitening from "../../../assets/images/whitening.png"
import Service from './../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: "Fluoride Treatment ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus quia neque dolores dolorum. Repellat magnam vero quo pariatur reprehenderit?",
        img: fluoride
    },
    {
        name: "Cavite Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus quia neque dolores dolorum. Repellat magnam vero quo pariatur reprehenderit?",
        img: cavite
    },
    {
        name: "Teeth Whitening ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus quia neque dolores dolorum. Repellat magnam vero quo pariatur reprehenderit?",
        img: Whitening
    }
]


const Services = () => {

    


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ margin: 2, color: "success.main",textAlign:"center"}}  variant="h6" component="div">
                OUR SERVICES
                </Typography>
                <Typography sx={{ textAlign: "center", margin: 2, color:"text.secondary" }}  variant="h4" component="div">
                Sevices we provided
                </Typography>

                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service)=><Service key={service.name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;