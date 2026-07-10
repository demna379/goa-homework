import { useState } from "react"

function App() {
// შექმენით counter, გამოჩნდეს count და იყოს 2 ღილაკი, გამზრდელი და მკლებადი

// ასევე იყოს ღილაკი რომელიც გაამრავლებს count ს 2 ზე

// გამოიყენეთ useState


  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count+1)
      }}>increase</button>
      <button onClick={() => {
        setCount(count-1)
      }}>decrease</button>
      <button onClick={() => {
        setCount(count*2)
      }}>multiply by 2</button>
    </>
  )
}

export default App
