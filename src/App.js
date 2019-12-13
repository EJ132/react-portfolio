import React from 'react';
import './App.css';
import lostPuppers from './Images/lostpuppers.png'
import cleverGerman from './Images/clevergerman.png'
import nowPlaying from './Images/nowplaying.png'
import Project from './Components/Project.js'
import monitor from './Images/monitor.png'
import backend from './Images/backend.png'
import database from './Images/database.png'
import gmail from './Images/gmail.png'
import linkedin from './Images/linkedin.png'
import github from './Images/github.png'

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <ul>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li> 
          <li><a href='#aboutme'>About Me</a></li> 
          <li><a href='#contact'>Contact</a></li>   
        </ul>
      </nav>

      <div className='Right_Section'>

        <div className='Home_Section'>
        <div className='middle'>
          <header className="App-header">EJ Gonzalez</header>
          <p>"Inovating your ideas into reality with Full-Stack Development..."</p>
        </div>
        </div>


        <div className='Project_Section' id='projects'>
            <header>Projects</header>
            <ul>
              <Project 
              title='Lost Puppers' 
              front='Javascript, React' 
              back='Node.js, MySql, Postgres, AWS S3, Express'
              details="Lost Puppers is an application I made to help communities find their lost dogs. 
              Even if you don't have a dog you can still help others by finding their dogs. 
              This was my first Full-Stack project and was built to help practice with the flow of 
              the real life application process." 
              img={lostPuppers}
              live='https://lostpuppers.netlify.com/'
              repo='https://github.com/EJ132/ej-capstone-lost-puppers'/>
              <Project 
              title='Clever German' 
              front='Javascript, React' 
              back='Node.js, MySql, Postgres, Express'
              details="Clever German was a duo built application made to help practice with the use
              of DSA (Data Structures & Algorithms). In this application we chose to use linked 
              list to rotate through the cards based on a correct or incorrect user input. This 
              was built in the friendly matter of a language learning enviroment." 
              img={cleverGerman}
              live='https://clevergerman.netlify.com/'
              repo='https://github.com/EJ132/EJ-Daniel-Repetition-Capstone'/>
              <Project 
              title='Now Playing' 
              front='Javascript, React' 
              back='Node.js, MySql, Postgres, Express'
              details="Now Playing was a 3 week group project that consisted of 5 people including myself. The app is
              a watch party related type of application where you can go watch movies with others at the same time
              or see people's reactions to certain movies. My role in this project was the project manager. It was 
              my responsibility everyday to make sure each individual had something to work on, the work was split evenly, check the master branches,
              solve any related issues, and keep track of where we were in the project. It was a great experience
              especially since my group cooperated great." 
              img={nowPlaying}
              live='https://playing-phi-ten.now.sh/'
              repo='https://github.com/thinkful-ei-gecko/NowPlaying-Client'/>
            </ul>
        </div>

        <div className='Skills_Section' id='skills'>
          <header>Skills</header>
            <ul>
              <li>
                <div className='skill_bg blue'/>
                <img className='skillImg' src={monitor} alt='monitor'/>
                  <ul>
                    <li>React</li>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                  </ul>
              </li>
              <li>
                <div className='skill_bg yellow'/>
                <img className='skillImg' src={backend} alt='monitor'/>
                  <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>AWS</li>
                  </ul>
              </li>
              <li>
                <div className='skill_bg red'/>
                <img className='skillImg' src={database} alt='monitor'/>
                  <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                  </ul>
              </li>
            </ul>
        </div>


        <div className='AboutMe_Section' id='aboutme'>
          <header>About Me</header>
          <p>Hey there, my name is EJ Gonzalez. I am a passionate energetic coding 
          enthusiast who loves to create web applications. I graduated from Thinkful 
          Inc. Engineering Immersion program. Due to my past experience managing and 
          the many hobbies I include myself in I have been able to attain a valuable 
          skill set. Assiduous, focused, and determined are only the start of describing me 
          but, I am eager to demonstrate my leadership abilities and work on various projects 
          with a team that shares my passions.</p>
        </div>

        <div className='Contact_Section' id='contact'>
          <header>Contact Me</header>
          <div>
            <a target='_blank' rel="noopener noreferrer" href='mailto: ejg132@gmail.com?subject=Hey There! Curious for my Resume?'><img src={gmail} alt='gmail'/></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/ej-gonzalez/'><img src={linkedin} alt='Linked In'/></a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/EJ132'><img src={github} alt='github'/></a>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
