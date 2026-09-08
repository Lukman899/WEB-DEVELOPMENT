// let div = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");
// let btn = document.querySelector("#btn");


// // btn.addEventListener('click', () => {
// //     console.log("Hello Hello Mic Check");
// // });


// // btn.addEventListener('dblclick', () => {
// //     console.log("Hello Hello Mic Check");
// // });

// // function revealGift() {
// //     // h1.classList.remove("hidden")
// //     h1.classList.toggle("hidden")
// //     // h1.classList.add("visible")
// // }

// function revealGift(event) {
//     console.log("event", event);
//     console.log("type", event.type);
//     console.log("target", event.target); // JIS ELEMENT PAR CLICK KIYA
//     console.log("currentTarget", event.currentTarget); // JIS ELEMENT PAR EVENT LISTENER ADD KIYA
// }

// div.addEventListener('click', revealGift);

// // btn.addEventListener('click', (e) => {
// //     console.log(e);
// //     console.log(e.key);
// //     console.log(e.clientX);
// //     console.log(e.clientY);
// //     console.log(e.key);
// // })

// // function fun1(e) {
// //     console.log(e);
// // }
// // btn.addEventListener('click', fun1, {once: true }) // ONLY WORKS 1 TIME

// // btn.removeEventListener('click', fun1)

// let counter = 0;
// function fun1(e) {
//     if (counter < 3) {
//         console.log(e);
//         counter++;
//     }
//     else {
//         btn.removeEventListener('click', fun1)
//     } // works 2 3 times
// }

// btn.addEventListener('click', fun1)


// let outer = document.querySelector("#outer");
// let inner = document.querySelector("#inner");
// let btn2 = document.querySelector("#btn2");
// let body = document.querySelector("body");

// body.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("body");
// })
// outer.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("Outer");
// })

// inner.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("Button");
// }) // one click calles everyone


let products = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: " Samsung Galaxy A36 5G",
        price: 62324,
        imgUrl : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJpJlpWoxTCc249O41fqXAwspmgWYqNTnULzb2cc1gYbcEA1o9O3LKZB2mm8wa2l4l5gKTA8Gr5grMTZ2_5Bc-U8SupX_NDw"
    },
    {
        name: "Redmi Note 15 Pro",
        price: 35354,
        imgUrl : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiPLpPPxNYLQhoqXp2VPHlCS0RRJ5kruFM35uiA6koecWtjoh0VroqoAmZ9EzKMyRip1IxOGHtRaniNFpWMiHlyERTd57mKrcAZ6RtQ99Mso0SawNp1yWpKQ"
    },
    {
        name: "Poco C 85 X",
        price: 43534,
        imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Realme P4 PRO",
        price: 53422,
        imgUrl : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlBti6F4yxTTRXFQOZPPYjdeFGR5UQONhT6E9ngqvJE6BzD2mW_6ue9vmKPt3BxsiXBs3Rsb5JXlAaSizHk34r02c-2BwZ1M9B0iQQIgehP7LbFsyrSsZVQtY"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList.append(card)


    const dltbtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltbtn.textContent = "Remove Product";
    addToCartBtn.textContent = "Add To Cart";

    // dltbtn.addEventListener("click", (e) =>{
    //     card.remove();
    // } )

    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    card.append(dltbtn)
    card.append(addToCartBtn)


    productList.append(card)

})

productList.addEventListener("click", (e) => {
    e.stopPropagation();
    const dltBtn = e.target;
    console.log(dltBtn.parentElement);
    console.log(dltBtn.tagName);
    console.log(dltBtn.textContent);

    // if(e.target.tagName === "BUTTON"){
    //     // e.target.parentElement.remove()
    // } // REMOVES CARD IF CLICKED ON ANY BUTTON

    if(dltBtn.textContent === "Remove Product" && e.target.tagName === "BUTTON"){
        dltBtn.parentElement.remove()
    } // SPECIFIC REMOVE BUTTON IS SELECTED
})