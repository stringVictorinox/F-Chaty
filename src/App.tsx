import { Route, Routes } from 'react-router-dom'
import LandingPage from './app/modules/LandingPage/LandingPage'
import Register from './app/modules/register/Register'
import Login from './app/modules/login/Login'


function App(){

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>  
    </div>
  )
}

export default App
