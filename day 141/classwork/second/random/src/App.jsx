function App() {
  return (
    <>
      <div className="bg-[white] w-[900px] h-[500px] rounded-[12px]">
        <div className="h-[490px] w-[200px] bg-[url('./images/bg-sidebar-desktop.svg')] bg-size-contain bg-no-repeat">

        </div>
        <div className="">
          <h1>Personal info</h1>
          <p>Please provide your name, email address. and phone number</p>
          <div>
            <div>
              <p>Name</p>
              <input type="text" name="" id="" />
            </div>

            <div>
              <p>Email Address</p>
              <input type="text" name="" id="" />
            </div>

            <div>
              <p>Phone Number</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
