import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import RouteProtected from './RouteProtected'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

function App() {
  const [isLoged, setIsLoged] = useState(
    () => window.localStorage.getItem("loggedUser") !== null
  );

  const [userName, setUserName] = useState(
    () => {
      const loggedUser = window .localStorage.getItem("loggedUser");
      console.log("Imprimiendo el loggedUser")
      console.log(loggedUser)
      return loggedUser ? JSON.parse(loggedUser).userName : "";
    }
  );

  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={{ isLoged, setIsLoged, userName, setUserName }}>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          
          <Route element={<RouteProtected session={isLoged}/>}>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
            {/* <Route path='/dashboard' element={<Dashboard />} ></Route> */}
          </Route>

        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
