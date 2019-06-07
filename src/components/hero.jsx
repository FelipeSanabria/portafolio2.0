import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)

export default class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="Hero-txt">
          <h1>Hi! <br /> I'm Felipe</h1>
          <h2>I'm making the web a beautiful place, one site at a time</h2>
        </div>
        <div className="Next-Section">
          <span>my work</span><FontAwesomeIcon className="Next-Icon" icon="chevron-down" />
        </div>
      </div>
    )
  }
}
