import { useState } from "react"

function App() {
  const components = [
    {
      id: 0,
      text: 'Cool pc',
      price: 899,
      img: './pc1.png'
    },
    {
      id: 1,
      text: 'Great pc',
      price: 1200,
      img: './pc2.png'
    },
    {
      id: 2,
      text: 'Awesome pc',
      price: 1500,
      img: './pc3.png'
    },
    {
      id: 3,
      text: 'NASA pc',
      price: 10000,
      img: './pc4.png'
    },
  ]

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalprice, setTotalprice] = useState(0)
  const [position, setPosition] = useState('translateX(310px)')

  const Add = (item) => {
    setCart(prev => [...prev, item])
    setTotal(prev => prev + 1)
    setTotalprice(prev => prev + item.price)
    console.log(cart)
  }

  const Delete = (index,item) => {
    setCart(cart.toSpliced(index,1))
    setTotal(prev => prev - 1)
    setTotalprice(prev => prev - item.price)
  }

  const Switch = () => {
    setPosition('translateX(0)')
  }

  const Switch2 = () => {
    setPosition('translateX(310px)')
  }

  return (
    <>
      <div className="absolute right-[0px] h-screen w-[310px] overflow-scroll bg-[white] duration-[0.5s]" style={{ transform: position }}>
        <img onClick={Switch2} className="absolute right-[0]" src="./close.png" alt="" />
        <h1>total: {total}</h1>
        <h1>price: ${totalprice.toFixed(2)}</h1>
        {
          cart.map((item,index) => {
            return (
              <div key={index+1} className="bg-[white] h-[450px] shadow-[0_30px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center gap-[10px]">
                <img className="w-[300px]" src={item.img} alt="" />
                <h1 className="text-[1.5rem]">{item.text}</h1>
                <button onClick={() => Delete(index,item)} className="text-[white] bg-[#913d3d] text-[1.2rem] p-[5px_40px] rounded-[5px]">Delete</button>
              </div>
            )
          })
        }
      </div>
      <header className="p-[10px] w-[100%] min-h-[70px] flex justify-evenly items-center max-[321px]:flex-col max-[321px]:gap-[20px]">
        <h1 className="text-[1.5rem] font-[650]">PC shop</h1>
        <div className="flex gap-[30px]">
          <p>About us</p>
          <p>Contact us</p>
          <img onClick={Switch} src="/cart.png" alt="" />
        </div>
      </header>
      <hr className="text-[grey]" />
      <main className="flex-1 bg-[#f1f1f1] p-[20px_40px] flex flex-wrap justify-evenly gap-[20px] items-center">
        {
          components.map((item,index) => {
            return (
              <div key={index} className="bg-[white] h-[450px] shadow-[0_30px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center gap-[10px]">
                <img className="w-[300px]" src={item.img} alt="" />
                <h1 className="text-[1.5rem]">{item.text}</h1>
                <p>${item.price}</p>
                <button onClick={() => Add(item)} className="text-[white] bg-[#913d3d] text-[1.2rem] p-[5px_40px] rounded-[5px]">Add to Cart</button>
              </div>
            )
          })
        }
      </main>
    </>
  )
}

export default App
