import React, { useEffect } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Checkbox, FormGroup, FormControlLabel, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Geolocation from '../components/geolocation';
import SexCheckBox from '../components/checkBox';
import { formDataAction, ipAction, clearFormAction, pendingAction, messageAction } from '../store/actions';
import '../style/form.css';


const InputForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('api/updateData')
            .then(res => {
                dispatch(ipAction(res.data.clientIp.ip))
            })
            .catch(err => console.log(err));
    }, [dispatch])

    // let { languageReducer, latLongReducer, formDataReducer } = useSelector(state => state);
    const languageReducer = useSelector(state => state.languageReducer);
    const latLongReducer = useSelector(state => state.latLongReducer);
    const formDataReducer = useSelector(state => state.formDataReducer)
    const pendingReducer = useSelector(state => state.pendingReducer);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const time = new Date()
        const day = daysOfWeek[time.getDay()];
        const dayOfMonth = time.getDate();
        const month = months[time.getMonth()];
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
      
        if (hours > 12) {
          hours -= 12;
        }
        // const data = {...latLongReducer, ...formDataReducer, date: new Date() };

        const data = {...latLongReducer, ...formDataReducer, date: `${day} ${dayOfMonth} ${month} ${hours}:${minutes}${ampm}` };
        dispatch(pendingAction())
        axios.post('api/updateData', {data})
            .then(res => {
                console.log(res.data)
                dispatch(clearFormAction())
                dispatch(pendingAction());
                dispatch(messageAction(res.data));
                setTimeout(() => {
                    dispatch(messageAction(''));
                }, 5000)
            })
            .catch(error => {
                console.log(error.message);
                dispatch(pendingAction());
                dispatch(messageAction(error.message))
                setTimeout(() => {
                    dispatch(messageAction(''));
                }, 5000)
            })
    }
    const handleChange = (event) => {
        let { name, value } = event.target;
        dispatch(formDataAction({ [name]: value }));
    }




    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <SexCheckBox />

            <div>
                <TextField className='text_field name_input' id="outlined-basic"
                    label={languageReducer === 0 ? 'Name' : '名字'}
                    name='name'
                    onChange={handleChange}
                    value={formDataReducer.name}
                    variant="outlined" />
            </div>


            <div>
                <TextField className='text_field name_input' id="outlined-basic"
                    label={languageReducer === 0 ? 'Age' : '年龄'}
                    name='age'
                    onChange={handleChange}
                    value={formDataReducer.age}
                    variant="outlined" />
            </div>
            <div>
                <TextField className='text_field' id="outlined-basic"
                    label={languageReducer === 0 ? 'Contact' : '联系电话'}
                    name='contact'
                    onChange={handleChange}
                    value={formDataReducer.contact}
                    variant="outlined" />
            </div>
            <div>
                <TextField className='text_field' id="outlined-basic"
                    label={languageReducer === 0 ? 'Email' : '电邮'}
                    name='email'
                    onChange={handleChange}
                    value={formDataReducer.email}
                    variant="outlined" />
            </div>
            <div>
                <TextField className='text_field' id="outlined-basic"
                    label={languageReducer === 0 ? 'Which country are you from?' : '你来自哪个国家呀?'}
                    name='country'
                    onChange={handleChange}
                    value={formDataReducer.country}
                    variant="outlined" />
            </div>
            <div>
                <TextField
                    className='text_field'
                    id="standard-multiline-static"
                    label={languageReducer === 0 ? 'Ic / Passport / Other' : '身份证 / 护照 / 其他'}
                    name='other'
                    onChange={handleChange}
                    value={formDataReducer.other}
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </div>

            <Button
                onClick={handleSubmit}
                style={{ width: '270px', marginBottom: '10px' }} size='large' variant="contained">
                    {
                        pendingReducer ? <CircularProgress color="inherit"  /> : (languageReducer === 0 ? 'SEND' : '发送')
                    }
                
            </Button>
            <Geolocation />
        </Box>
    )
}

export default InputForm;