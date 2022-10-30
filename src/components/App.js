import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MemberList from "./MemberList";
import NewMember from "./NewMember";
import Login from "./Login";
import Signup from "./Signup";
import ChoreList from "./ChoreList";


function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, []);

      function handleLogin(user) {
        setUser(user)
      }

      function handleLogout(){
        setUser(null)
      }

      return (
        <>
          <h1>Family Chore Tracker</h1>
          <NavBar user={user} setUser={setUser} handleLogout={handleLogout} />
          <main>
            {user ? (
            <Switch>
              <Route path="/members">
                <MemberList />
              </Route>
              <Route path="/chores">
                <ChoreList />
              </Route>
              <Route path="/new">
                <NewMember user={user} />
              </Route>
            </Switch>
            ) : (
            <Switch>
              <Route path="/signup">
                <Signup setUser={setUser}/>
              </Route>
              <Route path="/login">
                <Login handleLogin={handleLogin} />
              </Route>
            </Switch>
            )}
          </main>
        </>
      );
}

export default App; 