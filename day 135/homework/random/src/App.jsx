function App() {
  return (
    <>
      <div className="w-[75%] h-[500px] grid-rows-2 grid-cols-4 grid gap-[20px]">
        <div className="row-span-2 bg-[#1d204b] rounded-[10px]">
          <div className="h-[70%] bg-[#5746ea] rounded-[10px] p-[25px_20px]">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[white] flex items-center justify-center m-[0_0_20px_0]"><img className="w-[95%] h-[95%]" src="./image-jeremy.png" alt="" /></div>
            <p className="text-[#a9a4ff]">Report for</p>
            <h1 className="text-[white] text-[40px] font-[300]">Jeremy Robson</h1>
          </div>
          <div className="h-[30%] flex flex-col text-[#767ab7] justify-evenly p-[0_20px]">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>

        <div className="bg-[#ff8b64] bg-[url('./icon-work.svg')] rounded-[10px] bg-no-repeat bg-position-[right_-10px] text-[white]">
          <div className="bg-[#1d204b] rounded-[10px] relative h-[80%] top-[20%] p-[20px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">Work</p>
              <img src="./icon-ellipsis.svg" alt="" />
            </div>

            <div>
              <h1 className="text-[50px] font-[300]">32hrs</h1>
              <p className="text-[grey]">Last week - 36hrs</p>
            </div>
          </div>
        </div>

        <div className="bg-[#56c2e6] bg-[url('./icon-play.svg')] rounded-[10px] bg-no-repeat bg-position-[right_-10px] text-[white]">
          <div className="bg-[#1d204b] rounded-[10px] relative h-[80%] top-[20%] p-[20px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">play</p>
              <img src="./icon-ellipsis.svg" alt="" />
            </div>

            <div>
              <h1 className="text-[50px] font-[300]">10hrs</h1>
              <p className="text-[grey]">Last week - 8hrs</p>
            </div>
          </div>
        </div>

        <div className="bg-[#ff5e7d] bg-[url('./icon-study.svg')] rounded-[10px] bg-no-repeat bg-position-[right_-10px] text-[white]">
          <div className="bg-[#1d204b] rounded-[10px] relative h-[80%] top-[20%] p-[20px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">study</p>
              <img src="./icon-ellipsis.svg" alt="" />
            </div>

            <div>
              <h1 className="text-[50px] font-[300]">4hrs</h1>
              <p className="text-[grey]">Last week - 7hrs</p>
            </div>
          </div>
        </div>
      
        <div className="bg-[#4bcf83] bg-[url('./icon-exercise.svg')] rounded-[10px] bg-no-repeat bg-position-[right_-10px] text-[white]">
          <div className="bg-[#1d204b] rounded-[10px] relative h-[80%] top-[20%] p-[20px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">exercise</p>
              <img src="./icon-ellipsis.svg" alt="" />
            </div>

            <div>
              <h1 className="text-[50px] font-[300]">4hrs</h1>
              <p className="text-[grey]">Last week - 5hrs</p>
            </div>
          </div>
        </div>

        <div className="bg-[#7234d3] bg-[url('./icon-social.svg')] rounded-[10px] bg-no-repeat bg-position-[right_-10px] text-[white]">
          <div className="bg-[#1d204b] rounded-[10px] relative h-[80%] top-[20%] p-[20px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">Social</p>
              <img src="./icon-ellipsis.svg" alt="" />
            </div>

            <div>
              <h1 className="text-[50px] font-[300]">5hrs</h1>
              <p className="text-[grey]">Last week - 10hrs</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f1c75b] bg-[url('./icon-seld-care.svg')] rounded-[10px] bg-no-repeat bg-position-[right_-10px] text-[white]">
          <div className="bg-[#1d204b] rounded-[10px] relative h-[80%] top-[20%] p-[20px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">Self care</p>
              <img src="./icon-ellipsis.svg" alt="" />
            </div>

            <div>
              <h1 className="text-[50px] font-[300]">2hrs</h1>
              <p className="text-[grey]">Last week - 2hrs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App