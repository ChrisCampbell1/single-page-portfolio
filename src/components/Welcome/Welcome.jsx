import styles from "./Welcome.module.css"
// import { useInView } from "react-intersection-observer"

const Welcome = () => {
  // const { ref: heroRef, inView: heroIsVisible } = useInView()
  return (  
    <div className={styles.container}>
      <div id={styles.hero} className={' animate__animated animate__slideInRight animate__slow'}>
      {/* <div ref={heroRef} id={styles.hero} className={`${heroIsVisible ? ' animate__animated animate__slideInRight animate__slow' : ''}`}> */}
      <h1>Hi, I'm Chris Campbell</h1>
      <h1>A <span>fullstack developer</span></h1>
      <h1>based in Denver, CO.</h1>
      </div>
      <div className={styles.buttons}>
        <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    // <div className={styles.container}>
    //   <h3>Hi!</h3>
    //   <h1>I'm Chris</h1>
    //   <img id={styles.headshot} src="/assets/headshot.jpg" alt="headshot" />
    //   <h3>A Fullstack Developer based in Denver, Colorado</h3>
    //   <div className={styles.buttons}>
    //     <a href="/assets/chris-campbell-resume.pdf" download>Resume</a>
    //     <a href="#contact">Contact</a>
    //   </div>
    // </div>
  )
}

export default Welcome;
