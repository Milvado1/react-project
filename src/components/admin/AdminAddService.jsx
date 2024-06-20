import { useState } from 'react';
import { Button } from '@mui/material';
import AdminAddServiceDetails from './AdminAddServiceDetails';


function AdminAddService() {
    const [openDetails, setOpenDetails] = useState(false);

    const handleOpenDetails = (e) => {
        setOpenDetails(!openDetails);
    }

    return (
        <>
            {!openDetails &&
                <Button size="small" onClick={handleOpenDetails}>הוספת שרות</Button>
            }
            {openDetails && <AdminAddServiceDetails onClose={handleOpenDetails} />}
        </>
    )
}

export default AdminAddService