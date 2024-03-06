import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [hobbies,setHobbies] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,phone,hobbies})
        .then(result => console.log(result))
        navigate('/')
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}> 
                <h2>ADD User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Phone</label>
                    <input type='text' placeholder='Enter Phone' className='form-control'
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Hobbies</label>
                    <input type='text' placeholder='Enter Hobbies' className='form-control'
                    onChange={(e) => setHobbies(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser