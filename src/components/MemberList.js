import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MemberList(){

    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("/members")
            .then((res) => res.json())
            .then((members) => setMembers(members))
    }, [])


    return(
        <div>
            <h1 className="family">My Family Members</h1>
            <ul className="card">
                {members.map((member) => (
                    <div>
                        <h2>{member.name}</h2>
                        <img src={member.picture} width="400" height="300"/><br/>
                        <Link to={`/members/${member.id}`} >View My Chores</Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default MemberList; 