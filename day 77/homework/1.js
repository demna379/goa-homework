// 3)გააკეთეთ "random emoji picker", ღიალკის დაჭერაზე საიტზე უნდა გამოჩნდეს ამ 5 ემოჯიდან ერთ ერთი
//  (ტექსტური მონაცემთა ტიპია)
// 😂🟢🥉🔥💄
const h1 = document.getElementById('h1')
const emoji = ["😂","🟢","🥉","🔥","💄"]
document.getElementById('submit').onclick = () => {
    let random = Math.floor(Math.random() * 5)
    h1.textContent = emoji[random]
}