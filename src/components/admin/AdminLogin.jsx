import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';
import DataStore from '../../stores/dataStore';
import Grid from '@mui/material/Grid';
import { Box, Stack } from '@mui/system';



const AdminLogin = observer(() => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let checkLogin = await DataStore.checkLogin(name, password);

            if (checkLogin.status === 200) {
                DataStore.setIsLoginOk(true);
                Swal.fire({
                    title: "כניסת מנהל",
                    text: "מועבר לדף ראשי -> מנהל",
                    icon: "success",
                    timer: 1500
                });
            }
        }
        fetchData();
    }, [name, password]);

    const handleLoginBtnClick = async (e) => {
        setName(document.getElementById("username").value);
        setPassword(document.getElementById("password").value);
    }

    return (
        <>
            <Box
                sx={{
                    // marginTop: '15vh',
                    padding: '6rem',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7)'
                }}
            >
                <Stack>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="username">שם משתמש</InputLabel>
                        <OutlinedInput
                            id="username"
                            type="text"
                            label=" שם משתמש "
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="password">סיסמה</InputLabel>
                        <OutlinedInput
                            id="password"
                            type="password"
                            label=" סיסמה "
                        />
                    </FormControl >
                    <br></br>
                    <Button variant="contained" color="primary" onClick={handleLoginBtnClick}>
                        Login
                    </Button>
                </Stack>
            </Box>
        </>
    )
})

export default AdminLogin