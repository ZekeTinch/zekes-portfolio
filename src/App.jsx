import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './Css/style.css'

function App() {

  return (
    <div className = "stack">
      <Header/>
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
