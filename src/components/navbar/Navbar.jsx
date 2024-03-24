import React, { useContext } from 'react'
import "./navbar.scss"

import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

function Navbar() {
  
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchSharpIcon className='icon'/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({type: "TOGGLE"})} style={{cursor: "pointer"}}/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <TocOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img className='avatar' src="https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar