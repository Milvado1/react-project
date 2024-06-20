import * as React from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import BusinessDataStore from '../stores/BusinessDataStore';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const BusinessDetails = observer(() => {
    useEffect(() => {
        const fetchData = async () => {
            let res = await BusinessDataStore.getBusinessData();
            // setBusiness(BusinessDataStore.business);
        }
        fetchData();
    }, []);

    return (
        <>
            <Box sx={{
                minWidth: 275, direction: 'rtl', textAlign: 'center'
            }}>
                <h1>{BusinessDataStore.business.name}</h1>
                <h2>{BusinessDataStore.business.description}</h2>
                {/* <br></br> */}
                <h3>{BusinessDataStore.business.address}</h3>
                {/* <br></br> */}
                <h3>{BusinessDataStore.business.phone}</h3>
            </Box>
        </>
    )
})

export default BusinessDetails