import React from 'react';
import {AiOutlineProfile} from 'react-icons/ai'

const InformationBottom = () => {
  return (
    <div id='bottomInformation'>
      <div>
        <button> Upcoming Apointments</button>
        <button> Past Appointments</button>
        <button> Medical Records</button>
      </div>

      <div id='lowerInfo'>
        <div id='lowerInfo1'>
          <button>Root Canal Treatments</button>
          <button>Show Previous Treatments</button>
        </div>

        <div id='lowerInfo2'>
          <div>
            <p>26 Nov'19</p>
            <p>09:00 - 10:00</p>
          </div>

          <div>
            <p>Treatment</p>
            <p>Open Access</p>
          </div>

          <div>
            <p>Dentist</p>
            <p>Drg. Adam H.</p>
          </div>

          <div>
            <p>Nurse</p>
            <p>Jussicamila</p>
          </div>

          <div id='note'>
          <p><i><AiOutlineProfile/></i> <span>Note</span> </p>
          
          </div>
        </div>
        <div id='lowerInfo2'>
        <div>
            <p>26 Nov'19</p>
            <p>09:00 - 10:00</p>
          </div>

          <div>
            <p>Treatment</p>
            <p>Root Canal</p>
          </div>

          <div>
            <p>Dentist</p>
            <p>Drg. Adam H.</p>
          </div>

          <div>
            <p>Nurse</p>
            <p>Jussicamila</p>
          </div>

          <div id='note'>
            <p><i><AiOutlineProfile/></i> <span>Note</span> </p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationBottom