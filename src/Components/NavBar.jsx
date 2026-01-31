import { Link } from "react-router-dom";
import React from "react"
function NavBar() {

  const [isOpen, setIsOpen] = React.useState()

  const handleIsopen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav>
        <h1>Daily Pivot</h1>
        <div className="hamburger" onClick={handleIsopen}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : " "}`}>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
