import Card from "./components/Card"

function App() {
  const card_stuff = [
    {
      style: 'h-[400px] min-w-[250px] w-[33%] rounded-[10px_0_0_10px] bg-[#e28525] p-[40px] flex flex-col gap-[10px] max-[755px]:rounded-[10px_10px_0_0]',
      image: './icon-sedans.svg',
      h1: 'SEDANS',
      p: 'Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip.',
      b_style: 'bg-[white] text-[#e28525] w-[140px] rounded-[40px] h-[40px]'
    },

    {
      style: 'h-[400px] min-w-[250px] w-[33%] bg-[#016972] p-[40px] flex flex-col gap-[10px]',
      image: './icon-suvs.svg',
      h1: 'SUVS',
      p: 'Take an SUV for its spacious interior.power, and versatility.Perfect for your next family vacation and off- road adventures.',
      b_style: 'bg-[white] text-[#016972] w-[140px] rounded-[40px] h-[40px]'
    },

    {
      style: 'h-[400px] min-w-[250px] w-[33%] rounded-[0_10px_10px_0] bg-[#00403f] p-[40px] flex flex-col gap-[10px] max-[755px]:rounded-[0_0_10px_10px]',
      image: './icon-luxury.svg',
      h1: 'luxury',
      p: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      b_style: 'bg-[white] text-[#00403f] w-[140px] rounded-[40px] h-[40px]'
    }
  ]

return (
  <>
    <div className="flex min-w-[250px] w-[60%] m-[20px] max-[755px]:flex-col text-[white] items-center justify-center">
      {
        card_stuff.map((item) => {
          return <Card style={item.style} image={item.image} h1={item.h1} p={item.p} b_style={item.b_style}></Card>
        })
      }
    </div>
  </>
)
}

export default App
