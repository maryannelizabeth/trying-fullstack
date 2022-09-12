import React from 'react'

function Header() {
  return (
    <div className="header">
      <h1>
        <a href="/" className="headerlink">
          {' '}
          Classroom Toolbox{' '}
        </a>
        <img className="toolkitImg" src="./images/toolkit.png" alt="toolkit" />
      </h1>
    </div>
  )
}

export default Header
