function App() {
  return (
    <>
      <div className="max-[770px]:w-[80%] p-[0_40px] bg-[white] rounded-[25px] flex items-center justify-evenly flex-wrap gap-[20px] max-[770px]:justify-center max-[770px]:m-[0]">
        <div className="w-[370px] relative left-[10px] max-[770px]:left-[0]">
          <h1 className="text-[55px] font-[700] text-[#22223e] m-[0_0_10px_0]">Stay updated!</h1>
          <p className="text-[hsl(235,18%,26%)] m-[0_0_20px_0]">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="flex flex-col gap-[10px] m-[0_0_20px_0]">
            <li className="flex gap-[10px]">
              <img className="w-[20px]" src="./icon-success.svg" alt="" />
              Product discovery and building what matters
            </li>

            <li className="flex gap-[10px]">
              <img className="w-[20px]" src="./icon-success.svg" alt="" />
              Measuring to ensure updates are a success
            </li>

            <li className="flex gap-[10px]">
              <img className="w-[20px]" src="./icon-success.svg" alt="" />
              And much more!
            </li>
          </ul>

          <div>
            <p className="m-[0_0_10px_0]">Email address</p>
            <input className="h-[50px] w-[100%] border-gray p-[0_0_0_20px] m-[0_0_15px_0]" type="text" name="" id="" placeholder="email@company.com" />
            <button className="rounded-[10px] bg-[#232742] w-[100%] text-[white] h-[50px]">Subscribe to monthly newsletter</button>
          </div>
        </div>

        <div className="w-[300px] h-[500px] bg-[url('./illustration-sign-up-desktop.svg')] bg-no-repeat bg-size-[100%_100%] relative left-[15px] max-[770px]:left-[0]"></div>
      </div>
    </>
  )
}

export default App
