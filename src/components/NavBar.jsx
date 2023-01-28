import { Link } from "react-router-dom";

const NavBar = () => {
  return (  
    <div className="nav">
      <Link to='/'>
        <img src="/assets/headshot.jpg" alt="headshot" id="headshot"/>
        <h3>Chris Campbell</h3>
      </Link>
      
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
