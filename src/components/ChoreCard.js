function ChoreCard({chore}){

    return(
        <div>
            <ul>
                <h2>*{chore.description}*</h2>
                <h4>-Supplies Needed: {chore.supplies}</h4>
                <li>Instructions: {chore.directions}</li>
            </ul>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </div>

    )

}

export default ChoreCard; 