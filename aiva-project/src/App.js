import { useState} from 'react'
import { Route , Routes} from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Shop from './Components/Shop/Shop'
import Usage from './Components/Usage/Usage'
import Home from './Components/Home/Home'
import Community from './Components/Community/Community'
import Login from './Components/Login/Login'
import ReportProblem from './Components/Report Problem/ReportProblem'
import Profile from './Components/Profile/Profile'
import EditProfile from './Components/Profile/EditProfile'
import Add from './Components/Add device/Add'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import httpClient from './httpClient'
function App() {


  
  // Setting state
  const [showSignUp,setShowSignUp] = useState(false) // state for showing form
  const [login,setLogin] = useState(false) // state for changing navbar 
  const [form,setForm] = useState(true) // state for form type
  const [reportProblem,setReportProblem] = useState(false) // state for reporting problem
  

  // changing form 
  function toggleForm () {
    setForm(prevState => !prevState)
  }

  // function for clicking sign in
  function toggleSignInOn () {
    setShowSignUp(true)
    setForm(false)
  }

  // function for clicking create account
  function toggleCreateAccount () {
    setShowSignUp(true)
    setForm(true)
  }
  // function for exiting form
  function toggleOff () {
    setShowSignUp(false)
  }

  // function for clicking Change Account
  function toggleLogin () {
    setLogin(prevState => !prevState)
    setShowSignUp(true)
  }

  // function for clicking Sign Out
  function toggleLoginOff () {
    setLogin(prevState => !prevState)
    setShowSignUp(false)
  }
  
  // function for changing navbar 
  function toggleShowLogin () {
    setLogin(prevState => !prevState)
  }

  // function for toggling report problem
  function toggleReportProblem () {
    setReportProblem(prevState => !prevState)
  }

  return (
    <div className="App">
      <Navbar
        toggleForm = {toggleForm}
        toggleLogin = {toggleLogin}
        login = {login}
        toggleLoginOff = {toggleLoginOff}
        toggleCreateAccount = {toggleCreateAccount}
        toggleShowLogin = {toggleShowLogin}
        toggleSignInOn = {toggleSignInOn}
        toggleReportProblem = {toggleReportProblem}
      /> 
      <main className='app--main'>
        <Routes>
          <Route path = '/' element = {<Home toggleCreateAccount = {toggleCreateAccount} />}></Route>
          <Route path = '/shop' element = {<Shop />}></Route>
          <Route path = '/usage' element = {<Usage />}></Route>
          <Route path = '/community' element = {<Community />}></Route>
          <Route path = '/account' element = {<Profile />}></Route>
          <Route path = '/account/edit' element = {<EditProfile />}></Route>
          <Route path = '/account/add-device' element = {<Add />}></Route>
          <Route path='*' element = {<PageNotFound />}></Route>
        </Routes>
        
        {showSignUp && <Login 
          toggleForm = {toggleForm}
          toggleLogin = {toggleLogin}
          toggleOff = {toggleOff}
          login = {login}
          form = {form}
         />}
         {reportProblem && <ReportProblem 
          toggleReportProblem = {toggleReportProblem}
         />
         }
      </main>
      
    </div>
      
  )
}



export default App;
