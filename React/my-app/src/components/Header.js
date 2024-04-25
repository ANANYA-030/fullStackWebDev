import React from 'react'

const amIAbove18 = false
function Header() {
    return <header>
        <h1>This is header {0+1}</h1>
        <h1>{amIAbove18 ? <p>I am above 18</p> : <p>I am not above 18</p>}</h1>
    </header>
}

export default Header