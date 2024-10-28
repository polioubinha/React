import { Box, Paper } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "./SubCard.scss";
import Chart from 'react-apexcharts';

const SubCard = ({}) => {
    const chartOptions = {
        chart: {
          type: 'bar',
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            borderRadius:10,
            columnWidth: '50%', // Ajusta el ancho de las barras
            distributed: false, // Todas las barras del mismo color
          },
        },
        colors: ['#00a76f'], // Color verde similar a la imagen
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E', 'F'], // Etiquetas en el eje X
        },
        yaxis: {
          show: false, // Oculta el eje Y
        },
        grid: {
          show: false, // Oculta las líneas de cuadrícula
        },
        dataLabels: {
          enabled: false, // Oculta los números encima de las barras
        },
      };
    
      const series = [{
        name: 'Datos',
        data: [10, 30, 20, 40, 25, 35], // Altura de cada barra
      }];
      
  return (
    <Paper elevation={0} className="_paper">
      <Box className="stats">
        <Box className="statTitle">Usuarios activos</Box>
        <Box className="statsNumbers">1985</Box>
        <Box className="statsGraph">
            <TrendingUpIcon className="icon"/>
            <Box component="span" className="percentaje">+2.5%</Box>
            <Box component="span" className="lastdays"> últimos 7 días</Box>
        </Box>
      </Box>
      <Box className="chart">
        <Chart options={chartOptions} series={series} type="bar"/>
      </Box>
    </Paper>
  );
};

export default SubCard;
