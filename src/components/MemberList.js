import MemberCard from "./MemberCard";
import { useParams } from "react-router-dom"

function MemberList({members}){
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