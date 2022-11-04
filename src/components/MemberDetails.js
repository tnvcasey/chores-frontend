import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function MemberDetails(){


    const [member, setMember] = useState([])
    const { id } = useParams(); 

    const [description, setDescription] = useState("")
    const [details, setDetails] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/members/${id}`)
        .then(res => res.json())
        .then((member) => setMember(member))
    }, [])


    return(
        <>
            <div> 
                <h1 className="detail">{member.name}</h1>
                <img src={member.picture} width="600" height="500" className="center" /><br/>
                <h2>My Chores</h2>
                <div>
                    {member.chores.map((chore) => (
                        <p>~{chore.description} : {chore.details}</p>
                    ))}
                </div>
            </div>
            <h1>Add New Chore</h1>
            <form>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Directions:</label>
                <input type="text" value={details} onChange={(e) => setDetails(e.target.value)}/>
            </form>
        </>
    )
}

export default MemberDetails; 