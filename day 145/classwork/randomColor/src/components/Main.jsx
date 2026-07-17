import { useState } from "react"

function Main() {
    const [Color, newColor] = useState('#082050')

    function changeColor() {
        const characters = 'abcdef123456789'
        let newcolor = '#'
        for (let i = 0; i < 6; i++){
            newcolor+=characters[Math.floor(Math.random() * characters.length)]
        }
        newColor(newcolor)
    }

    return (
        <>
            <main style={{backgroundColor: Color}} className={`h-[90%] flex flex-col justify-center gap-[40px] items-center w-[100%]`}>
                <h1 className="bg-[#333333] text-[white] rounded-[5px] p-[5px] text-[20px]">Background Color : <span style={{color: Color}}>{Color}</span></h1>
                <button className="border-[1px] w-[100px] h-[40px] rounded-[5px]" onClick={changeColor}>CLICK ME</button>
            </main>
        </>
    )
}

export default Main