import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"

function MeetingCard(props) {

    return (
        <>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="body2">:סוג הפגישה</Typography>
                        <Typography variant="body2">{props.serviceType}</Typography>
                        <Typography variant="body2">:שם לקוח</Typography>
                        <Typography variant="body2">{props.clientName}</Typography>
                        <Typography variant="body2">:טלפון</Typography>
                        <Typography variant="body2">{props.clientPhone}</Typography>
                        <Typography variant="body2">:מייל</Typography>
                        <Typography variant="body2">{props.clientEmail}</Typography>
                        <Typography variant="body2">:תאריך הפגישה</Typography>
                        <Typography variant="body2">{props.dateTime}</Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </>
    )
}

export default MeetingCard
