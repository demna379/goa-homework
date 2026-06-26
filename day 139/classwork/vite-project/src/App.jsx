function App() {
  return (
    <>
      <div className="w-[1150px] h-[450px] flex max-[1130px]:flex-col-reverse max-[1130px]:w-[500px] max-[1130px]:h-[900px] items-center justify-center">
        <div className="w-[50%] h-[100%] bg-[#1c1938] rounded-[10px_0_0_10px] flex flex-col justify-center p-[40px_60px_40px_40px] gap-[20px] max-[1130px]:w-[100%] max-[1130px]:h-[50%] max-[1130px]:rounded-[0_0_10px_10px]">
          <h1 className="text-[45px] font-[700] text-[white]">
            Get <span className="text-[#9353c3]">insights</span> that help
            your business grow.
          </h1>

          <p className="text-[hsla(0,0%,100%,0.6)] p-[0_0_40px_0]">
            Discover the benefits Of data analytics and make<br />better decisions regarding revenue, customer<br />experience, and overall efficiency.
          </p>

          <div className="flex justify-between w-[80%]">
            <div>
              <h1 className="text-[30px] text-[white] font-[700]">10k+</h1>
              <p className="text-[grey]">COMPANIES</p>
            </div>

            <div>
              <h1 className="text-[30px] text-[white] font-[700]">314</h1>
              <p className="text-[grey]">TEMPLATES</p>
            </div>

            <div>
              <h1 className="text-[30px] text-[white] font-[700]">12M+</h1>
              <p className="text-[grey]">QUERIES</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] bg-[url('./image.png')] rounded-[0_10px_10px_0] bg-no-repeat bg-size-[100%_100%] max-[1130px]:w-[100%] max-[1130px]:h-[30%] max-[1130px]:rounded-[10px_10px_0_0]"></div>
      </div>
    </>
  )
}

export default App
