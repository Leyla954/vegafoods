
let container = document.querySelector(".container")

function getCart() {
    container.innerHTML = ""
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    wishlist.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("pepper");
        div.innerHTML = `
<i onclick="removeItem(${item.id})" class="heartIcon fa-regular fa-trash-can"></i>
<img src="${item.image}" alt="">
<div class="pctContent">
    <h5>${item.title}</h5>
    <span class="newPrice">Price: ${item.price}</span>
</div>
`
        container.append(div)
    })
}

window.onload = () => {
    getCart()
}

function removeItem(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let newCart = []
    if (id) {
        wishlist.filter((item) => item.id != id ? newCart.push(item) : null);
        localStorage.setItem("wishlist", JSON.stringify(newCart));
        getCart()
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

getDetail()
