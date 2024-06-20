import { useEffect } from 'react';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import InputWithDesc from '../InputWithDesc';
import ServicesStore from '../../stores/servicesStore';
import dataStore from '../../stores/dataStore';

function AdminAddServiceDetails(props) {

    const handleCloseBtnClick = async (e) => {
        let addResponse = await ServicesStore.addService(
            document.getElementById("title").value,
            document.getElementById("desc").value,
            document.getElementById("price").value
        );
        if (addResponse.status === 200){
            Swal.fire({
                title: "הוספת שרות",
                text: "השרות נוסף בהצלחה",
                icon: "success",
                timer: 2000
            });
        }
        else {
            Swal.fire({
                title: "הוספת שרות",
                text: "תקלה! השרות לא נוסף",
                icon: "error",
                timer: 5000
            });
        }
        props.onClose();
    }

    return (
        <>
            <h3>הוספת שרות</h3>
            <InputWithDesc id="title" label="כותרת"></InputWithDesc>
            <InputWithDesc id="desc" label="תאור"></InputWithDesc>
            <InputWithDesc id="price" label="מחיר"></InputWithDesc>
            <Button size="small" onClick={handleCloseBtnClick}>הוסף</Button>
        </>
    )
}

export default AdminAddServiceDetails