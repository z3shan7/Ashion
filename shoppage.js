

//  nav hover

const dropDownList = document.querySelector('.navbar__drop-down-list')
const dropDownBtn = document.querySelector('.navbar__drop-down-menu')
const header = document.querySelector('.header');




dropDownBtn.addEventListener('click', () => {
    dropDownList.classList.toggle('show-list')

})



// sidenav 

const sideNavBtn = document.querySelector('.sideNav__btn')
const sideNavList = document.querySelector('.sideNav__list')
const OpenSubLinks = document.querySelector('.sideNav__drop-down-menu')
const SubLinksDropDown = document.querySelector('.sideNav__drop-down-list')
const openIcon = document.getElementById('open-icon')
const closeIcon = document.querySelector('.close-icon')
const sideNav = document.querySelector('.sideNav')


// console.log(sideNav)


OpenSubLinks.addEventListener('click', () => {
    SubLinksDropDown.classList.toggle('show-sub-links')

})

openIcon.addEventListener('click', () => {
    sideNav.classList.toggle('show-sideNav')


})

closeIcon.addEventListener('click', () => {
    sideNav.classList.remove('show-sideNav')
    console.log('close icon')


})
// open close search bar

const closeBar = document.querySelector('.navbar__searchBar-close')
const searchIcon = document.querySelector('.search-icon')
// const searchIcon = document.querySelector('.navbar__sign-up-links')
const searchOverlay = document.querySelector('.navbar__searchBar-overlay')




searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('show-overlay')

    console.log('first')

})

closeBar.addEventListener('click', () => {
    searchOverlay.classList.remove('show-overlay')

})

// Price ranger slider


//-----JS for Price Range slider-----


