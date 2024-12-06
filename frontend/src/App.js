import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "About.js";
import FunZone from "FunZone.js";
import GetInvolved from "GetInvolved.js";
import Home from "Home.js";
import NavBar from "NavBar.js";
import Authentication from "./Login.js";

function App() {
  const [cards, setCards] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="App">
      {userRole ? (
        <Router>
          <div className="d-flex">
        {userRole && <NavBar userRole={ userRole} />}
            <div className="flex-grow-1 p-3">
              <h1 className="text-center">Phone cards App</h1>
              <Routes>
                <Route path="/homePage" element={<Home
                  cards={cards}
                  setCards={setCards}
                />} />
                <Route path="/getInvolved" element={<GetInvolved
                  cards={cards}
                  setCards={setCards}
                />} />
                <Route path="/funZone" element={<FunZone
                  cards={cards}
                  setCards={setCards}
                /> }/>
                <Route path="/aboutPage" element={<About
                  cards={cards}
                  setCards={setCards}
                /> }/>


                {/* This will be Screens for creating events, viewing requests to join, and looking at questions */}
                {/* {userRole === "admin" && ( 
                  <>
                    <Route path="/add-contact" element={<AddContact
                      cards={cards}
                      setCards={setCards}
                    />} />
                    <Route path="/deletecontact" element={<DeleteContact
                      cards={cards}
                      setCards={setCards}
                    />} />
                  </>
                )} */}
              </Routes>
            </div>
          </div>
        </Router>
      ) : (
        <Authentication
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          setUserRole={ setUserRole } />
      )}
    </div>
  );
}
export default App;