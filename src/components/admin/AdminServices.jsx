import { useState, useEffect } from 'react';
import { toJS } from 'mobx';
import Button from '@mui/material/Button';
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
            {ServicesStore.services.map((s, i) => {
                return <ServiceCard key={i} name={toJS(s).name} desc={toJS(s).description}></ServiceCard>
            })}
            <AdminAddService></AdminAddService>
        </>
    )
})

export default AdminServices
