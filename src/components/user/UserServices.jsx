import * as React from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import BusinessDetails from "../BusinessDetails"
import BusinessDataStore from '../../stores/businessDataStore'
import UserService from './UserService';
import ServicesStore from '../../stores/servicesStore';
import ServiceCard from '../ServiceCard';

const UserServices = observer(() => {

    useEffect(() => {
        BusinessDataStore.getBusinessData(); // ??
        ServicesStore.getServices();
    }, []);

    return (
        <>
            <BusinessDetails></BusinessDetails>

            {ServicesStore.services.map((s, i) => {
                return <UserService key={i} name={toJS(s).name} desc={toJS(s).description}></UserService>
            })}

        </>
    )
})
export default UserServices
