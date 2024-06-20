import { useEffect, useId, useState } from 'react';
import { observer } from 'mobx-react-lite';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import BusinessDataStore from '../stores/businessDataStore';


const InputWithDesc = observer((props) => {
    const [dValue, setDValue] = useState(false);

    useEffect(() => {
        console.log(props);
        setDValue(props.dValue);
    }, [])

    return (
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
                <OutlinedInput
                    id={props.id}
                    type="text"
                    label={props.label}
                    defaultValue={props.dValue}
                />
            </FormControl>
        </>
    )
})

export default InputWithDesc