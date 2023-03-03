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

// accordion


// const shopAccordion = document.querySelectorAll('.shop__accordion')

// document.addEventListener('DOMContentLoaded', () => {
const dropDown = document.querySelectorAll('.shop__accordion--title')
const dropDownText = document.querySelectorAll('.shop__accordion--text')

dropDown.forEach((drops) => drops.addEventListener('click', (e) => {

    console.log('first')
    console.log(dropDownText)

    const question = e.currentTarget.parentNode
    console.log(question)

    // dropDownText.forEach((dropText) => {


    //     if (dropText.classList.contains('active')) {
    //         dropText.classList.toggle('active')
    //     }

    //     else {
    //         dropDownText.forEach(dropText => dropText.classList.remove('active'))
    //         dropText.classList.add('active')
    //     }
    // })

}))



// })


// const chevron = document.querySelectorAll('.shop__accordion--icon')
// const btns = document.querySelectorAll('.shop__accordion--title')

// console.log(shopAccordion)

// shopAccordion.forEach((accordion) => {
//     const btn = accordion.querySelector('.shop__accordion--title')

//     btn.addEventListener('click', () => {
//         // accordion.classList.toggle('active')
//         dropDownText.forEach((text) => {
//             text.classList.toggle('shop__accordion--active')
//         })
//     })








    // btn.forEach((button) => {

    //     button.addEventListener('click', () => {
    //         console.log('first')
    //         dropDownText.forEach(item => {
    //             item.classList.toggle('active')
    //             chevron.forEach(chev => {
    //                 chev.classList.toggle('rotate-icon')

    //             })








    //         })
    //     })
    // btn.addEventListener('click', () => {
    //     console.log('working btn')

    //     dropDownText.forEach((item) => {
    //         if (item !== accordion) {
    //             item.classList.remove('active')
    //         }
    //     })
    //     accordion.classList.toggle('active')

// })

//
// })

