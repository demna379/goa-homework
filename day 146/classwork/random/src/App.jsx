import { useState } from "react"

function App() {
  const div = <div className="h-[80%] w-[80%] bg-[white] rounded-[50%]"></div> // creates a white ball (BALLS 😍)

  const [div1, newDiv1] = useState([div, div, div, div, div, div]) // balls
  const [div2, newDiv2] = useState([div, div, div, div, div, div]) // balls

  const [result, setResult] = useState('Result') // result of the match
  
  const [player1, newPlayer1] = useState(0) // score1
  const [player2, newPlayer2] = useState(0) // score2

  const start = () => {
    let Div1 = []
    let Div2 = []
    
    const random1 = Math.floor(Math.random() * 6 + 1)
    const random2 = Math.floor(Math.random() * 6 + 1)

    for (let i = 0; i < random1; i++){
      Div1.push(div)
    }

    for (let i = 0; i < random2; i++){
      Div2.push(div)
    }

    newDiv1(Div1)
    newDiv2(Div2)

    if (random1 > random2) {
      newPlayer1(player1 + 1)
      setResult('player 1 Won')
    } else if (random1 < random2) {
      newPlayer2(player2 + 1)
      setResult('player 2 Won')
    } else {
      setResult('draw')
    }
  }

  return (
    <>
      <header className="w-[100%] flex items-center justify-center gap-[50px] flex-col">
        <div className="w-[80%] flex justify-evenly items-center flex-wrap">
          <h1 className="text-[1.5rem]">PLAYER 1 SCORES <span>{player1}</span></h1>
          <h1 className="text-[1.5rem]">PLAYER 2 SCORES <span>{player2}</span></h1>
        </div>
        <h1 className="text-[2rem]">{result}</h1>
      </header>

      <main className="flex-1 flex justify-center items-center flex-col gap-[40px]">
        <div className="flex w-[50%] justify-between flex-wrap max-[1000px]:justify-center">
          <div className="flex items-center flex-col gap-[20px] ">
            <h1 className="text-[1.5rem]">PLAYER 1</h1>
            <div className="h-[250px] w-[250px] bg-[#c30001] rounded-[30px] grid grid-rows-3 grid-cols-[repeat(2,80px)] place-content-center place-items-center">
              {div1.map((items, index) => {
                return items
              })}
            </div>
          </div>

          <div className="flex items-center flex-col gap-[20px] ">
            <h1 className="text-[1.5rem]">PLAYER 2</h1>
            <div className="h-[250px] w-[250px] bg-[#c30001] rounded-[30px] grid grid-rows-3 grid-cols-[repeat(2,80px)] place-content-center place-items-center">
              {div2.map((items, index) => {
                return items
              })}
            </div>
          </div>
        </div>

        <button onClick={start} className="p-[5px_23px] bg-[#c30001] text-[white] rounded-[20px] font-[700]"><p className="text-[0.8rem]">START</p></button>
      </main>
    </>
  )
}

export default App
