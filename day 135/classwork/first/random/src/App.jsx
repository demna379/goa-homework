function App() {
  return (
    <>
      <div className="w-[430px] h-[550px] flex flex-col font-random">
        <div className="bg-[url('./illustration-hero.svg')] h-[30%] w-[100%] rounded-[10px_10px_0_0] bg-size-[100%_100%]"></div>
        <div className="w-[100%] h-[70%] p-[35px] flex flex-col items-center bg-[white] rounded-[0_0_10px_10px] gap-[10px]">
          <h1 className="text-[30px] font-[700] text-[hsl(223,47%,23%)]">Order Summer</h1>
          <p className="text-[hsl(224,23%,55%)] text-center">
            You can now listen to millions of songs. <br />
            audiobooks. and podcasts on any device <br />
            anywhere you like!
          </p>
          <div className="w-[100%] bg-[#f8f9fe] flex justify-between p-[15px] items-center">
            <div className="flex gap-[15px]">
              <img src="./icon-music.svg" alt="" />
              <div>
                <p className="font-[900] text-[hsl(223,47%,23%)]">Annual Plan</p>
                <p className="text-[hsl(224,23%,55%)]">$59.99/year</p>
              </div>
            </div>
            <p className="text-[hsl(245,75%,52%)] underline font-[700]">Change</p>
          </div>
          <button className="bg-[hsl(245,75%,52%)] text-[white] font-[700] w-[100%] p-[10px_0] rounded-[10px] m-[10px] shadow-xl">Procced to Payment</button>
          <button className="text-[hsl(224,23%,55%)]">Cancel Order</button>
        </div>
      </div>
    </>
  )
}

export default App