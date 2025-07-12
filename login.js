import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function LoginPage() {
    const [email, setEmail] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithOtp({ email })
        if (error) alert(error.message)
        else alert('Check your email for login link!')
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send Magic Link</button>
        </form>
    )
}