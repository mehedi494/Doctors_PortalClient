import { Grid, Typography, CardContent, Card, CardMedia, Box } from '@mui/material';
import React from 'react';



const Testimonial = ({service}) => {
    const { name, country, description, img } = service
    // console.log(name)
    return (
        
        // <SwiperSlide>
        <Grid sx={{ mb: "20px",display: "flex", justifyContent: "space-around"  }} item xs={12} sm={12} md={12} >
                <Card sx={{ maxWidth: 345, boxShadow: 3, px: 2,py:1, borderRadius: '16px' }}>

                    <CardContent sx={{ p: 0, pb: 2,textAlign:"justify" }}>
                        <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", justifyContent: "left",alignItems:"center" }}>
                        <CardMedia
                            style={{ width: "auto", border: "2px solid #19D3AE",marginRight:'20px', borderRadius: '50%' }}
                            component="img"
                            height="50"
                            image={img}
                            alt="green iguana"
                        />
                        <Typography variant='subtitle1'>{country}</Typography>
                    </Box>

                </Card>
            </Grid>
            
        
        
    );
};

export default Testimonial;