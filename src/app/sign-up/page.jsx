"use client"
import axios from '../axios'

function SignInPage() {
    const handleRegister = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        const response = await axios.post('api/register', formData)

        console.log(response)
    }
    return (
        <>
            <form onSubmit={handleRegister}>
                <h1>Sign Up</h1>
                <input type="text" name='name' />
                <input type="text" name='email' />
                <input type="text" name='password' />
                <button type="submit">Register</button>
            </form>

        </>
    )
}

export default SignInPage