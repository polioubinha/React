import { CheckBox } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    { name: 'Room 101', image: 'https://example.com/image1.jpg', calories: 200, fat: 10, carbs: 30 },
    { name: 'Room 102', image: 'https://example.com/image2.jpg', calories: 250, fat: 15, carbs: 35 },
    { name: 'Room 103', image: 'https://example.com/image3.jpg', calories: 180, fat: 8, carbs: 25 },
    // Agrega más habitaciones según sea necesario
];

const TableComp = ({})=> {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="room table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Room Name</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <img src={row.image} alt={row.name} style={{ width: 50, height: 50, borderRadius: 4 }} />
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComp;