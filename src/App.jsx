import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import AddCoffee from './Components/AddCoffee/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee'
import CoffeeDetails from './Components/CoffeeDetails/CoffeeDetails'
import Signin from './Components/Signin/Signin'
import SignUp from './Components/SignUp/SignUp'
import AuthProvider from './Components/Provider/AuthProvider'
import Users from './Components/Users/Users'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main></Main>}>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/add-coffee' element={<AddCoffee></AddCoffee>}></Route>
              <Route path='/details/:id' element={<CoffeeDetails></CoffeeDetails>}></Route>
              <Route path='/update/:id' element={<UpdateCoffee></UpdateCoffee>}></Route>
              <Route path='/users' element={<Users></Users>}></Route>
              <Route path='/signin' element={<Signin></Signin>}></Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App