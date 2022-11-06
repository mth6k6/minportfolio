
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'

 function About() {
  return (
    <div>
        <Navbar/>
        <h2 className={styles.description}> About Me</h2>

    <h4 className={styles.description}> I am Looking for an Internship/Graduate programme in IT field. </h4>

                <p2> I have a 4 Years Diploma in Information and Communication Technology (ICT) from Durban University of Technology.
                 I have a strong background in various programming languages and frameworks such as 
                 Java, JavaScript, C#, SQL Server, Node.js, Angular and ASP.NET .etc. I am a self-motivated person, 
                 I work well individually or with a team. My communication and organizational skills are exceptional, 
                 I am also passionate and willing to learn.I am keen to develop new skills and use existing skills to perform
                  a variety of tasks successfully. If given an opportunity I believe that I can be a great asset to any team. </p2>
            

                  <h2 className={styles.description}> Soft Skills</h2>

<div className={styles.description}>
        <ul>Storytelling</ul>
         <ul>Adaptability</ul>
         <ul>Problem Solving</ul>
         <ul>Verbal Communication</ul>
         
        
         </div>
</div>

  )}

  export default About