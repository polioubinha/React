import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import './Dashboard.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

function Dashboard(){

    return(
        <Box className="layout_dashboard">
            <Container maxWidth='xl'>
                <Grid2 container spacing={{xs:3}} direction={{xs: "row"}}>
                    <Grid2 size={{xs: 12, md:8}}>
                        <Box className="banner_welcome">
                            <Box>
                                <Typography variant="h4" color="white" style={{fontWeight:700}}>Welcome back 👋
                                Jaydon Frankie</Typography>
                                <Typography variant="body2">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</Typography>
                                <Button variant="contained" size="xs">asd</Button>
                            </Box>
                            <Box>
                                <img src="/src/assets/svg/login.svg" alt="" />
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={{xs: 12, md:4}}>
                        <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]} className="swipper"> 
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                        </Swiper>
                        <Box className="cta_top">
                            <Box>
                                <Typography variant="h4" color="white">Welcome back 👋
                                Jaydon Frankie</Typography>
                                <Typography variant="body2">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</Typography>
                                <Button variant="contained" size="xs">asd</Button>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Dashboard;