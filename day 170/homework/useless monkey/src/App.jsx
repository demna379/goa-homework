function App() {
  return (
    <>
      <header>
        <div id="sign" className="w-[100%] h-[38px] bg-[black] text-[white] flex justify-center items-center">
          <p className="text-[1rem] max-[406px]:text-[0.7rem]">Sign up and get 20% off to your first order. <span className="underline font-[700]">Sign Up Now</span></p>
          <img onClick={(e) => { e.target.parentElement.style.display = 'none' }} className="absolute right-20 w-[19px] max-[700px]:hidden" src="/remove.png" alt="" />
        </div>
        <div className="h-[60px] flex items-center justify-between m-[0_60px] max-[750px]:m-[0_5px]">
          <div className="flex gap-[10px] justify-center items-center">
            <img className="w-[20px] hidden max-[750px]:block" src="/menu.png" alt="" />
            <img className="w-[160px] h-[22px]" src="/shop.png" alt="" />
          </div>
          <div className="flex w-[400px] justify-evenly max-[750px]:hidden">
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
          </div>
          <div className="bg-[#f0f0f0] w-[50%] h-[34px] rounded-[10px] flex items-center max-[470px]:hidden">
            <img className="h-[20px] relative right-[-10px]" src="/search.png" alt="" />
            <input className="w-[80%] relative right-[-15px] outline-none" maxLength={40} type="text" name="" id="" />
          </div>
          <div className="flex gap-[5px]">
            <img className="w-[30px] hidden max-[470px]:block" src="/search_BLACK.png" alt="" />
            <img className="w-[30px]" src="/shop_icon.png" alt="" /><img src="" alt="" />
            <img className="w-[30px]" src="/user.png" alt="" />
          </div>
        </div>
      </header>

      <main>
        <section className="w-[100%] flex bg-[#f2f0f1] justify-evenly items-center max-h-[663px]">
          <div className="max-w-[50%] flex flex-col justify-center gap-2">
            <h1 className="text-[4vw] font-[900] leading-[1]">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed <br />
              to bring out your individuality and cater to your sense of style.</p>
            <button>Shop Now</button>
            <div>
              <div>
                <h1>200+</h1>
                <p>International Brands</p>
              </div>
              <div>
                <h1>2,000+</h1>
                <p>High-Quality Products</p>
              </div>
              <div>
                <h1>30,000+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="max-w-[50%]">
            <img className="max-h-[663px] h-[100%]" src="/random_ppl.png" alt="" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App