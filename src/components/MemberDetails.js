import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function MemberDetails({members}){


    const [member, setMember] = useState([])
    const { id } = useParams
    console.log(id);

    useEffect(() => {
        fetch("http://localhost:3000/members/26")
        .then(res => res.json())
        .then((member) => console.log(member))
    }, [])

    return(
        <>
            <div>   
            </div>
            <h1>Add New Chore</h1>
            <form>
                <label>Description:</label>
                <input type="text" />
                <label>Directions:</label>
                <input type="text" />
                <label>Supplies:</label>
                <input type="text"/>
            </form>
        </>
    )
}

export default MemberDetails; 