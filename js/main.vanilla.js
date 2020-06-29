document.addEventListener("DOMContentLoaded", () => {
    const modalTrigger = document.querySelector(".cd-modal-trigger"),
        transitionLayer = document.querySelector(".cd-transition-layer"),
        transitionBackground = transitionLayer.querySelector(".bg-layer"),
        modalWindow = document.querySelector(".cd-modal");

    function animationEndHandler() {
        const animEnd = () => {
            transitionLayer.classList.contains("closing") && (
                transitionLayer.classList.remove("closing", "opening", "visible")
            )
        };

        transitionBackground.addEventListener("animationend", animEnd),
        transitionBackground.addEventListener("webkitAnimationend", animEnd)
    }
    animationEndHandler(),

    modalTrigger.addEventListener("click", e => {
        const delay = document.querySelector(".no-cssanimations") ? 0 : 600;
        e.preventDefault(),
        transitionLayer.classList.add("visible", "opening");
        setTimeout(() => {
            modalWindow.classList.add("visible")
        }, delay)
    }),

    modalWindow.querySelector(".modal-close").addEventListener("click", e => {
        e.preventDefault(),
        transitionLayer.classList.add("closing"),
        modalWindow.classList.remove("visible")
    })

})
