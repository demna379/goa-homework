import { useState } from "react"

function App() {

// გქონდეთ ერთი დივ, width: 300px, height: 300px და საწყისი backgroundColor იყოს black

// გქონდეთ ექვსი ცალი ღილაკი, yellow, red, green, blue, orange, brown და თითო ღილაკზე დაჭერისას უნდა შეიცვალოს div ის ფერი

// ეს ფერი უნდა იყოს state, რომელსაც შეცვლით stateSetter ით, გამოიყენეთ useState hook ი
  
  const [color,new_color] = useState('black')
  
  return (
    <>
      <div style={{ width: '300px', height: '300px', backgroundColor: color }}></div>
      <button onClick={() => {
        new_color("yellow")
      }}>yellow</button>
      <button onClick={() => {
        new_color('red')
      }}>red</button>
      <button onClick={() => {
        new_color('green')
      }}>green</button>
      <button onClick={() => {
        new_color('blue')
      }}>blue</button>
      <button onClick={() => {
        new_color('orange')
      }}>orange</button>
      <button onClick={() => {
        new_color('brown')
      }}>brown</button>
    </>
  )
}

export default App
