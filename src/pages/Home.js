import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
        <div className="about">
            <h2>Hi there, my name is Damola.</h2>
            <div className="prompt">
                <p>A Fullstack developer with a passion for learning and creating.</p>
                <LinkedInIcon />
                <a href="mailto:Okedamola01@gmail.com">
                    <EmailIcon />
                </a>
                <a href="https://github.com/Okedamola01" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>ReactJS, Redux, HTML, CSS, React Native,
                        TailwindCSS, SASS, MaterialUI, StyledComponents.
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>NodeJS, Expressjs, MongoDB, Mongoose, CassandraDB, MySQL,
                        AWS.
                    </span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript, Python, C++, C, Java</span>
                </li>
                <li className="item">
                    <h2>Forex</h2>
                    <span>Currency pair trading, Exotic pair trading and Synthetic indices trading</span>
                </li>
                <li className="item">
                    <h2>Design</h2>
                    <span>Canva</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home