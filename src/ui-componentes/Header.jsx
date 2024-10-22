import Typography from '@mui/material/Typography';
import './Header.scss';
import { IconButton } from '@mui/material';
import { MenuOpenOutlined } from '@mui/icons-material';
function Header(){
    return(
        <header>
            <IconButton aria-label="">
                <MenuOpenOutlined/>
            </IconButton>
            <Typography variant="body1" color="initial">asdasd</Typography>
        </header>
    );
}

export default Header;