import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import Testimonial from '../Testimonial/Testimonial';
import person1 from "../../../../assets/images/people3.png"
import person2 from "../../../../assets/images/people1.png"
import person3 from "../../../../assets/images/people2.png"
import qoute from "../../../../assets/icons/quote.svg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const testimonial = [
    {
        name: "Winson Herry ",
        country: "California",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person1
    },
    {
        name: "Qunery Lin ",
        country: "rome",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person2
    },
    {
        name: "Androsen Rev",
        country: "ajarbaizan",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person3
    },
    {
        name: "Androsen Rev",
        country: "ajarbaizan",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person3
    },
    {
        name: "Androsen Rev",
        country: "ajarbaizan",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person3
    },
    {
        name: "Androsen Rev",
        country: "ajarbaizan",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person3
    },
    {
        name: "Androsen Rev",
        country: "ajarbaizan",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person3
    },
    {
        name: "Androsen Rev",
        country: "ajarbaizan",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: person3
    },
]
const Testimonials = () => {
    const backgroundStyle = {
        backgroundImage: `url(${qoute})`,

    }

    console.log(Testimonial.map)
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <Container style={{ backgroundImage: `url(${qoute})`, backgroundRepeat: "no-repeat", backgroundPosition: "top right", backgroundSize: "120px" }}>
                    <Box style={{ marginBottom: "50px" }}>
                        <Typography sx={{ color: "#19D3AE", textAlign: "left" }} variant="h6" component="div">
                            Testimonial
                        </Typography>
                        <Typography sx={{ textAlign: "left", color: "#3A4256" }} variant="h4" component="div">
                            What Our Patients Says
                        </Typography>
                        {/* <img src={qoute} alt=""/> */}
                    </Box>


                    {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}





                        <Swiper style={{ margin: 0, padding: 0, cursor: "grab" }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"


                        slidesPerView={2}
                        
                        spaceBetween={50}
                        
                        >
                           
                            {
                                testimonial.map((service) => <SwiperSlide style={{  }}><Testimonial Testimonial key={service.name} service={service}> </Testimonial>
                                </SwiperSlide>
                                )
                            }

                        </Swiper>



                    
                </Container>
            </Box>


        </>
    );
};

export default Testimonials;
