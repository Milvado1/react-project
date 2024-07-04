import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Grid, Box } from '@mui/material';

function ServiceCard(props) {

    return (
        <>
            {<Card variant="outlined" >
                <CardHeader
                    title={<Typography variant="h6" direction="rtl" textAlign="center"><b>{props.name}</b></Typography>}
                    style={{ backgroundColor: "#83b7ff" }}
                />
                <CardContent >
                    {/* <Typography variant="body1" direction="rtl" textAlign="right">{props.desc}</Typography> */}
                    <Box sx={{ /* minWidth: 275, */ height: 200, direction: 'rtl' , overflowY: 'auto' }}>
                        <p>{props.desc}</p>
                    </Box>
                </CardContent>
            </Card>}
            {/* <Box sx={{
                minWidth: 275, direction: 'rtl', textAlign: 'center'
            }}>
                <h3>{props.name}</h3>
                <h3>{props.desc}</h3>
            </Box> */}
        </>
    )
}

export default ServiceCard