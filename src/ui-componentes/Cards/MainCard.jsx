import { Box, Button, Typography } from "@mui/material";
import './MainCard.scss';

const Card = ({ title, subtitle, buttonText, buttonLink, imageSrc}) => {
    return(
        <Box className="banner_welcome">
            <Box className="_cardText">
                <Typography variant="h4" color="white" style={{fontWeight:700}}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {subtitle}
                </Typography>
                <Button variant="contained" size="xs" href={buttonLink} target="_blank">{buttonText}</Button>
            </Box>
            <Box className="cardImage">
                <img src={imageSrc} alt="Card image"/>
            </Box>
        </Box>
    );
}

export default Card;