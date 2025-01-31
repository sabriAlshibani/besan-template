// appear main-links by click toggle menu
document.querySelector(".toggle-menu").addEventListener('click', function() {
    let mainLinks = document.querySelector(".header .main-links")
    mainLinks.style.opacity = "0"? "1" : "0" 
    mainLinks.style.top = "100%" 
})
// let linkTravel = document.querySelectorAll(".btn-description a")
// console.log(linkTravel)
// document.querySelectorAll(".content .box").forEach(function(ele) {
//     ele.addEventListener('click', function () {
//         linkTravel.forEach(function(ele) {
//             ele.click
//         })
//     })
// })
let items = document.querySelector(".items");
let item = document.querySelectorAll(".item")[0];
console.log(item)
let visibleItems = 2;
let itemWidth = item.offsetWidth;
if (itemWidth >= 50) {
 visibleItems = 1;
}
let scrollAmount = 0;
let maxScroll = (items.children.length - visibleItems) * itemWidth;

function left() {
    scrollAmount -= itemWidth * visibleItems;
    console.log(scrollAmount)
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    items.style.transform = `translateX(-${scrollAmount}px)`;
}

function right() {
    scrollAmount += itemWidth * visibleItems;
    console.log(scrollAmount)
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    items.style.transform = `translateX(-${scrollAmount}px)`;
}
