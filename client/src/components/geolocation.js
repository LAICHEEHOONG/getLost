import React, { useState, useEffect, useCallback } from "react";
import { Typography } from '@mui/material'
import { getLatitudeLongitude } from "../util/tools";
import { useSelector, useDispatch } from 'react-redux';
import { latLongAction } from '../store/actions';
import '../style/geolocation.css';


const Geolocation = () => {

    const languageStatus = useSelector(state => state.languageReducer);
    const { latitude, longitude, message, ip } = useSelector(state => state.latLongReducer);
    const dispatch = useDispatch();

    const gLL = useCallback(() => { 
        if(latitude === '' || latitude === 'Error' || !latitude) {
            getLatitudeLongitude()
            .then((result) => {
                dispatch(latLongAction(result))
            })
            .catch((error) => {
                console.error(error);
                dispatch(latLongAction(error))
            });
        }
     
    }, [dispatch, latitude])

    useEffect(() => {
        const statusUpdaterInterval = setInterval(() => {
            gLL()
        }, 4000);
        return () => {
            clearInterval(statusUpdaterInterval);
        };
    }, [gLL]);




    return (

        <div className="linear_progress">

            <Typography variant="caption" color="textSecondary" >
                <div style={{ color: latitude === '' || latitude === 'Error' ? 'red' : null }}>
                    <span>
                        {languageStatus === 0 ? 'Latitude' : '纬度'}: {latitude}
                    </span>
                    <span>  |  </span>
                    <span>
                        {languageStatus === 0 ? 'Longitude' : '经度'}: {longitude}
                    </span>
                </div>
                <div style={{ color: ip === '' ? 'red' : null }}>
                    {languageStatus === 0 ? 'Your IP Address' : '您的IP地址'}: {ip}</div>
            </Typography>
        </div>


    )
}

export default Geolocation;

//snackbar, progress