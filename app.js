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

const product = [
    {
        id: 0,
        productImg: './Ashion-Images/product-1.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$59.0',
        category: 'Women'
    },
    {
        id: 1,
        productImg: './Ashion-Images/product-2.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$49.0',
        category: 'Men'
    },
    {
        id: 2,
        productImg: './Ashion-Images/product-3.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$59.0',
        category: 'Women'
    },
    {
        id: 3,
        productImg: './Ashion-Images/product-4.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$59.0',
        category: 'Men'
    },
    {
        id: 4,
        productImg: './Ashion-Images/product-5.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$59.0',
        category: 'Men'
    },
    {
        id: 5,
        productImg: './Ashion-Images/product-6.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$49.0',
        category: 'Women'
    },
    {
        id: 6,
        productImg: './Ashion-Images/product-7.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$59.0',
        category: 'Women'
    },
    {
        id: 7,
        productImg: './Ashion-Images/product-8.jpg',
        productHeader: 'Buttons tweed blazer',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$49.0',
        category: 'Men'
    },
    {
        id: 8,
        productImg: './Ashion-Images/kids-1.jpg',
        productHeader: 'New trend',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$79.0',
        category: 'kids'
    },
    
    {
        id: 10,
        productImg: './Ashion-Images/cosmetics.jpg',
        productHeader: 'New trend',
        starIcon: './Ashion-Images/star-solid.svg',
        productPrice: '$79.0',
        category: 'Accessories'
    },

]

// prodcut gallery 

const gallerySection = document.querySelector('.product__gallery');
const productLinks = document.querySelectorAll('.product__links')

console.log(productLinks)

// active button

productLinks.forEach((link) => {
    link.addEventListener('click', () => {
        productLinks.forEach((Element) => Element.classList.remove('active'))
        link.classList.add('active')
    })
})

// load content

window.addEventListener('DOMContentLoaded', () => {
    showProduct(product)

})


// filter items

productLinks.forEach((link => {
    link.addEventListener('click', (e) => {

        const category = e.currentTarget.dataset.id;

        const productCategory = product.filter((productItem) => {
            if (productItem.category === category) {
                return productItem
            }
        })
        if (category === 'All Menu') {
            showProduct(product)

        } else {
            showProduct(productCategory)
        }

    })
}))

function showProduct(product) {

    let displayProduct = product.map((item) => {

        return `<div class="product__rows">
                    <div class="product__img-section">
                        <img src="${item.productImg}" alt="" class="product__imgs">
                        <ul class="product__icons-list">
                            <li><a href="#" class="product__icons product__icons--1"><i
                                        class="fa-solid fa-up-right-and-down-left-from-center "></i></a></li>
                            <li><a href="#" class="product__icons product__icons--2"><i
                                        class="fa-regular fa-heart"></i></a></li>
                            <li><a href="#" class="product__icons product__icons--3"><i
                                        class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__text">
                        <p class="heading-5">${item.productHeader}</p>
                        <div class="product__ratings">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">

                        </div>
                        <p class="heading-4 text-bold-600">$${item.productPrice}</p>
                    </div>
                </div>`


    })
    displayProduct = displayProduct.join('')
    gallerySection.innerHTML = displayProduct

}
console.log(showProduct)