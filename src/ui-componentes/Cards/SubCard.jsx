import { Box, Paper } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SubCard = ({}) => {
    return(
        <Paper>
            <Box>
                <Box className="stats">
                    <Box className="statTitle">Usuarios activos</Box>
                    <Box className="statsNumbers">1985</Box>
                    <Box className="statsGraph"></Box>
                </Box>
                <Box className="chart">
                    <TrendingUpIcon/>
                    <Box component="span">+2.5%</Box>
                    <Box component="span"> últimos 7 días</Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default SubCard;