import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import InputWithDesc from '../InputWithDesc';
import DropWithDesc from '../DropWithDesc';
import MeetingsStore from '../../stores/meetingsStore';

function UserSetMeetingDetails(props) {

    const handleCloseBtnClick = async (e) => {
        let addResponse = await MeetingsStore.addMeeting(
            "11",
            document.getElementById("name").value,
            document.getElementById("phone").value,
            document.getElementById("email").value,
            document.getElementById("dateTime").value,
           
        );
        if (addResponse.status === 200){
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
        console.log(MeetingsStore.meetings);
        props.onClose();
    }

    return (
      <>    
        <h3>קביעת פגישה</h3>
        {/* <DropWithDesc id="type" label="סוג השירות"  options={["זוגיות","מודעות","הנחיית הורים"]}></DropWithDesc> */}
        <InputWithDesc id="name" label="שם הלקוח"></InputWithDesc>
        <InputWithDesc id="phone" label="טלפון"></InputWithDesc>
        <InputWithDesc id="email" label="מייל"></InputWithDesc>
        <InputWithDesc id="dateTime" label="תאריך ושעה"></InputWithDesc>
        <Button size="small" onClick={handleCloseBtnClick}>קבע פגישה</Button>
      </>
    )
}

export default UserSetMeetingDetails
