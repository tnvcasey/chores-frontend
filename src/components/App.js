import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MemberList from "./MemberList";
import NewMember from "./NewMember";
import Login from "./Login";
import Signup from "./Signup";


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
          <NavBar user={user} setUser={setUser} handleLogout={handleLogout} />
          <main>
            {user ? (
            <Switch>
              <Route path="/new">
                <NewMember user={user} />
              </Route>
              <Route path="/">
                <MemberList />
              </Route>
            </Switch>
            ) : (
            <Switch>
              <Route path="/signup">
                <Signup />
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