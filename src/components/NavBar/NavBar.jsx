import styles from "./NavBar.module.css"

const NavBar = () => {
  return (  
    <div className={styles.nav}>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
    </div>
  )
}

export default NavBar;
