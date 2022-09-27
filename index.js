const box = document.getElementById("box")

box.addEventListener("click", () => {
    gsap.to(box,{
        x:200,
        rotate: 90,
        background: "#00CED1"
    })

    box.innerHTML = ""
})

const staggerButton = document.getElementById("stagger-button")

staggerTween = null
staggerButton.addEventListener("click", () => {
    staggerTween = gsap.fromTo(".stagger-box", {opacity: 0, y : 100}, {opacity: 1, y:0, duration: 1, stagger:0.3})
})

const staggerReverse = document.getElementById("stagger-reverse")
staggerReverse.addEventListener("click", () => {
    staggerTween.reverse()
})