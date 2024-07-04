import * as React from 'react';
import { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import BusinessDataStore from '../stores/businessDataStore';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const BusinessDetails = observer(() => {
    const [business, setBusiness] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let res = await BusinessDataStore.getBusinessData();
            setBusiness(BusinessDataStore.business);
        }
        fetchData();
    }, [business]);

    return (
        <>
            <Box sx={{
                minWidth: 275, direction: 'rtl', textAlign: 'center'
            }}>
                <h1>{BusinessDataStore.business.name}</h1>
                <h2>{BusinessDataStore.business.description}</h2>
                <h3>{BusinessDataStore.business.address}</h3>
                <h3>{BusinessDataStore.business.phone}</h3>
            </Box>
        </>
    )
})

export default BusinessDetails