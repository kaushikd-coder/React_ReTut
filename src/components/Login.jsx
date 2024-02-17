import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        setUser({username, password});
    }
  return (
    <div>
        <div>Login</div>
        <label>Username</label>
        <input type='text' className='border-slate-400 border-2' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <label>Password</label>
        <input type='password' className='border-slate-400 border-2' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button onClick={handleSubmit} className='bg-blue-500 p-3 rounded-md text-white'>
            <Link to='/profile'>Login</Link>
        </button> 
    </div>
  )
}

export default Login