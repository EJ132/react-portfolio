import React from "react";
import "./App.css";
import lostPuppers from "./Images/lostpuppers.png";
import cleverGerman from "./Images/clevergerman.png";
import nowPlaying from "./Images/nowplaying.png";
import Project from "./Components/Project.js";
import jaquezLaw from "./Images/jaquezlaw.png";
import itrustdash from "./Images/itrustdash.png";
import cityboibbq from "./Images/cityboibbq.png";
import sbsc from "./Images/sbsc.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function App() {
  return (
    <div className="flex-row min-h-100 min-w-100">
      <div className="h-screen flex flex-col pb-20 lg:pb-52 justify-center overflow-hidden bg-zinc-900 text-center">
        <p className="w-full text-white text-center text-3xl lg:text-7xl underline decoration-emerald-300 underline-offset-4">
          EJ Gonzalez
        </p>

        <p className="text-white pt-8 text-md lg:text-xl">
          React | React Native | Redux | TypeScript | GraphQL | Node | Express |
          PostgreSQL
        </p>

        <p className="max-w-4xl text-center mx-auto pt-4 px-4 lg:px-0 text-sm lg:text-md">
          Hey there, thanks for checking out my portfolio. Here's a little bit
          about myself... I am a passionate, energetic, engineer who loves to
          create all sorts of applications. I graduated from a coding bootcamp
          called Thinkful Inc. Since graduating in 2018, I have built 5+
          professional production ready applciations from ground up. My goal is
          to be the best engineer I can be and work with lots of great people
          along the way. If your interested in working with me feel free to
          reach out :)
        </p>

        <div className="flex flex-row justify-center pt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto: ejg132@gmail.com?subject=Hey There! Curious for my Resume?"
          >
            <FiMail color="white" size={42} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ej-gonzalez/"
            className="px-4"
          >
            <FaLinkedin color="white" size={42} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/EJ132"
          >
            <FaGithub color="white" size={42} />
          </a>
        </div>
      </div>

      <div className="w-100 h-fill bg-zinc-900 overflow-hidden">
        <h1 className="text-center lg:text-left text-3xl lg:text-7xl mb-8 px-11">
          Projects
        </h1>

        <div className="flex flex-col lg:flex-row flex-wrap" id="projects">
          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12">
            <Project
              title="iTrustCapital"
              front="React Native, GraphQL"
              back=" "
              details="Worked on Front End team to deliver iTrustCapital, 
              a software platform that allows you to buy and sell cryptocurrency, 
              gold, and silver in your self-directed retirement account, with more than $5.5 billion 
              in transactions and 150,000+ client accounts."
              img={itrustdash}
              live="https://itrustcapital.com/"
            />
          </div>

          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12 mt-8 lg:mt-0">
            <Project
              title="Lost Puppers"
              front="Javascript, React"
              back="Node.js, MySql, Postgres, AWS S3, Express"
              details="Lost Puppers is an application I made to help communities find their lost dogs. 
              Even if you don't have a dog you can still help others by finding their dogs. 
              This was my first Full-Stack project and was built to help practice with the flow of 
              the real life application process."
              img={lostPuppers}
              live="https://lostpuppers.netlify.com/"
              repo="https://github.com/EJ132/ej-capstone-lost-puppers"
            />
          </div>

          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12 mt-8 lg:mt-16">
            <Project
              title="Clever German"
              front="Javascript, React"
              back="Node.js, MySql, Postgres, Express"
              details="Clever German is an application I made to help practice German with the use
              of DSA (Data Structures & Algorithms). I used linked 
              list to rotate through the cards based on a correct or incorrect user input. This 
              was built in the friendly matter of a language learning enviroment."
              img={cleverGerman}
              live="https://clevergerman.netlify.com/"
              repo="https://github.com/EJ132/EJ-Daniel-Repetition-Capstone"
            />
          </div>

          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12 mt-8 lg:mt-16">
            <Project
              title="Now Playing"
              front="Javascript, React"
              back="Node.js, MySql, Postgres, Express"
              details="Now Playing is
              a watch party application where you can go watch movies with others at the same time.
              It was 
              my responsibility everyday to make sure the work was split evenly, check the master branches,
              solve any related issues, and keep track of where we were in the project."
              img={nowPlaying}
              live="https://playing-phi-ten.now.sh/"
              repo="https://github.com/thinkful-ei-gecko/NowPlaying-Client"
            />
          </div>

          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12 mt-8 lg:mt-16">
            <Project
              title="South Bay Strength Co."
              front="Squarespace"
              details="E-Commerce site for San Pedro power lifting gym. Built this site with pos, categories, and bulk shipping.
              I also added the feature for memberships and scheduling 1 on 1's using gymmaster's API."
              img={sbsc}
              live="https://southbaystrengthco.com"
              repo=""
            />
          </div>

          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12 mt-8 lg:mt-16">
            <Project
              title="CityBoi BBQ"
              front="Squarespace"
              details="E-Commerce site for a food startup called CityBoi BBQ. The site includes recipes, events, showcases, and more.
              Designed and worked through project single handed."
              img={cityboibbq}
              live="https://www.cityboi-bbq.com/"
              repo=""
            />
          </div>

          <div className="lg:h-1/2 w-full lg:w-1/2 px-4 lg:px-12 mt-8 lg:mt-16 mb-16">
            <Project
              title="Jaquez Law"
              front="React, Bootstrap"
              details="Built a landing page using React and Bootstrap for a law firm. This site also has a neat feature to translate the
              content from English to Spanish to serve both cultures."
              img={jaquezLaw}
              live="https://jaquezlaw.netlify.app/"
              repo=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
