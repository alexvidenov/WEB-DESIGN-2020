/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let images = [
    'url("images/slideshow_images/IMG_1.jpg")', 
    'url("images/slideshow_images/IMG_2.jpg")', 
    'url("images/slideshow_images/IMG_3.jpg")'
];

let num = 0;
let hero = document.querySelector(".hero");

hero.setAttribute("style", "background:" + images[2] + "no-repeat center top/cover");

setInterval(() => {
    nextImage();
}, 4000);

let nextImage = () => {
     num++;
     if(num >= images.length) {
        num = 0;
     }
     hero.setAttribute("style", "background:" + images[num] + "no-repeat center top/cover");
};
