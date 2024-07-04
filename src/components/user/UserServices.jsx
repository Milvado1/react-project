import * as React from 'react';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BusinessDetails from "../BusinessDetails"
import BusinessDataStore from '../../stores/businessDataStore'
import UserService from './UserService';
import ServicesStore from '../../stores/servicesStore';
import ServiceCard from '../ServiceCard';

const UserServices = observer(() => {
    useEffect(() => {
        // BusinessDataStore.getBusinessData(); // ??
        ServicesStore.getServices();
    }, []);

    return (
        <>
            <Box sx={{
                minWidth: 275,
                padding: '0.2rem 8rem',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) ',
                marginBottom: '2rem'
            }}>
                <BusinessDetails></BusinessDetails>
            </Box>

            <Grid container spacing={2}>
                {ServicesStore.services.map((s, i) => (
                    <Grid item xs={4} key={i}>
                        <UserService
                            key={i}
                            name={toJS(s).name}
                            desc={toJS(s).description}
                        >
                        </UserService>
                    </Grid>
                ))}
            </Grid>
        </>
    )
})
export default UserServices