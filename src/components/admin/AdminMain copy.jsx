import * as React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BusinessDetails from '../BusinessDetails';
import businessDataStore from '../../stores/businessDataStore';
import AdminEditBusinessData from './AdminEditBusinessData';

const AdminMain = observer(() => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     businessDataStore.getBusinessData();
    // }, []);

    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <BusinessDetails></BusinessDetails>
                <AdminEditBusinessData></AdminEditBusinessData>
            </Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Button variant="contained" color="primary" onClick={() => { navigate('/admin/main/services') }}>
                    שרותי העסק
                </Button>
                <Button variant="contained" color="primary" onClick={() => { navigate('/admin/main/meetings') }}>
                    פגישות
                </Button>
                <Outlet />
            </Box>
        </>
    );
})

export default AdminMain