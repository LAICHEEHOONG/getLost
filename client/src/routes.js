import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import FourO4 from './pages/404';
import List from './pages/list';
import { useSelector, useDispatch } from 'react-redux';
import { getLatitudeLongitude } from "./util/tools";
import { latLongAction } from './store/actions';

const Router = () => {
    const { latitude, longitude, message, ip } = useSelector(state => state.latLongReducer);
    const dispatch = useDispatch();

    // setInterval(() => {
    //     if (latitude === 'Error') {
    //         dispatch(latLongAction({ latitude: '', longitude: '' }))
    //         getLatitudeLongitude()
    //             .then((result) => {
    //                 console.log(result);
    //                 dispatch(latLongAction(result))
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //                 dispatch(latLongAction(error))
    //             });
    //     }
    // }, 4000)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/list' element={<List />} />
                <Route path='*' element={<FourO4 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;