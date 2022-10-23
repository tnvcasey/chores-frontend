import React, {useState} from "react";

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

function handleSubmit(e){
    e.preventDefault()
    const userData = {
        username, 
        password, 
        password_confirmation: passwordConfirmation
    }
    fetch('http:/localhost:3000/users', {
        method: "POST",
        mode: 'no-cors',
        headers: { 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(userData),
    })
        .then(console.log(userData))
}
    return ( 
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br/>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <label htmlFor="username-input">Password:</label><br/>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <label>Confirm Password:</label><br/>
                <input
                    type="text"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                /><br/>
                <button>Create User</button>
            </form>

        </div>
    )

}


export default Login; 