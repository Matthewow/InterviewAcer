import { Button } from "@mui/material";
import {Settings, Add} from '@mui/icons-material';
import { styled } from "@mui/system";

const DashTest = () => {

    const BlueButton = styled(Button)({
        backgroundColor : "skyblue",
        color: "#999",
        margin: 5,
        "&:hover": {
            backgroundColor: "lightblue",
            color: "white"
        }
    })

    return (
        <div>
            <Button variant="text">Text</Button>
            <Button startIcon={<Settings />} variant="contained" color = "secondary" size = "small">Contained</Button>
            <Button startIcon={<Add />} variant="contained" color = "success" size = "small">Add new </Button>
            <Button variant="outlined">Outlined</Button>

            <BlueButton>blue 1</BlueButton>
        </div>
    )
}

export default DashTest;