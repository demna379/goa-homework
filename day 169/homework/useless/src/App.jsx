import { useRef } from "react"

function App() {
  return (
    <>
      <header>
        <div id="sign" className="w-[100%] h-[38px] bg-[black] text-[white] flex justify-center items-center">
          <p className="text-[1rem] max-[406px]:text-[0.7rem]">Sign up and get 20% off to your first order. <span className="underline font-[700]">Sign Up Now</span></p>
          <img onClick={(e) => { e.target.parentElement.style.display = 'none' }} className="absolute right-20 w-[19px] max-[700px]:hidden" src="/remove.png" alt="" />
        </div>
        <div className="h-[60px] flex items-center justify-evenly m-[0_20px]">
          <div className="flex gap-[20px]">
            <img className="hidden" src="" alt="" />
            <img className="w-[160px] h-[22px]" src="/shop.png" alt="" />
          </div>
          <div className="flex w-[400px] justify-evenly">
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
          </div>
          <div className="bg-[#f0f0f0] w-[50%] h-[34px] rounded-[10px] flex items-center">
            <img className="h-[20px] relative right-[-10px]" src="/search.png" alt="" />
            <input className="w-[80%] relative right-[-15px] outline-none" maxLength={40} type="text" name="" id="" />
          </div>
          <div className="flex gap-[5px]">
            <img className="hidden" src="/search_BLACK.png" alt="" />
            <img className="w-[30px]" src="/shop_icon.png" alt="" /><img src="" alt="" />
            <img className="w-[30px]" src="/user.png" alt="" />
          </div>
        </div>
      </header>

      <main>
        <section>

        </section>
      </main>
    </>
  )
}

export default App