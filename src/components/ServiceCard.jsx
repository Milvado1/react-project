import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import { Box } from '@mui/material';

function ServiceCard(props) {

    return (
        <>
            {<Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="body2"><b>{props.name}</b></Typography>
                        <Typography variant="body2">{props.desc}</Typography>
                    </CardContent>
                </React.Fragment>
            </Card>}
            <Box sx={{
                minWidth: 275, direction: 'rtl', textAlign: 'center'
            }}>
                <h3>{props.name}</h3>
                <h3>{props.desc}</h3>
            </Box>
        </>
    )
}

export default ServiceCard