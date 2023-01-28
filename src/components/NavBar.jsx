import { Link } from "react-router-dom";

const NavBar = () => {
  return (  
    <div className="nav">
      <Link to='/about'>
        <img src="/assets/headshot.jpg" alt="headshot" id="headshot"/>
        <h3>Chris Campbell</h3>
        <h5>Full Stack Engineer</h5>
      </Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavBar;
