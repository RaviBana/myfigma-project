
import {AiOutlinePlus, AiOutlineFolderOpen, AiOutlineSetting}  from 'react-icons/ai'
import {BsFillPersonFill, BsUpload}  from 'react-icons/bs'
import {BiFile}  from 'react-icons/bi'
import {FiLogOut}  from 'react-icons/fi'


export const Menu = [
    {
        icon : <AiOutlinePlus/>,
        name:'NEW'
    },
    {
        icon: <BsFillPersonFill/>,
        name:'PATIENT'
    },
    {
        icon: <AiOutlineFolderOpen/>,
        name:'FOLDER'
    },
    {
        icon: <BsUpload/>,
        name:'UPLOAD'
    },
    {
        icon: <BiFile/>,
        name:'REPORT'
    },
    {
        icon: <AiOutlineSetting/>,
        name:'SETTING'
    },
    {
        icon: <FiLogOut/>,
        name:'LOGOUT'
    }
]


export const Patient = [
    {
        Gender: 'Male',
        Birthday: 'May 18th, 1995',
        Phone: '9782376532',
        Registration: 'May 18th, 1995',
        Address : 'kota',
        City: 'kota',
        Zip_Code: '324001',
        Member_Status: 'Active Member'
    }
]

export const PatientMenu = [
    'Gender',
    'Birthday',
    'Phone',
    'Registration',
    'Address',
    'City',
    'Zip_code',
    'Member_Status'
]