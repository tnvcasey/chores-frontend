import React, { useState, useEffect }from "react"
import ChoreCard from "./ChoreCard"


function ChoreList(){

    const [chores, setChores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/chores")
            .then((res) => res.json())
            .then((chores) => setChores(chores))
    }, [])

    return(
        <div>
            <h1 className="chorelist">Chores That Need To Be Done</h1>
            <ul>
                {chores.map((chore) => (
                    <ChoreCard chore={chore}/>
                ))}
            </ul>
        </div>
    )
}

export default ChoreList; 