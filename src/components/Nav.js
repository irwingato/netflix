import React from 'react'
import './Nav.css'

function Nav () {

    const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
    const avatar = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
    return (
        <div className="nav-container">
            <img className="nav-logo" src={logo} alt="NetFlix"></img>
            <img className="nav-avatar" src={avatar} alt="CAI-2023"></img>
        </div>
    )

}

export default Nav;