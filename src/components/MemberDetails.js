import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function MemberDetails({handleAddChore}){


    const [member, setMember] = useState([])
    const { id } = useParams(); 

    const [description, setDescription] = useState("")
    const [details, setDetails] = useState("")

    useEffect(() => {
        fetch(`/members/${id}`)
        .then(res => res.json())
        .then((member) => setMember(member))
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        const choreData = {
            description: description, 
            details: details
        }
        fetch("/chores", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(choreData), 
        })
            .then((res) => res.json())
            .then((newChore) => {
                handleAddChore(newChore)
            })
    }



    return(
        <>
            <div> 
                <h1 className="detail">{member.name}</h1>
                <img src={member.picture} width="600" height="500" className="center" /><br/>
                <h2 className="chores">My Chores</h2>
                <div>
                    {member.chores?.map((chore) => (
                        <p>~{chore.description} : {chore.details}</p>
                    ))}
                </div>
            </div>
            <h1 className="chore">Add New Chore</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Directions:</label>
                <input type="text" value={details} onChange={(e) => setDetails(e.target.value)}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default MemberDetails; 