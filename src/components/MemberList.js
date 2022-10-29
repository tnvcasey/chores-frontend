import MemberCard from "./MemberCard";
import React, {useEffect, useState} from "react";

function MemberList(){

    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/members")
            .then((res) => res.json())
            .then((members) => setMembers(members))
    }, [])

    return(
        <div>
            <ul className="card">
                {members.map((member) => (
                    <MemberCard member={member} />
                ))}
            </ul>
        </div>
    )
}

export default MemberList; 