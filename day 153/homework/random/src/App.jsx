//   3. პარაგრაფის ტექსტის შეცვლა

//   შექმენი <p> და <button>.

//     <p>-ს მიაბი ref
//       ღილაკზე დაჭერისას პარაგრაფის ტექსტი შეიცვალოს:
//       Hello World → Text changed!


import { useRef } from "react"

function App() {
  // const button = useRef(null)

  // return (
  //   <>
  //     <button ref={button}>Main</button><br />
  //     <button onClick={() => {
  //       let CurrentFont = parseInt(getComputedStyle(button.current).fontSize)
  //       button.current.style.fontSize = `${CurrentFont + 5}px`
  //     }}>Increase</button><br />
      
  //     <button onClick={() => {
  //       let CurrentFont = parseInt(getComputedStyle(button.current).fontSize)
  //       button.current.style.fontSize = `${CurrentFont - 5}px`
  //     }}>Decrease</button>
  //   </>
  // )

  // const inp = useRef(null)

  // return (
  //   <>
  //     <input ref={inp} type="text" name="" id="" /><br />
  //     <button onClick={() => {inp.current.style.color = 'red'}}>red</button><br />
  //     <button onClick={() => {inp.current.style.color = 'blue'}}>Blue</button><br />
  //     <button onClick={() => {inp.current.style.color = 'black'}}>black</button>
  //   </>
  // )

  const p = useRef(null)

  return (
    <>
      <p ref={p}>Hello world</p>
      <button onClick={() => {p.current.textContent = 'Text changed!'}}>change text</button>
    </>
  )
}

export default App