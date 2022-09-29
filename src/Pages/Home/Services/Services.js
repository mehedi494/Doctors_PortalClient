import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import fluoride from "../../../assets/images/fluoride.png"
import cavite from "../../../assets/images/cavity.png"
import Whitening from "../../../assets/images/whitening.png"
import Service from './../Service/Service';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import treatment from  "../../../assets/images/treatment.png"

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
    const backgroundStyle = {
        // backgroundImage: `url(${bg})`,
        backgroundColor: "#e8f5e9"
        
        

    }
    


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ margin: 2, color: "#19D3AE", textAlign: "center" }} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ textAlign: "center", margin: 2, color: "#3A4256" }} variant="h4" component="div">
                        Sevices we provided
                    </Typography>


                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map((service) => <Service key={service.name} service={service}></Service>)
                        }
                    </Grid>
                </Container>
            </Box>

            

            

            <Box container style={backgroundStyle} sx={{width:"100%", flexGrow: 1, }}>
                <Grid container spacing={2} sx={{  display: "flex", justifyContent: "start", textAlign: "start", alignItems: 'center' }}>
                    
                    <Grid xs={12} md={6} sx={{width:"100%",mb:2, textAlign: "justify",px:5 }}>
                        
                        <Typography variant='h6' sx={{ mb: 2, color: "#004d40" }} >
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant='p' sx={{ color: "#00695c", }} >
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#004d40", display: "block", mt: 2 }}>Learn more</Button>
                    </Grid>


                    <Grid sx={{ p: 0, m: 0, display: "flex", justifyContent: "center" }} xs={12} md={6}>
                        <img style={{ height:"400px",borderRadius:"10px"  }} src={treatment} alt="pateingImg" />
                    </Grid>

                </Grid>
            </Box>

        </>
    );
};

export default Services;