import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Route,Routes } from "react-router-dom";
import { useState  } from "react";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(

    <div className ="w-screen h-screen bg-richblack-900 fkex flex-col">
      <Navbar isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path ="/" element = {<Home isLogged={isLoggedIn}/>}/>
        <Route path ="/Login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path ="/signup" element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path ="/dashboard" element = {

            <PrivateRoute isLoggedIn={isLoggedIn}>
            
               <Dashboard/>
            </PrivateRoute>
        }/>
        
      </Routes>
    </div>
  );
}

export default App;
