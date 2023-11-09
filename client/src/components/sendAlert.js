import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/joy/LinearProgress';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';

const SendAlert = () => {
    const msg = useSelector(state => state.messageReducer);

    return (

        <Box >
            {msg !== '' ?
                <>
                    <Alert severity={ msg === 'Sent successfully' ? "info" : 'error' }  style={{ width: '236px' }}>
                        {msg}
                    </Alert>
                    <LinearProgress color={msg === 'Sent successfully' ? 'primary' : 'danger'} />
                </>
                :
                null
            }
        </Box>

    )
}

export default SendAlert;