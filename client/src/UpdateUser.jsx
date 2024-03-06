import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateUser = () => {
    const {id} = useParams();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [hobbies,setHobbies] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/getUser/"+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setPhone(result.data.phone)
            setHobbies(res.data.hobbies)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/updateUser/"+id,{name,email,phone,hobbies})
        .then(result =>{
            console.log(result)
        })
        navigate('/')
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Phone</label>
                    <input type='text' placeholder='Enter Phone' className='form-control'
                    value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Hobbies</label>
                    <input type='text' placeholder='Enter Hobbies' className='form-control'
                    value={hobbies} onChange={(e) => setHobbies(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser