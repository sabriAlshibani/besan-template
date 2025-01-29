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