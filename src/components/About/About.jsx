import styles from "./About.module.css"

const AboutComp = () => {
  return (  
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.sideBySide}>
        <div className={styles.left}>
          <img id={styles.mountains} src="/assets/mountains.jpg" alt="chris smiling in the mountains" />
        </div>
        <div className={styles.right}>
          <p>
            I’m currently studying full stack development at General Assembly. Before pursuing software development, I spent 13 years working in sales and marketing primarily in e-commerce for furniture and interior design companies, ultimately leading 1stdibs.com’s trade sales organization where I was responsible for a team of 30 and doubled their business from $50MM to $100MM over the course of 3 years. 
          </p>
          <p>
            As a leader of large customer-facing teams, I spent a lot of time working with product and engineering as a key stakeholder representing the voice of the customer. Seeing how new products were built to increase customer engagement and sales was always one of my favorite parts of the job. This led me to studying software engineering at General Assembly. I can’t wait to join a team that actually builds new products and features when I graduate.
          </p>
          <p>
            Learning new programming languages has been really fun since one of my hobbies outside of work is studying foreign languages. I’m fluent in Spanish and conversational in Italian. My ability to learn new languages is translating well into software engineering. I’m picking up JavaScript, CSS, and HTML really fast and am looking forward to learning even more languages by the time I graduate.
          </p>
          <h3>Interests outside of engineering</h3>
          <ul>
            <li>Skiing</li>
            <li>Foreign languages, especailly Spanish and Italian</li>
            <li>Making homemade Italian food</li>
            <li>Board games</li>
            <li>Real estate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutComp
