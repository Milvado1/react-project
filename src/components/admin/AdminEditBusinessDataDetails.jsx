import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2';
import InputWithDesc from '../InputWithDesc';
import BusinessDataStore from '../../stores/businessDataStore';

const AdminEditBusinessDataDetails = observer((props) => {
    // const [business, setBusiness] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // await BusinessDataStore.getBusinessData();
    //         // setBusiness(BusinessDataStore.business);
    //     }
    //     fetchData();
    // }, []);

    const handleSaveBtnClick = async (e) => {
        let saveResponse = await BusinessDataStore.postBusinessData(
            document.getElementById("name").value,
            document.getElementById("description").value,
            document.getElementById("address").value,
            document.getElementById("email").value,
            document.getElementById("phone").value
        );
        if (saveResponse.status === 200) {
            Swal.fire({
                title: "שמירת פרטי עסק",
                text: "פרטי העסק עודכנו בהצלחה",
                icon: "success",
                timer: 2000
            });
        }
        else {
            Swal.fire({
                title: "שמירת פרטי עסק",
                text: "תקלה! פרטי העסק לא עודכנו",
                icon: "error",
                timer: 5000
            });
        }
        props.onClose();
    }

    return (
        <>
            <Dialog open={true} onClose={props.onClose} sx={{ direction: 'rtl' }} PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    handleSaveBtnClick();
                },
            }}>
                <DialogTitle><h3>פרטי העסק</h3></DialogTitle>
                <DialogContent>
                    <InputWithDesc id="name" label="שם" dValue={BusinessDataStore.business.name}></InputWithDesc>
                    <InputWithDesc id="description" label="תאור" dValue={BusinessDataStore.business.description}></InputWithDesc>
                    <InputWithDesc id="address" label="כתובת" dValue={BusinessDataStore.business.address}></InputWithDesc>
                    <InputWithDesc id="email" label="מייל" dValue={BusinessDataStore.business.email}></InputWithDesc>
                    <InputWithDesc id="phone" label="טלפון" dValue={BusinessDataStore.business.phone}></InputWithDesc>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>בטל</Button>
                    <Button type="submit">שמור</Button>
                </DialogActions>
            </Dialog>
        </>
    )
})

export default AdminEditBusinessDataDetails