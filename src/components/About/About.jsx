import styles from "./About.module.css"

const About = () => {  
  return (  
    <div className={styles.container} id="about">
      <h1><span>&lt; </span>About Me<span> /&gt;</span></h1>
      <div className={styles.sideBySide} >
        {/* <div ref={leftRef}className={`${styles.left} ${leftIsVisible ? ' animate__animated animate__slideInLeft animate__slow' : ''}`}> */}
        <div className={styles.left}>
          <img id={styles.mountains} src="/assets/mountains.jpg" alt="chris smiling in the mountains" />
        </div>
        <div className={styles.right}>
        {/* <div ref={rightRef} className={`${styles.right} ${rightIsVisible ? ' animate__animated animate__slideInRight animate__slow' : ''}`}> */}
          <p>
            I'm a fullstack engineer about to graduate from General Assembly's software engineering bootcamp and I'd love to join your team! I have experience ranging from creating beautiful frontend React apps to building RESTful APIs with Express and Node.
          </p>
          <p>
            Before transitioning into software engineering, I spent 13 years working in sales and marketing primarily for e-commerce companies in the furniture and interior design space.
          </p>
          <p>
            I'm open to rolls based in the Denver metro as well as remote opportunities. I also have the bandwidth to take on freelance development work. Thanks for stopping by and I look forward to working with you!
          </p>
          <h3>Interests outside of engineering<span>:</span></h3>
          <ul>
            <li>Skiing</li>
            <li>Foreign languages, I'm fluent in Spanish and very proficient in Italian</li>
            <li>Making homemade Italian food</li>
            <li>Board games</li>
            <li>Real estate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
