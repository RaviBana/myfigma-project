import React from 'react';
import './../MyStyle.css/profile.css';
import pic from './../Objects/profile.JPG'
import {AiOutlineProfile} from 'react-icons/ai'

const Profile = () => {
  return (
    <div id='profile'>

      <div id='profileImg'>
        <div id='img'>
          <img src={pic} alt="" />
        </div>
        <div id='myName'>
          <p>Ravindra Singh</p>
          <p>ravindrasingh0506@gmail.com</p>
        </div>
        <div id='detail'>
          <div>
            <p className='detailNo'>15</p>
            <p>past</p>
          </div>
          <div>
            <p>02</p>
            <p>upcoming</p>
          </div>

        </div>
        <button>Send Message</button>

      </div>
      <div id='profileDetail'>
        <div>

        <h4>Files / Documents</h4>
        </div>

        <div id='AllButton'>
          <button> <i><AiOutlineProfile/></i>  <span> Check Up Result.pdf</span> </button>
          <button> <i><AiOutlineProfile/></i>  <span> Check Up Result.pdf</span> </button>
          <button> <i><AiOutlineProfile/></i>  <span> Check Up Result.pdf</span> </button>
          <button> <i><AiOutlineProfile/></i>  <span> Check Up Result.pdf</span> </button>
        </div>
      </div>

    </div>
  )
}

export default Profile