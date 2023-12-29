let container = document.querySelector(".page-container")
let pages = document.querySelectorAll(".page")
let toggleBtn = document.querySelector(".toggle-btn")
let ul = document.querySelector(".nav-list")
let overlay = document.querySelector(".overlay")
let links = document.querySelectorAll(".link")

let pageIndex = 0

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active")
    container.classList.toggle("active")
    ul.classList.toggle("show")
})

links.forEach((item, i) => {
    item.addEventListener("click", () => {
        nextPage(i)
        console.log(pageIndex, i);
    })
})

function nextPage(index) {
    overlay.style.animation = "slide 1s linear 1"
    setTimeout(() => {
        pages[pageIndex].classList.remove('active')
        pages[index].classList.add('active')
        pageIndex = index
    }, 500);

    setTimeout(() => {
        overlay.style.animation = null
    }, 1000);

}