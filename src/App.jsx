import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInformation from './Personal.jsx'
import EducationalBackground from './Educ.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <PersonalInformation
          firstName="Jewel Heart"
          lastName="Geronimo"
          middleName="Generale"
          address="Payompon, Mamburao, Occidental Mindoro"
          birthdate="September 16, 2004"
        />
        <EducationalBackground
          elementary="Dapi Elementary School"
          elementaryYear="2011-2017"
          juniorHigh="Occidental Mindoro National High School"
          juniorHighYear="2017-2020"
          seniorHigh="Occidental Mindoro National High School"
          seniorHighYear="2020-2022"
          college="Occidental Mindoro State College"
          collegeYear="Present"
        />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
