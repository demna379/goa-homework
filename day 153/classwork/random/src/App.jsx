// 4. Button - ის ზომის შეცვლა

// შექმენი < button > და ორი ღილაკი:
// Increase
// Decrease

// მთავარ button - ს მიაბი useRef.

//   მოთხოვნა:
// Increase - ზე დაჭერისას button - ის fontSize გაიზარდოს 5px - ით.
//   Decrease - ზე დაჭერისას შემცირდეს 5px - ით.


// 5. Input - ის ფერის შეცვლა

// შექმენი:

// <input>
//   Red ღილაკი
//   Blue ღილაკი
//   Black ღილაკი

//   მოთხოვნა:

//   input-ს მიაბი useRef.
//   თითოეულ ღილაკზე დაჭერისას input-ის ტექსტის ფერი შესაბამის ფერზე შეიცვალოს.


import { useRef, useEffect } from "react"
function App() {
  const inp = useRef(null)
  return (
    <>
      <input ref={inp} type="text" name="" id="" />
      <button onClick={() => {inp.current.style.color = 'red'}}>red</button>
      <br />
      <button onClick={() => {inp.current.style.color = 'blue'}}>blue</button>
      <br />
      <button onClick={() => {inp.current.style.color = 'black'}}>black</button>
    </>
  )
}

export default App
