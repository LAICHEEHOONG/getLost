import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useDispatch } from 'react-redux';
import { languageAction } from '../store/actions';
import '../style/bottom.css';


export default function Language() {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const handleLanguage = (value) => {
    dispatch(languageAction(value))
  }

  return (
    <Box sx={{
      width: 270,
    }}>
      <BottomNavigation
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleLanguage(newValue)
        }}
      >
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
        <BottomNavigationAction label="ENGLISH" />
        <BottomNavigationAction label="中文" />
      </BottomNavigation>
    </Box>
  );
}