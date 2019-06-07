import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h2 className="About-title">
          About me
        </h2>
        <p className="About-txt">
          I'm a Frontend Web Developer living in Bogotá, Colombia. I have 3+ years of experience working in several digital agencies and as a Freelance developer, where I tried to focus my work to create awesome websites, both in design and in function, using the lastest technologies. I have experience in React.js, Angular.js and Vue.js, as well as in tolls such as Wordpress and Webflow.
        </p>
        <p className="About-txt">
          You can see a lot of my work on <a href="https://github.com/FelipeSanabria" target="_blank" rel="noopener noreferrer">Github</a>, or contact me through <a href="https://www.facebook.com/FelipeSanabria" target="_blank" rel="noopener noreferrer">Facebook</a> or <a href="https://www.linkedin.com/in/felipe-sanabria-a91538138/" target="_blank" rel="noopener noreferrer">Linkedin</a>.
        </p>
        <p className="About-txt">
          I am currently available for freelance and remote jobs. If you have an offer or just want to talk to me about some really cool project, you can <a href="mailto:felipesanabriap@gmail.com">send me an email</a> or <a href="https://wa.me/573153376365" target="_blank" rel="noopener noreferrer">message me in Whatsapp</a>.
        </p>
      </div>
    )
  }
}
