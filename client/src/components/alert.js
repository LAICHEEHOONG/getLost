import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/joy/LinearProgress';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';

const AlertMessage = () => {
    const languageStatus = useSelector(state => state.languageReducer);
    const { latitude, longitude, message, ip } = useSelector(state => state.latLongReducer);

    return (

        <Box >
            {latitude === '' ?
                <>
                    <Alert severity="info" style={{ width: '236px' }}>
                        {languageStatus === 0 ? 'Obtaining latitude longitude...' : '获取纬度和经度中...'}
                    </Alert>
                    <LinearProgress />
                </>
                :
                null
            }
            {latitude === 'Error' ?
                <>
                    <Alert severity="error" style={{ width: '236px' }}>
                        {languageStatus === 0 ? message : '请允许您的浏览器访问您的位置'}
                    </Alert>
                    <LinearProgress color="danger" />
                </> :
                null
            }
        </Box>

    )
}

export default AlertMessage;