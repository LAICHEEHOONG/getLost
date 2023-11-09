import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/joy/Table';

export default function List() {

    const [data, setData] = useState([]);

    const allData = () => {
        axios.get('api/list')
            .then(res => {
                console.log(res.data)
                setData(res.data.reverse())
            })
            .catch(err => {
                console.log(err);
                setData([])
            });
    }

    useEffect(() => {
        allData();
    }, [])

    return (
        <Table aria-label="basic table">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>CONTACT</th>
                    <th>EMAIL</th>
                    <th>COUNTRY</th>
                    <th>LATITUDE</th>
                    <th>LONGITUDE</th>
                    <th>IP</th>
                    <th>GENDER</th>
                    <th>DATE</th>
                    <th>OTHER</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(obj => (
                        <tr>
                            <td>{obj.name}</td>
                            <td>{obj.age}</td>
                            <td>{obj.contact}</td>
                            <td>{obj.email}</td>
                            <td>{obj.country}</td>
                            <td>{obj.latitude}</td>
                            <td>{obj.longitude}</td>
                            <td>{obj.ip}</td>
                            <td>{obj.sex}</td>
                            <td>{obj.date}</td>
                            <td>{obj.other}</td>
                        </tr>
                    ))
                 
                }
                {/* <tr>
                    <td>Frozen yoghurt</td>
                    <td>159</td>
                    <td>6</td>
                    <td>24</td>
                    <td>4</td>
                </tr> */}

                {/* <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
          <td>9</td>
          <td>37</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
          <td>16</td>
          <td>24</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>305</td>
          <td>3.7</td>
          <td>67</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Gingerbread</td>
          <td>356</td>
          <td>16</td>
          <td>49</td>
          <td>3.9</td>
        </tr> */}
            </tbody>
        </Table>
    );
}
