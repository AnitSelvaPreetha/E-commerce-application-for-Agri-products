import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">agriNite</div>
      <div className="nav-menu">
        <Link className='Link' to="/">
          <button className='btn-nav'>Home</button>
        </Link>
        <Link  className="link" to="/We">
                <button className="btn-nav">About Us</button>
              </Link>
              <Link  className="link" to="/Contact">
                <button className="btn-nav">Contact</button>
              </Link>
              <Link  className="link" to="/Login">
                <button className="btn-nav">Login</button>
              </Link>
              <Link  className="link" to="/Signup">
                <button className="btn-nav">Signup</button>
              </Link>
       
      </div>
      
    </div>
  )
}

export default Navbar
