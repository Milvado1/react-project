import * as React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BusinessDataStore from '../../stores/businessDataStore';
import BusinessDetails from '../BusinessDetails';
import AdminEditBusinessData from './AdminEditBusinessData';

const AdminMain = observer(() => {
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{
                minWidth: 275,
                padding: '0.2rem 8rem',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) '
            }}>
                <BusinessDetails></BusinessDetails>
                <AdminEditBusinessData></AdminEditBusinessData>
            </Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Button variant="contained" color="primary" onClick={() => { navigate('./services') }}>
                    שרותי העסק
                </Button>
                <Button variant="contained" color="primary" onClick={() => { navigate('./meetings') }}>
                    פגישות
                </Button>
                <Box sx={{ marginTop: 2 }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
})

export default AdminMain