import React from 'react';
import './../MyStyle.css/leftmenu.css';
import { Menu } from '../Objects/Menu';
import {TbActivityHeartbeat} from 'react-icons/tb'

const LeftMenu = () => {
  return (
    <div id='leftMenu'>
      <p id='logo'><TbActivityHeartbeat/> </p>
      {
      Menu.map((item)=>{
        return(
          <div id='menuItem'>
             <p>{item.icon}</p>
              <p>{item.name}</p>
          </div>
          )
      }
      )}
      
      </div>
  )
}

export default LeftMenu