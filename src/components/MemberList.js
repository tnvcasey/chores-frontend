import MemberCard from "./MemberCard";

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