import reactLogo from './assets/react.svg'
import './App.css'
import Posts from './post'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Explor React</h1>

<ol>
  <li>Components</li>
  <li>JSX</li>
  <li>Props</li>
  <li>Event Handeler</li>
  <li>State</li>
  <li>Load datar</li>
</ol>
<hr></hr>
<Posts></Posts>
    </>
  )
}

export default App
