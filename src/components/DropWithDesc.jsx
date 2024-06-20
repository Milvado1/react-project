import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from "@mui/material"

function DropWithDesc(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="select-label">{props.label}</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={age}
                        label={props.label}
                        onChange={handleChange}
                    >
                        {props.options.map((op, i) => {
                            return <MenuItem key={i} value={i}>{op}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default DropWithDesc