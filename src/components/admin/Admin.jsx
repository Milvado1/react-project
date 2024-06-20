import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import DataStore from '../../stores/dataStore';
import AdminLogin from './AdminLogin';
import AdminMain from './AdminMain';
import BusinessDataStore from '../../stores/businessDataStore';
// import './admin.css'
import '../../index.css'


const Admin = observer(() => {
    // const [business, setBusiness] = useState({});

    // useEffect(() => {
    //     BusinessDataStore.getBusinessData();        
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // await BusinessDataStore.getBusinessData();
    //         // await BusinessDataStore.postBusinessData(
    //         //     BusinessDataStore.business.name,
    //         //     BusinessDataStore.business.description,
    //         //     BusinessDataStore.business.address,
    //         //     BusinessDataStore.business.email,
    //         //     BusinessDataStore.business.phone
    //         // );
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            {!DataStore.isLoginOk && <AdminLogin />}
            {DataStore.isLoginOk && <AdminMain />}
        </>
    )
})

export default Admin