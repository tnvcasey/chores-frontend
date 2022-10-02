
function MemberCard({member}){

    return (
        <div>
            <h1>{member.name}</h1>
            <img src={member.picture} width="400" height="400"/>
        </div>
    )
}

export default MemberCard; 