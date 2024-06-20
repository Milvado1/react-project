import { useState } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AdminAddServiceDetails from './AdminAddServiceDetails';
import AdminEditBusinessDataDetails from './AdminEditBusinessDataDetails';


function AdminEditBusinessData() {
    const [openDetails, setOpenDetails] = useState(false);

    const handleOpenDetails = (e) => {
        setOpenDetails(!openDetails);
    }

    return (
        <>
            {!openDetails &&
                <Button size="small" onClick={handleOpenDetails}><EditIcon/></Button>                
            }
            {openDetails && <AdminEditBusinessDataDetails onClose={handleOpenDetails} />}
        </>
    )
}

export default AdminEditBusinessData