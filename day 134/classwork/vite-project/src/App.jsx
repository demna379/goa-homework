function App() {
  return (
    <>
      <div className="w-[365px] h-[80%] bg-[#1f1f1f] rounded-[10px] flex flex-col items-center justify-center px-[20px] py-[20px] text-[white] font-display">
        <img className="w-[80px] h-[80px] rounded-[50%] m-[0_0_22px_0]" src="./avatar-jessica.jpeg" alt="" />
        <h1 className="text-[22px] font-[540]">Jessica Randall</h1>
        <p className="text-[#b7d543] text-[12px] m-[0_0_22px_0] font-[600]">London, United Kingdom</p>
        <p className="text-[14px] m-[0_0_18px_0]">"Front-end developer and avid reader."</p>
        <button className="bg-[#333333] m-[0_0_15px_0] p-[10px_0] w-[90%] rounded-[10px]"><p className="text-[15px]">Github</p></button>
        <button className="bg-[#333333] m-[0_0_15px_0] p-[10px_0] w-[90%] rounded-[10px]"><p className="text-[15px]">Frontend Mentor</p></button>
        <button className="bg-[#333333] m-[0_0_15px_0] p-[10px_0] w-[90%] rounded-[10px]"><p className="text-[15px]">Linkedin</p></button>
        <button className="bg-[#333333] m-[0_0_15px_0] p-[10px_0] w-[90%] rounded-[10px]"><p className="text-[15px]">Twitter</p></button>
        <button className="bg-[#333333] p-[8px] w-[90%] rounded-[10px]">Instagram</button>
     </div>
    </>
  )
}

export default App