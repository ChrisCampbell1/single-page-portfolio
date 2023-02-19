import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (  
    <div className={styles.nav}>
      <Link to='/about'>
        <img src="/assets/headshot.jpg" alt="headshot" id={styles.headshot}/>
        <h3>Chris Campbell</h3>
        <h5>Full Stack Engineer</h5>
      </Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavBar;
