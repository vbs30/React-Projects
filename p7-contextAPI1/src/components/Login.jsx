import React, {useState, useContext} from 'react'
import UseContext from '../context/UseContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UseContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h1>Login Page</h1>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login