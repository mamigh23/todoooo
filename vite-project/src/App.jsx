import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {  <a href="https://vitejs.dev" target="blank">

        </a>}
        <a href="https://www.fenerbahce.org/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> + FENERBAHÇE 1907 +</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1907)}>
          DOĞDUN {count} DE
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
    TIKLA VE ÖĞREN EFSANENİN TARİHİNİ
      </p>
      <video src="https://www.youtube.com/watch?v=vNz_yCWZD-I" width={100} height={"100px"}></video>
    </>
  )
}

export default App
