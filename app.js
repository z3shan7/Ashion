//  nav hover

const dropDownList = document.querySelector('.navbar__drop-down-list')
const dropDownBtn = document.querySelector('.navbar__drop-down-menu')
const header = document.querySelector('.header');
// const her
console.log(header)

// dropDownBtn.addEventListener('mouseover', () => {
//     dropDownList.classList.add('show-list')
//     // console.log('first')

// })
dropDownBtn.addEventListener('click', () => {
    dropDownList.classList.toggle('show-list')

})

// sidenav 

const sideNavBtn = document.querySelector('.sideNav__btn')
const sideNavList = document.querySelector('.sideNav__list')
const OpenSubLinks = document.querySelector('.sideNav__drop-down-menu')
const SubLinksDropDown = document.querySelector('.sideNav__drop-down-list')
const openIcon = document.getElementById('open-icon')
const closeIcon = document.getElementById('close-icon')
const sideNav = document.querySelector('.sideNav')


// console.log(sideNav)

sideNavBtn.addEventListener('click', () => {
    sideNavList.classList.toggle('show-list')

})
OpenSubLinks.addEventListener('click', () => {
    SubLinksDropDown.classList.toggle('show-sub-links')

})

openIcon.addEventListener('click', () => {
    sideNav.classList.toggle('show-sideNav')


})
closeIcon.addEventListener('click', () => {
    sideNav.classList.remove('show-sideNav')


})
// open close search bar

const closeBar = document.querySelector('.navbar__searchBar-close')
// const searchIcon = document.getElementById('search-icon')
const searchIcon = document.querySelector('.navbar__sign-up-links')
const searchOverlay = document.querySelector('.navbar__searchBar-overlay')


console.log(searchIcon)

searchIcon.addEventListener('click', () => {

    // console.log(e.currentTarget)
    console.log('first')

})

closeBar.addEventListener('click', () => {
    console.log('close')
})