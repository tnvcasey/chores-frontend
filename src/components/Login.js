import React, { useState } from "react"; 

function Login({ handleLogin }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify({
                username,
                password})
        })
            .then((res) => res.json())
            .then((user) => handleLogin(user)); 
    }

    return (
        <div>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br/>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
                <label>Password:</label><br/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login; 

