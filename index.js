const box = document.getElementById("box")

box.addEventListener("click", () => {
    gsap.to(box,{
        x:200,
        rotate: 90,
        background: "#00CED1"
    })

    box.innerHTML = ""
})