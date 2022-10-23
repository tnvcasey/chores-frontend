import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


function MemberDetails(){

    const [member, setMember] = useState([])
    const { id } = useParams(); 

    useEffect(() => (
        fetch(`/members/${id}`)
            .then(res => res.json())
            .then((member) => setMember(member))
    ), [])

    return(
        <div>
            <h1>MY CHORES</h1>
            <h2>{member.name}</h2>
            <img src={member.picture} />
        </div>

    )
}

export default MemberDetails; 