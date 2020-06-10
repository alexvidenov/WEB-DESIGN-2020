/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
    
    accordionItemHeader.classList.toggle("active");
    let accordionItemBody = accordionItemHeader.nextElementSibling;
    accordionItemHeader.classList.contains("active") ? accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
                                                     : accordionItemBody.style.maxHeight = 0;
    
  });
});

