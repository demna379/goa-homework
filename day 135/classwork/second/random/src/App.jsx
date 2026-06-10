function App() {
  return (
    <>
      <div className="w-[300px] h-[500px] bg-[#15273f] rounded-[10px] p-[15px] flex flex-col gap-[15px]">
        <img className="w-[100%] h-[55%] rounded-[10px]" src="./image-equilibrium.jpg" alt="" />
        <h1 className="text-[20px] text-[white] font-[600]">Equilibrum #3429</h1>
        <p className="text-[hsl(215,51%,70%)] font-[300]">
          Our Equilibrium collection promotes <br />
          balance and calm.
        </p>
        <div className="flex justify-between">
          <p className="flex gap-[10px] text-[hsl(178,100%,50%)]"><img src="./icon-ethereum.svg" alt="" />0.0041 ETH</p>
          <p className="flex gap-[10px] text-[grey]"><img src="./icon-clock.svg" alt="" /> 3 days left</p>
        </div>
        <hr className="text-[grey]" />
        <div className="flex gap-[10px] items-center">
          <img className="w-[30px] h-[30px]" src="./image-avatar.png" alt="" />
          <p className="text-[grey] flex gap-[5px]">Creation of <p className="text-[white]">Jules Wyvern</p></p>
        </div>
      </div>
    </>
  )
}

export default App