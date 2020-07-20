import React from 'react'

const About = () => {
    return (
        <div className="about">
            <h1 style={styleAbout}>About</h1>
            <p style={styleText}>TodoList App created with React.js</p>
        </div>
    )
}

const styleAbout = { 
    textAlign: 'center',
    letterSpacing: '2px',
    marginTop: '.5em'
}

const styleText = {
    textAlign: 'center',
}

export default  About
