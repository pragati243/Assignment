import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jfki6cg', 'template_mzu2cbl', form.current, {
            publicKey: 'xOimbhvPi_KKXxJ2A',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className="btn btn-success">ADD +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.hobbies}</td>
                                <td>
                                    <Link to= {`/update/${user._id}`} className="btn btn-success">Update</Link>
                                    <button className='btn btn-danger' onSubmit={sendEmail}>Send</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User