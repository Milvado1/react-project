import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import { useState } from 'react'
import Button from '@mui/material/Button';
import ServiceCard from '../ServiceCard';
import UserSetMeetingDetails from './UserSetMeetingDetails';

function UserService(props) {

    const [openDetails, setOpenDetails] = useState(false);

    const handleOpenDetails = (e) => {
        setOpenDetails(!openDetails);
    }

    return (
        <>
            <ServiceCard name={props.name} desc={props.desc}></ServiceCard>            
            
            {!openDetails &&
                <Button size="small" onClick={handleOpenDetails}>קביעת פגישה</Button>
            }
            {openDetails && <UserSetMeetingDetails onClose={handleOpenDetails} />}
            
        </>
    )
}

export default UserService