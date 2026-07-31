import { useEffect, useState } from "react"

function App() {
  const [city, setCity] = useState({
    temp_c: '',
    temp_f: '',
    condition: {
      text: 'Sunny',
      icon: '/youaremy sunshine.png'
    }
  })
  const handlesubmit = async (e) => {
    e.preventDefault()
    let cityValue = e.target.city.value 
    try {
      const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=64dfe94a32474c07b45103424260905 &q=${cityValue}&aqi=yes`)
      if (!data.ok) {
      }
      else {
        const res = await data.json()
        const currents = res.current
        setCity(currents)
      }
    } catch (e) {
      console.log(e)
    }
    
  }

  return (
    <>
      <form className="w-[100%] h-[200px] flex items-center justify-evenly" onSubmit={handlesubmit}>
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[38px] rounded-[40px] flex items-center bg-[#d9d9d9] justify-end shadow-lg">
            <div className="bg-[black] w-[30%] h-[80%] rounded-[50%] m-[0_6px]"></div>
          </div>
          <h1 className="text-[1.2rem] text-[white]">Dark Mode</h1>
        </div>

        <div className="w-[50%] h-[62px] flex items-center justify-evenly bg-[#444444] rounded-[40px] border-1 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <img className="w-[40px]" src="./search.png" alt="" />
          <input className="w-[85%] outline-0 text-[#b4b4b4] placeholder:text-[#b4b4b4] [-webkit-text-stroke:0.7px_black]" type="text" name="city" id="inp" placeholder="Search for your preffered city..." />
        </div>

        <button className="flex items-center justify-center bg-[#4cbb17] p-[0_25px] rounded-[40px] gap-[10px] h-[62px]" type="submit">
          <img src="./location.png" alt="" />
          <h1 className="text-[white] text-[1.3rem]">submit</h1>
        </button>
      </form>

      <main className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-evenly bg-[#444444] w-[80%] h-[550px] rounded-[30px] shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
          <div>
            <h1 className="bg-linear-[25deg,#dddddd_45%,#a0a0a0_70%] bg-clip-text text-transparent text-[5rem]">{city.temp_f}℉</h1>
            <p className="flex gap-[50px] items-center bg-linear-[25deg,#dddddd_45%,#a0a0a0_70%] bg-clip-text text-transparent">Feels like: <span className="text-[1.5rem]">{city.temp_c}℃</span></p>
          </div>
          
          <div className="flex flex-col items-center">
            <img className="w-[350px]" src={city.condition.icon} alt="" />
            <h1 className="text-[white] text-[1.5rem]">{city.condition.text}</h1>
          </div>

          <div className="grid w-[17%] h-[50%] grid-rows-2 grid-cols-2 gap-[30px] text-[white] font-[600] place-items-center">
            <div className="flex flex-col items-end gap-[10px]">
              <img src="./humidity.png" alt="" />
              <h1>{city.humidity}</h1>
              <p>humidity</p>
            </div>
            <div className="flex flex-col items-end gap-[10px]">
              <img src="./wind.png" alt="" />
              <h1>{city.wind_kph}km/h</h1>
              <p className="text-nowrap">Wind Speed</p>
            </div>
            <div className="flex flex-col items-end gap-[10px]">
              <img src="./pressure.png" alt="" />
              <h1>{city.pressure_mb}hPa</h1>
              <p>Pressure</p>
            </div>
            <div className="flex flex-col items-end gap-[10px]">
              <img src="./UV.png" alt="" />
              <h1>{city.uv}</h1>
              <p>UV</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
