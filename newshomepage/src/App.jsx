import { useState } from 'react'
import Main from './Components/Main'
import Header from './Components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Main />
            {/*<button onClick={() => setCount((count) => count + 1)}>*/}
            {/*  count is {count}*/}
            {/*</button>*/}

        </>
    );
}

export default App
