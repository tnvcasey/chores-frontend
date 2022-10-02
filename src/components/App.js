import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MemberList from "./MemberList";
import Header from "./Header";
import ChoreList from "./ChoreList";
import RoomList from "./RoomList";


function App() {

    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/members")
            .then((res) => res.json())
            .then((members) => setMembers(members))
    }, [])

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <MemberList members={members}/>
                </Route>
                <Route exact path='/chores'>
                    <ChoreList />
                </Route>
                <Route exact path='/rooms'>
                    <RoomList />
                </Route>
            </Switch>
        </div>
    )
}

export default App; 