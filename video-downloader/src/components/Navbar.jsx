import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>📥 Video Downloader</h1>
      </div>
      <ul className="navbar-menu">
        <li className={isActive('/')}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/downloads')}>
          <Link to="/downloads">Downloads</Link>
        </li>
        <li className={isActive('/history')}>
          <Link to="/history">History</Link>
        </li>
        <li className={isActive('/settings')}>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
