// 4)მომხარებელს შემოატანინე რაიმე ფერი ნებსმიერი, და ეგ ფერი გაუწერთ body ს
document.getElementById('click').onclick = () => {
    const inp = document.getElementById('inp').value
    document.body.style.backgroundColor = inp
}