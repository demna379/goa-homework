import { useRef } from "react"

function App() {
  return (
    <>
      <header>
        <div id="sign" className="w-[100%] h-[38px] bg-[black] text-[white] flex justify-center items-center">
          <p className="text-[1rem] max-[406px]:text-[0.7rem]">Sign up and get 20% off to your first order. <span className="underline font-[700]">Sign Up Now</span></p>
          <img onClick={(e) => {e.target.parentElement.style.display = 'none'}} className="absolute right-20 w-[19px] max-[700px]:hidden" src="/remove.png" alt="" />
        </div>
        <div className="h-[44px] flex items-center justify-center">
          <img className="w-[160px] h-[22px]" src="/shop.png" alt="" />
          <div className="flex">
            <p>Shop on </p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
          </div>
          <div>
            <img src="" alt="" />
            <input type="text" name="" id="" />
          </div>
          <div>
            <img src="" alt="" /><img src="" alt="" />
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