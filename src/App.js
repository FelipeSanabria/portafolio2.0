import React, { Component } from 'react';
import Hero from './components/hero'
import Project from './components/project'
import About from './components/about'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero></Hero>
        <Project
          side="Left"
          name="MrPotato.org"
          desc="Freelance project for a news blog. The site is centered y viral news, tops and quizzes. The design is content focused, using bright colors and a minimalistic style. The website is developed in Wordpress."
          img="mrpotato"
          color="#e10707"
          state="Active"
          link="http://mrpotato.org"
        />

        <Project
          side="Right"
          name="One Tropical Seeds"
          desc="Freelance project for a landing page. The desgin was made by another person, so I focused in use the best framework available for the requirements of the project. Using Vue.js for the Frontend, I was able to implement features like asynchronous internationalization (which is fancy for translation) and a better contact form experience."
          img="onetropicalseeds"
          color="#517c42"
          state="Active"
          link="http://onetropicalseeds.com/"
        />

        <Project
          side="Left"
          name="Evius.co"
          desc={<span>I worked on this project at <a href="https://mocionsoft.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00f0be', textDecoration: 'none' }}>Mocion</a>, it's a web app that let anyone to create and manage any kind of event. As part of the Frontend Team, i was in charge of the UI and UX of the entire app, to ensure that the users has a consistent experience across the site. The Frontend and Backend are developed with React.js.</span>}
          img="evius"
          color="#00f0be"
          state="Active"
          link="https://evius.co/"
        />

        <Project
          side="Right"
          name="Selecto"
          desc={<span>Web app project for a record company while I worked at <a href="https://mocionsoft.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#8f27a0', textDecoration: 'none' }}>Mocion</a>, designed to be place where artists and fans can interact directly. The backend of the app was developed in Laravel, and the frontend in Vue.js, when I was responsible for the UI and UX of the app.</span>}
          img="selecto"
          color="#8f27a0"
          state="Active"
          link="https://selectorecords.com/"
        />

        <Project
          side="Left"
          name="Emprendete"
          desc={<span>This was a really fun project that I worked on in my time at <a href="https://www.cannedhead.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#6c05e5', textDecoration: 'none' }}>CannedHead</a>. It was the redesign of the website for a entrepreneurship focused podcast, and we had to work with the SoundCloud API, so the podcast episodes could be listened in the website. The site was designed and developed using Webflow.</span>}
          img="emprendete"
          color="#6c05e5"
          state="Inactive"
        />

        <Project
          side="Right"
          name="Mision IO Eros"
          desc={<span>One of my first projects after I started working at the digital agency <a href="https://www.cannedhead.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#040620', textDecoration: 'none' }}>CannedHead</a>. This website contains a database of messages that a religious community wants to show to the world. This website is developed using a tool called Bubble.is</span>}
          img="misionioeros"
          color="#040620"
          state="Active"
          link="https://misionioeros.org/"
        />
        <About></About>
      </div>
    );
  }
}

export default App;
