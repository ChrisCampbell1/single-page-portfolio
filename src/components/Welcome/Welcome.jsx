import styles from "./Welcome.module.css"

const Welcome = () => {
  return (  
    <div className={styles.container}>
      <h3>Hi!</h3>
      <h1>I'm Chris</h1>
      <img id={styles.headshot} src="/assets/headshot.jpg" alt="headshot" />
      <h3>A Fullstack Developer based in Denver, Colorado</h3>
      <div className={styles.buttons}>
        <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Welcome;
