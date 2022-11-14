import React, { useState, useEffect }from "react"
import ChoreCard from "./ChoreCard"


function ChoreList({chores}){

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