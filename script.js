const slides = document.querySelectorAll(".slide");
const carrosel = document.getElementById("carrosel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const slides_count = slides.length;

let current_slide = 0;

left.addEventListener("click", () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = slides_count - 1;
    }
    updateCarouse();
})

function updateCarouse() {
    carrosel.style.transform = `translateX(${
        -current_slide * slides[0].offsetWidth }
    }px)`;
    document.body.style.background = `#${slides[current_slide].getAttribute("data-bg")}`
}