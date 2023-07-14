"use client"
import React, { useState } from 'react'
import axios from '../axios'

function SignInPage() {
    const [data, setData] = useState(null)
    const handleLogin = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        const response = await axios.post('api/login', formData)
        setData(response.data)
    }
    const handleLogout = async () => {
        console.log(data)
        await axios.post('api/logout', null, {
            headers: {
                Authorization: `Bearer ${data.data.token}`
            }
        })
        setData(null)
    }
    return (
        <>

            {data &&
                <>
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                    <button onClick={handleLogout}>Logout</button>
                </>
            }
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <input type="text" name='email' />
                <input type="text" name='password' />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default SignInPage