import React, { useState, useEffect } from 'react'
import Icon from './Icon'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';



function Header() {

  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "#000000";
      root.style.color = "#FFFFFF";
    } else {
      root.style.backgroundColor = "#FFFFFF";
      root.style.color = "#000000";
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme => !theme);
  }

  return (
    <div className='app-shadow flex items-center justify-between px-5 py-3'>
      <div onClick={() => navigate("/")}>
        <img src="./src/assets/images/logo.png" alt="" className='w-12 h-12 cursor-pointer' />
      </div>
      <div>
        <TextField label="Search input" size='small'></TextField>
      </div>
      <div className='flex space-x-6'>
        { theme ? <Icon name="sun" type="light" onClick={changeTheme}></Icon> : <Icon name="moon" type="light" onClick={changeTheme}></Icon>}
        <div className='relative'>
          <Icon name="basket-shopping" type="light"></Icon>
          <span className='bg-red-500 text-red-50 w-4 h-4 rounded-full flex items-center justify-center absolute -top-2 -right-2.5 text-xs'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header