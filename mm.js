let cont = document.querySelector(".container")
let imgBox = document.querySelector(".img-box")
let autoType = document.querySelector(".auto-type")
let txt = document.querySelector(".text")
imgBox.addEventListener("mousemove", () => {
    cont.classList.add("active")
    imgBox.classList.add("active")
    txt.innerHTML = null
    sound.play()
})
imgBox.addEventListener("mouseleave", () => {
    cont.classList.remove("active")
    imgBox.classList.remove("active")
    txt.innerHTML = "حطي صباعك علي الصوره"
    sound.pause()
})
let autoTxt = new Typed('.auto-type', {
    strings: ['happy birthday', 'to the'  ," best","MARIAM","in the world" ],
    typeSpeed: 100,
    backSpeed: 100,
    looped: true,
});
let sound = new Audio()
sound.src = "شاشة سودا 🖤📷انزل يا جميل ع الساحة🖤🕳️(MP3_160K).mp3"