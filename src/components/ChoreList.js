import React, { useState, useEffect }from "react"
import ChoreCard from "./ChoreCard"


function ChoreList(){

    const [chores, setChores] = useState([])

    useEffect(() => {
        fetch("/chores")
          .then((res) => res.json())
          .then((chores) => setChores(chores))
      }, [])
      
            function handleAddChore(newChore){
              const updatedChores = [...chores, newChore]
              setChores(updatedChores)
            }

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