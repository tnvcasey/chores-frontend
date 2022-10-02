import React, { useState, useEffect }from "react"

function ChoreList(){

    const [chores, setChores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/chores")
            .then((res) => res.json())
            .then((chores) => console.log(chores))
    }, [])

    return(
        <div>These are the chores</div>
    )
}

export default ChoreList; 