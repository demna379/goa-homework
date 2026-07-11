// const [divCol, change] = useState('bg-[white]')

// const yellow = () => {
//   change('bg-[yellow]')
// }

// const blue = () => {
//   change('bg-[blue]')
// }

// const red = () => {
//   change('bg-[red]')
// }

// const pink = () => {
//   change('bg-[pink]')
// }

// const brown = () => {
//   change('bg-[brown]')
// }

// useEffect(() => {
  //   console.log(`div ის ფერი არის ${divCol}`)
// },[divCol])

// return (
  //   <>
  //     <div className={`w-[300px] h-[300px] ${divCol}`}></div>
//     <button onClick={yellow}>yellow</button><br />
//     <button onClick={blue}>blue</button><br />
//     <button onClick={red}>red</button><br />
//     <button onClick={pink}>pink</button><br />
//     <button onClick={brown}>brown</button>
//   </>
// )

// შექმენით div, და 5 ცალი ღილაკი, yellow, blue, red, pink, brown, თითოს დაჭერაზე div ის ფერი უნდა გახდეს შესაბამისი, ამისათვის გამოიყენეთ useState

// ყოველ ჯერზე როცა შეცვლით ფერს console ში გაამოიტანეთ ტექსტი, div ის ფერი არის { color }

import { useState,useEffect } from "react"

function App() {

  const [count, SetCount] = useState(0)

  useEffect(() => {
    console.log(`current number: ${count}`)
  },[count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {
        SetCount(count+1)
      }}>increas</button>
      <button onClick={() => {
        SetCount(count-1)
      }}>decrease</button>
    </>
  )
}

export default App

