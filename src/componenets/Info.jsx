import React from "react"
import "../css/styles.css"

function Info() {
    return (
        <header>
            <img className="hero" src="https://th.bing.com/th/id/OIP.MV36-_uV-eBqK31aZCuKsQAAAA?w=144&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Me" />
            <h1 className="name">
                Faris <span className="accent">Althibani</span>
            </h1>
            <p className="talent">React Developer</p>
            <p className="website">FarisThibani.Website</p>
        </header>
    )
}

export default Info