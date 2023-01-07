//  nav hover

const dropDownList = document.querySelector('.navbar__drop-down-list')
const dropDownBtn = document.querySelector('.navbar__drop-down-menu')
const header = document.querySelector('.header');
// const her
// console.log(header)

dropDownBtn.addEventListener('mouseover', () => {
    dropDownList.classList.add('show-list')
    // console.log('first')

})
// header.addEventListener('mouseover', () => {
//     dropDownList.classList.remove('show-list')

// })
