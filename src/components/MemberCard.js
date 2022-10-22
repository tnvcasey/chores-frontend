import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

function MemberCard({member}){

    const { id } = useParams(); 

    console.log(member)

    return (
        <div>
            <h1><NavLink to={`/members/${id}`}>{member.name}</NavLink></h1>
            <img src={member.picture} width="400" height="300"/>
        </div>
    )
}

export default MemberCard; 