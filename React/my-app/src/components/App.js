import React, { useState, useEffect} from 'react'
import Header from './Header'
import Custom from './Custom'


function App()
{
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('I ran ', counter)
    },[counter])

    function increase(){
        setCounter(counter+1)
    }

    function decrease(){
        setCounter(counter-1)
    }

    
    return <div>
        <Header/>
        <Custom name="ABC"/>
        <h1>Counter : {counter}</h1>
        <button onClick={increase}>Increase The Counter</button>
        <button onClick={decrease}>Decrease The Counter</button>
    </div>
}

export default App 