import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Geolocation from '../components/geolocation';
import { formDataAction } from '../store/actions';
import '../style/form.css';


const SexCheckBox = ({ props }) => {

    const formData = useSelector(state => state.formDataReducer);
    const languageStatus = useSelector(state => state.languageReducer);
    const dispatch = useDispatch();


    // const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    // const [checkbox2Checked, setCheckbox2Checked] = useState(false);

    // const handleCheckbox1Change = (event) => {
    //     console.log(event.target.name)
    //     setCheckbox1Checked(event.target.checked);
    //     setCheckbox2Checked(false);
    //     dispatch(formDataAction({ ...formData, sex: event.target.name }));
    // };

    // const handleCheckbox2Change = (event) => {
    //     console.log(event.target.name)
    //     setCheckbox2Checked(event.target.checked);
    //     setCheckbox1Checked(false);
    //     dispatch(formDataAction({ ...formData, sex: event.target.name }));
    // };

    const handleCheckbox1 = (event) => {
        dispatch(formDataAction({
            ...formData,
            sex: event.target.name,
            checkBox1: event.target.checked,
            checkBox2: false
        }));
    }
    const handleCheckbox2 = (event) => {
        dispatch(formDataAction({
            ...formData,
            sex: event.target.name,
            checkBox2: event.target.checked,
            checkBox1: false
        }));
    }


    return (

        <div className='sex'>
            {/* <FormControlLabel className='check_box' control={
                <Checkbox
                    name='male'
                    checked={checkbox1Checked}
                    onChange={handleCheckbox1Change}
                />} label="Male" />
            <FormControlLabel className='check_box' control={
                <Checkbox
                    name='female'
                    checked={checkbox2Checked}
                    onChange={handleCheckbox2Change}
                />} label="Female" /> */}
            <FormControlLabel className='check_box' control={
                <Checkbox
                    name='male'
                    checked={formData.checkBox1}
                    onChange={handleCheckbox1}
                />} label={languageStatus === 0 ? 'Male' : '男性'} />
            <FormControlLabel className='check_box' control={
                <Checkbox
                    name='female'
                    checked={formData.checkBox2}
                    onChange={handleCheckbox2}
                />} label={languageStatus === 0 ? 'Female' : '女性'} />
        </div>

    )
}

export default SexCheckBox;