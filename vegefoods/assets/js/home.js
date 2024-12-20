let menuIcon = document.getElementById("menuIcon");
let ul = document.querySelector("ul");



menuIcon.addEventListener("click", () => {
    if (ul.style.display === "block") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
});




let firstLine = document.querySelector(".firstLine");
let page = 1;
let limit = 8;
let allData;
async function getApi() {
    try {
        page++;
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss?page=${page}&limit=${limit}`);
        allData = data;
        data.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("pepper");
            div.innerHTML = `
        <i onclick="addToCard(${item.id})" class="shopIcon fa-solid fa-cart-shopping"></i>
        <i onclick="addToWish(${item.id})" class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div onclick="getDetail(${item.id})" class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
            firstLine.append(div)
        })

    } catch (error) {
        console.log(error);
    }
}

function getDetail(id){
    window.location.href = `/assets/pages/detail.html?productId=${id}`
    
}

// addtocard

let moreProduct = document.getElementById("moreProduct")
moreProduct.addEventListener("click", getApi)

function addToCard(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (id) {
        let result1 = cart.find((item) => item.id == id)
        if(result1){
            alert("Bu mehsul artiq sebetde movcuddur");
            return;
        }
        let result = allData.find((item) => item.id == id);
        if (result) {
            cart.push(result);
            alert("Mehsul sebete elave olundu")
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }
}

// wishlist

function addToWish(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (id) {
        let result1 = wishlist.find((item) => item.id == id)
        if(result1){
            alert("Bu mehsul artiq wishlistde movcuddur");
            return;
        }
        let result = allData.find((item) => item.id == id);
        if (result) {
            wishlist.push(result);
            alert("Mehsul wishliste elave olundu")
            localStorage.setItem("wishlist", JSON.stringify(wishlist))
        }
    }
}



// price clock

function dateTime() {
    let date = new Date ()

    let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    days.innerHTML = date.getDate()
    hours.innerHTML = date.getHours()
    minutes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()
}
setInterval(() =>{
    dateTime()
},1000)