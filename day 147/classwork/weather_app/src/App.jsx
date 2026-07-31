function App() {
  return (
    <>
      <header className="w-[100%] h-[200px] flex items-center justify-evenly">
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[38px] rounded-[40px] flex items-center bg-[#d9d9d9] justify-end shadow-lg">
            <div className="bg-[black] w-[30%] h-[80%] rounded-[50%] m-[0_6px]"></div>
          </div>
          <h1 className="text-[1.2rem] text-[white]">Dark Mode</h1>
        </div>

        <div className="w-[50%] h-[62px] flex items-center justify-evenly bg-[#444444] rounded-[40px] border-1 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <img className="w-[40px]" src="./search.png" alt="" />
          <input className="w-[85%] outline-0 text-[#b4b4b4] placeholder:text-[#b4b4b4] [-webkit-text-stroke:0.7px_black]" type="text" name="" id="" placeholder="Search for your preffered city..." />
        </div>

        <div className="flex items-center justify-center bg-[#4cbb17] p-[0_25px] rounded-[40px] gap-[10px] h-[62px]">
          <img src="./location.png" alt="" />
          <h1 className="text-[white] text-[1.3rem]">Current Location</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-evenly bg-[#444444] w-[80%] h-[550px] rounded-[30px] shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
          <div>
            <h1 className="bg-linear-[25deg,#dddddd_45%,#a0a0a0_70%] bg-clip-text text-transparent text-[5rem]">75℉</h1>
            <p className="flex gap-[50px] items-center bg-linear-[25deg,#dddddd_45%,#a0a0a0_70%] bg-clip-text text-transparent">Feels like: <span className="text-[1.5rem]">22℃</span></p>
          </div>
          
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
