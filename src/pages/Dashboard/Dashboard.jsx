import { Box, Container, Grid2 } from "@mui/material";
import './Dashboard.scss';
import 'swiper/css';
import Card from "../../ui-componentes/Cards/MainCard";
import CustomSwiper from "../../ui-componentes/Cards/SwiperCard";
import SubCard from "../../ui-componentes/Cards/SubCard";

function Dashboard(){

    return(
        <Box className="layout_dashboard">
            <Container maxWidth='xl'>
                <Grid2 container spacing={{xs:1}} direction={{xs: "row"}} className="gridCards">
                    <Grid2 size={{xs: 12, md:8}} className="_gridCard">
                    <Card
                        title="Welcome back 👋 Jaydon Frankie"
                        subtitle="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
                        buttonText="Learn More"
                        buttonLink="https://example.com"
                        imageSrc="/src/assets/svg/login.svg"
                    />
                    </Grid2>
                    <Grid2 size={{xs: 12, md:4}} className="_gridCard">
                        <CustomSwiper/>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={{xs:1}} direction={{xs: "row"}} className="gridStats">
                    <Grid2 size={{xs:12, md: 4}} className="_gridCard">
                        <SubCard/>
                    </Grid2>
                    <Grid2 size={{xs:12, md: 4}} className="_gridCard">
                        <SubCard/>
                    </Grid2>
                    <Grid2 size={{xs:12, md: 4}} className="_gridCard">
                        <SubCard/>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Dashboard;