function App() {
  return (
    <>
      <div className="flex min-w-[250px] w-[60%] m-[20px] max-[755px]:flex-col text-[white] items-center justify-center">
        <div className="h-[400px] min-w-[250px] w-[33%] rounded-[10px_0_0_10px] bg-[#e28525] p-[40px] flex flex-col gap-[10px] max-[755px]:rounded-[10px_10px_0_0]">
          <img className="w-[80px]" src="./icon-sedans.svg" alt="" />
          <h1 className="text-[30px] font-[700]">SEDANS</h1>
          <p className="m-[0_0_30px_0]">
            Choose a sedan for its
            affordability and excellent
            fuel economy. Ideal for
            cruising in the city or on
            your next road trip.
          </p>
          <button className="bg-[white] text-[#e28525] w-[140px] rounded-[40px] h-[40px]">Learn More</button>
        </div>

        <div className="h-[400px] min-w-[250px] w-[33%] bg-[#016972] p-[40px] flex flex-col gap-[10px]">
          <img className="w-[80px]" src="./icon-suvs.svg" alt="" />
          <h1 className="text-[30px] font-[700]">SUVS</h1>
          <p className="m-[0_0_30px_0]">
            Take an SUV for its spacious
            interior. power, and
            versatility. Perfect for your
            next family vacation and
            off-road adventures.
          </p>
          <button className="bg-[white] text-[#016972] w-[140px] rounded-[40px] h-[40px]">Learn More</button>
        </div>

        <div className="h-[400px] min-w-[250px] w-[33%] rounded-[0_10px_10px_0] bg-[#00403f] p-[40px] flex flex-col gap-[10px] max-[755px]:rounded-[0_0_10px_10px]">
          <img className="w-[80px]" src="./icon-luxury.svg" alt="" />
          <h1 className="text-[30px] font-[700]">luxury</h1>
          <p className="m-[0_0_30px_0]">
            Cruise in the best car brands
            without the bloated prices.
            Enjoy the enhanced comfort
            of a luxury rental and arrive
            in style.
          </p>
          <button className="bg-[white] text-[#00403f] w-[140px] rounded-[40px] h-[40px]">Learn More</button>
        </div>
      </div>
    </>
  )
}

export default App
