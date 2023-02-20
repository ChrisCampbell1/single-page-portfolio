import styles from "./Skills.module.css"

const Skills = () => {
  return ( 
    <div className={styles.container} id="skills">
      <h1>Skills</h1>
        <div className={styles.sideBySide}>
          <div className={styles.left}>
            <h3>Frontend:</h3>
              <ul>
                <li>
                  JavaScript
                </li>
                <li>
                  TypeScript
                </li>
                <li>
                  React
                </li>
                <li>
                  HTML
                </li>
                <li>
                  CSS
                </li>
                <li>
                  EJS
                </li>
              </ul>
          </div>
          <div className={styles.center}>
            <h3>Backend:</h3>
            <ul>
                <li>
                  Node
                </li>
                <li>
                  Express
                </li>
                <li>
                  RESTful APIs
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  PostgreSQL
                </li>
                <li>
                  Oauth and JWT
                </li>
              </ul>
          </div>
          <div className={styles.right}>
            <h3>Other:</h3>
            <ul>
              <li>
                Leadership
              </li>
              <li>
                Strategic Planning
              </li>
              <li>
                Problem Solving
              </li>
              <li>
                Data Analyis
              </li>
              <li>
                CRM Administration
              </li>
              <li>
                Collaboration
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Skills;
