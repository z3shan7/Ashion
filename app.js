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
// const searchIcon = document.getElementById('search-icon')
const searchIcon = document.querySelector('.navbar__sign-up-links')
const searchOverlay = document.querySelector('.navbar__searchBar-overlay')


console.log(searchIcon)

searchIcon.addEventListener('click', () => {

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
                        <p class="heading-5 product__header">${item.productHeader}</p>
                        <div class="product__ratings">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">
                            <img src="${item.starIcon}" alt="" srcset="" class="product__icon-star">

                        </div>
                        <h6 class="heading-4 text-bold-600">${item.productPrice}</h6>
                    </div>
                </div>`


    })
    displayProduct = displayProduct.join('')
    gallerySection.innerHTML = displayProduct

}

// countdown section

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const items = document.querySelectorAll('.discount__countdown')
const deadLine = document.querySelector('.discount__deadline')
const timeLeft = document.querySelector('.discount__timeLeft')
console.log(items)

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 30, 11, 30, 0);
// let futureDate = new Date(2023, 1, 28, 11, 30, 0)
console.log(futureDate)

const year = futureDate.getFullYear()
const hour = futureDate.getHours()
const mintues = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]

deadLine.textContent = `Discount ends on ${weekday} ${date}, ${month} ${year}, ${hour}:${mintues}am`

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today


    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate value

    let days = t / oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000)

    //  set value arrays

    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }
    items.forEach((item, index) => {
        item.innerHTML = format(values[index])
    })

    if (t < 0) {
        clearInterval(countdown);
        timeLeft.innerHTML = `<h4 class="discount__expired">Sorry, Discount has expired!</h4>`;
    }
}


let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()



