/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const contactForm = document.querySelector(".contact-container");
const heroText = document.querySelector(".hero-text");
    
const button = document.querySelector(".move-right-button");

const mq = window.matchMedia("(min-width: 600px)");
mq.addListener(WidthChange);
WidthChange(mq);

function WidthChange(mq) {
    mq.matches ? heroText.setAttribute("style", "display: block") : heroText.setAttribute("style", "display: none");
}

button.addEventListener("click", () => {
    openForm();
});

const openForm = () => {
    contactForm.setAttribute("style", "display: flex");
    heroText.setAttribute("style", "display: none");
};

const closeForm = () => {
    contactForm.setAttribute("style", "display: none");
    if (mq.matches) {
        heroText.setAttribute("style", "display: block");
    }
};

window.addEventListener("click", (event) => {
    if(event.target === contactForm){
        closeForm();
    }
});




