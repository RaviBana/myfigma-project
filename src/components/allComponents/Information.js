import React from 'react'
import './../MyStyle.css/information.css';
import { Patient, PatientMenu } from './../Objects/Menu'
import InformationBottom from './InformationBottom';


export const Information = () => {
  return (
    <div id='information'>
      <div id='upperInformation'>


        <div>
          <p>Gender</p>
          <p>{Patient[0].Gender}</p>
        </div>

        <div>
          <p>Birthday</p>
          <p>{Patient[0].Birthday}</p>
        </div>
        <div>
          <p>Phone Number</p>
          <p>{Patient[0].Phone}</p>
        </div>
        <div>
          <p>Registered Date</p>
          <p>{Patient[0].Registration}</p>
        </div>
        <div>
          <p>Street Address</p>
          <p>{Patient[0].Address}</p>
        </div>
        <div>
          <p>City</p>
          <p>{Patient[0].City}</p>
        </div>
        <div>
          <p>Zip Code</p>
          <p>{Patient[0].Zip_Code}</p>
        </div>
        <div>
          <p>Member Status</p>
          <p>{Patient[0].Member_Status}</p>
        </div>

      </div>
     
        <InformationBottom />
   

    </div>
  )
}
