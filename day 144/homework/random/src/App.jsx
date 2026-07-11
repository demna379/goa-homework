import { useState,useEffect } from 'react'

function App() {
  const [divCol, change] = useState('bg-[white]')

  const yellow = () => {
    change('bg-[yellow]')
  }

  const blue = () => {
    change('bg-[blue]')
  }

  const red = () => {
    change('bg-[red]')
  }

  const pink = () => {
    change('bg-[pink]')
  }

  const brown = () => {
    change('bg-[brown]')
  }

  useEffect(() => {
    console.log(`div ის ფერი არის ${divCol}`)
  }, [divCol])

  return (
    <>
      <div className={`w-[300px] h-[300px] ${divCol}`}></div>
      <button onClick={yellow}>yellow</button><br />
      <button onClick={blue}>blue</button><br />
      <button onClick={red}>red</button><br />
      <button onClick={pink}>pink</button><br />
      <button onClick={brown}>brown</button>
    </>
  )
}

export default App


const [divCol, change] = useState('bg-[white]')

const yellow = () => {
  change('bg-[yellow]')
}

const blue = () => {
  change('bg-[blue]')
}

const red = () => {
  change('bg-[red]')
}

const pink = () => {
  change('bg-[pink]')
}

const brown = () => {
  change('bg-[brown]')
}

useEffect(() => {
  console.log(`div ის ფერი არის ${divCol}`)
},[divCol])

return (
  <>
    <div className={`w-[300px] h-[300px] ${divCol}`}></div>
    <button onClick={yellow}>yellow</button><br />
    <button onClick={blue}>blue</button><br />
    <button onClick={red}>red</button><br />
    <button onClick={pink}>pink</button><br />
    <button onClick={brown}>brown</button>
  </>
)