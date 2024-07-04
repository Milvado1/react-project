import { useState, useEffect } from 'react';
import { toJS } from 'mobx';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { observer } from 'mobx-react-lite';
import ServicesStore from '../../stores/servicesStore'
import ServiceCard from "../ServiceCard"
import AdminAddService from './AdminAddService';

const AdminServices = observer(() => {

    useEffect(() => {
        ServicesStore.getServices();
    }, []);

    return (
        <>
            <Grid container spacing={2}>
                {ServicesStore.services.map((s, i) => (
                    <Grid item xs={4} key={i}>
                        <ServiceCard
                            name={toJS(s).name}
                            desc={toJS(s).description}
                        />
                    </Grid>
                ))}
            </Grid>
            <AdminAddService></AdminAddService>
        </>
    )
})

export default AdminServices
