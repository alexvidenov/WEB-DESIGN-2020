/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const images = [
    'url("images/slideshow_images/IMG_1.jpg")', 
    'url("images/slideshow_images/IMG_2.jpg")', 
    'url("images/slideshow_images/IMG_3.jpg")'
];

let num = 0;
const hero = document.querySelector(".hero");

setInterval(() => {
    nextImage();
}, 4000);

const nextImage = () => {
     num++;
     if(num >= images.length) {
        num = 0;
     }
     hero.setAttribute("style", "background:" + images[num] + "no-repeat center top/cover");
};
