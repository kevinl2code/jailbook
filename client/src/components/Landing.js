import React from 'react'

import jail from '../images/landing.webp'

const Landing = () => {
    return(
        <div>
            <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col s4 offset-s4">
                    <img src={jail} alt="robbers behind bars" style={{ maxWidth: "100%", borderRadius: "5px" }} />
                </div>
            </div>
            <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col s8 offset-s2 center-align">
                <h5>Welcome to Jail Book.  </h5>
                    <p>This application allows you to search a database with arrest records from all across the United States.  Choose the Search option in the menu to get started!</p>
                </div>
            </div>
        </div>
    )
}

export default Landing