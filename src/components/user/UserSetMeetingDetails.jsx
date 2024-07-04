import { useState } from 'react';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Swal from 'sweetalert2';
import InputWithDesc from '../InputWithDesc';
import MeetingsStore from '../../stores/meetingsStore';

function UserSetMeetingDetails(props) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleCloseBtnClick = async (e) => {
        let addResponse = await MeetingsStore.addMeeting(
            "11",
            document.getElementById("name").value,
            document.getElementById("phone").value,
            document.getElementById("email").value,
            selectedDate

        );
        if (addResponse.status === 200) {
            Swal.fire({
                title: "הוספת פגישה",
                text: "הפגישה נוספה בהצלחה",
                icon: "success",
                timer: 2000
            });
        }
        else {
            Swal.fire({
                title: "הוספת פגישה",
                text: "תקלה! הפגישה לא נוספה",
                icon: "error",
                timer: 5000
            });
        }
        props.onClose();
    }

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const defaultDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());

    return (
        <>
            <h3>קביעת פגישה</h3>
            <InputWithDesc id="name" label="שם הלקוח"></InputWithDesc>
            <InputWithDesc id="phone" label="טלפון"></InputWithDesc>
            <InputWithDesc id="email" label="מייל"></InputWithDesc>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker label="תאריך ושעה" value={selectedDate} onChange={setSelectedDate} referenceDate={dayjs(defaultDate)} />
            </LocalizationProvider>
            <Button size="small" onClick={handleCloseBtnClick}>קבע פגישה</Button>
        </>
    )
}

export default UserSetMeetingDetails