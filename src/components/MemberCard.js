import React from "react"

function MemberCard({member}){

    return (
        <div>
            <h2>{member.name}</h2>
            <img src={member.picture} width="400" height="300"/>
        </div>
    )
}

export default MemberCard; 