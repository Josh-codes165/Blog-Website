import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <h1>Daily Pivot</h1>
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
