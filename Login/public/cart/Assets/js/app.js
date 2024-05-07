const shoesData = [
  {
    id: 1,
    name: "Golden Elegance",
    price: "$50.00",
    imgSrc: "imgs/a.jpg",
    bgGradient: ["#FE7831", "#FFDEBE"],
  },
  {
    id: 2,
    name: "Divine Allure",
    price: "$199.00",
    imgSrc: "imgs/b.png",
    bgGradient: ["#02BE83", "#B3F6DC"],
  },
  {
    id: 3,
    name: "Pink Goddess ",
    price: "$190.00",
    imgSrc: "imgs/others10.jpg",
    bgGradient: ["#FF3C78", "#FFB2B2"],
  },
  {
    id: 4,
    name: "Red Moon",
    price: "$299.99",
    imgSrc: "imgs/i.jpg",
    bgGradient: ["#8AA8F8", "#315BFF"],
  },
  {
    id: 5,
    name: "Midnight Desire #1",
    price: "$150.45",
    imgSrc: "imgs/c.jpg",
    bgGradient: ["#27EC37", "#CCEFBA"],
  },
  {
    id: 6,
    name: "Sultry Secrets",
    price: "$100.46",
    imgSrc: "imgs/e.jpg",
    bgGradient: ["#E9EA55", "#F7F7C1"],
  },
  {
    id: 7,
    name: "Sensual silk ",
    price: "$90.37",
    imgSrc: "imgs/d.jpg",
    bgGradient: ["#018F92", "#C7C5C5"],
  },
  {
    id: 8,
    name: "Midnight Finesse",
    price: "$150.46",
    imgSrc: "imgs/f.jpg",
    bgGradient: ["#9F2AFF", "#B59DF1"],
  },
  {
    id: 9,
    name: "Midnight Desire #2",
    price: "$60.13",
    imgSrc: "imgs/others.jpg",
    bgGradient: ["#2BFF5C", "#B2D0A5"],
  },
  {
    id: 10,
    name: "Midnight Desire #3",
    price: "$150.15",
    imgSrc: "imgs/maa.jpg",
    bgGradient: ["#F6FD14", "#D9E2A5"],
  },
  {
    id: 11,
    name: "Midnight Desire #4",
    price: "$200.73",
    imgSrc: "imgs/maa5.jpg",
    bgGradient: ["#E63A3A", "#FFBABA"],
  },
  {
    id: 12,
    name: "Midnight Desire #5",
    price: "$90.89",
    imgSrc: "imgs/h.jpg",
    bgGradient: ["#55B7D8", "#B0D8D5"],
  },
  {
    id: 13,
    name: "Midnight Desire #6",
    price: "$250.89",
    imgSrc: "imgs/others2.jpg",
    bgGradient: ["#55B7D8", "#B0D8D5"],
  },
  {
    id: 13,
    name: "Midnight Desire #7",
    price: "$150.89",
    imgSrc: "imgs/maa8.jpg",
    bgGradient: ["#55B7D8", "#B0D8D5"],
  },
];

// CROLL BUTTON CODE
let mybutton = document.getElementById("myBtn");

let clickAudio = document.getElementById("myAudio");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function preLoader() {
  let loading = document.getElementById("loading");
  let main = document.getElementById("main");
  loading.style.display = "none";
  main.style.display = "block";
}

//Dark mode toggle
let x = document.createElement("LINK");
x.setAttribute("rel", "stylesheet");
x.setAttribute("type", "text/css");
x.setAttribute("href", "./Assets/css/dark.css");

let mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  if (mode.src.match("moon")) {
    mode.src = "./Assets/img/sunrise.png";
    document.head.appendChild(x);
  } else {
    mode.src = "./Assets/img/moon.png";
    document.head.removeChild(x);
  }
});

// FETCH PRODUCTS IN JSON

function showTopShoes(startIndex, endIndex) {
  let topProducts = document.getElementById("topProducts");

  let shoes = shoesData;
  // console.log(shoes);
  let str = "";
  for (startIndex; startIndex < endIndex; startIndex++) {
    str += `
			<div class="p-body">
			<div class="circle" style="background: linear-gradient(239deg, ${shoes[startIndex].bgGradient[0]} 0%, ${shoes[startIndex].bgGradient[1]} 100%);"></div>
                <img class="shoesImg" src="${shoes[startIndex].imgSrc}" alt="shoes">
                <div class="rating">
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star"></i>
                </div>
				<div class="top-p-text">
                	<p class="top-p-name">${shoes[startIndex].name}</p>
					<p class="top-p-price">${shoes[startIndex].price}<span id="liveToastBtn" onClick="addProduct(${shoes[startIndex].id},'${shoes[startIndex].name}','${shoes[startIndex].price}','${shoes[startIndex].imgSrc}');" class="material-symbols-outlined addIcon">add_shopping_cart</span></p>
				</div>
            </div>
			`;
  }
  topProducts.innerHTML = str;
  // })
  // .catch(err => console.error(err));
}
showTopShoes(0, 4);
// SHOW NUMBER OF PRODUCT IN CART LOGO

function addProduct(id, name, price, imgSrc) {
  clickAudio.play();
  let quantity = 1;
  let toastLiveExample = document.getElementById("liveToast");
  let cartProduct = localStorage.getItem("cartProduct");
  const toast = new bootstrap.Toast(toastLiveExample);
  if (cartProduct == null) {
    cartArr = [];
  } else {
    cartArr = JSON.parse(cartProduct);
  }

  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == id) {
      quantity = cartArr[i].quantity + 1;
      cartArr.splice(i, 1);
    }
  }
  let cartObj = {
    id: id,
    name: name,
    price: price,
    imgSrc: imgSrc,
    quantity: quantity,
  };
  cartArr.push(cartObj);
  localStorage.setItem("cartProduct", JSON.stringify(cartArr));
  toast.show();
  let cartCount = document.getElementById("cartCount");
  cartCount.innerText = cartArr.length;
}

// DISPLAY ITEMS IN CART
function displayCartPage() {
  let cartBody = document.getElementById("cartBody");
  let clearCartBtn = document.getElementById("clearCartBtn");
  let checkoutBtn = document.getElementById("checkoutBtn");
  let myCart = localStorage.getItem("cartProduct");

  if (myCart == null) {
    document.getElementById("emptyCart").style.display = "table-row";
    clearCartBtn.classList.add("disable");
    checkoutBtn.classList.add("disable");
    checkoutBtn.style.display = "none";
  } else {
    clearCartBtn.classList.remove("disable");
    checkoutBtn.classList.remove("disable");
    checkoutBtn.style.display = "block";
    clearCartBtn.classList.add("hero-btn");
    myCart = JSON.parse(myCart);
    // console.log(myCart);
    let str = "";
    for (let i = 0; i < myCart.length; i++) {
      str += `
					<tr>
						<th class="cart-prod" scope="row">
							<img src="${myCart[i].imgSrc}" alt="shoes">
							<div class="cart-text">
								<h5>${myCart[i].name}</h5>
								<h6>Price : ${myCart[i].price}</h6>
								<span id="${myCart[i].id}" onclick="removeFromCart(this.id)">Remove</span>
							</div>
						</th>
						<td>${myCart[i].quantity}</td>
						<td>$${
              parseFloat(myCart[i].price.substring(1, myCart[i].price.length)) *
              myCart[i].quantity
            }</td>
					</tr>
    `;
    }
    cartBody.innerHTML = str;
  }
}
// REMOVE ITEM FROM CART
function removeFromCart(id) {
  clickAudio.play();
  let toastLiveExampleDelete = document.getElementById("liveToastDelete");
  const toast = new bootstrap.Toast(toastLiveExampleDelete);
  let myCartStr = localStorage.getItem("cartProduct");
  myCart = JSON.parse(myCartStr);
  for (let i = 0; i < myCart.length; i++) {
    if (myCart[i].id == id) {
      myCart.splice(i, 1);
    }
  }
  localStorage.setItem("cartProduct", JSON.stringify(myCart));
  showTotalPrice();
  displayCartPage();
  toast.show();
  if (myCart.length == 0) {
    clearCart();
  }
  document.getElementById("cartCount").innerText = myCart.length;
}

// CLEAR CART
function clearCart() {
  localStorage.clear();
  let totalPrice = document.getElementById("totalPrice");
  let cartBody = document.getElementById("cartBody");
  cartBody.innerHTML = `<tr id="emptyCart">
	<td colspan="3" class="text-center">
	<img style="height: 500px;" src="./Assets/img/empty-cart.png" alt="empty-cart">
	</td>
	</tr>`;
  document.getElementById("clearCartBtn").classList.add("disable");
  totalPrice.innerText = "$0.00";
  document.getElementById("checkoutBtn").style.display = "none";
  document.getElementById("cartCount").innerText = "0";
}

// MALE AND FEMALE SHOES DISPLAY

function displayNewShoes() {
  let toggleGender = document.getElementById("toggleGender");
  let sellerShoes = document.getElementById("sellerShoes");
  let shoesDisplay = document.getElementById("shoesDisplay");
  let bestSellerShoesText = document.getElementById("bestSellerShoesText");

  if (toggleGender.checked == true) {
    sellerShoes.src = "./Assets/img/best-seller-women.png";
    shoesDisplay.style.background =
      "linear-gradient(270deg, #FF3C78 0%, #FFB2B2 100%) ";
    bestSellerShoesText.innerText =
      "Adidas Falcon Shoes for women - 2021 Edition (PINK)";
  } else {
    sellerShoes.src = "./Assets/img/best-seller-men.png";
    shoesDisplay.style.background =
      "linear-gradient(270deg, #2226d4 0%, #98cef9 100%) ";
    bestSellerShoesText.innerText =
      "Adidas Falcon Shoes for men - 2021 Edition (BLUE)";
  }
}

function showCartPage() {
  document.getElementById("hiddenCartPage").style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  displayCartPage();
  showTotalPrice();
}

// SHOW TOTAL PRICE OF CART
function showTotalPrice() {
  let totalPrice = document.getElementById("totalPrice");
  let myCart = localStorage.getItem("cartProduct");
  if (myCart == null) {
    totalPrice.innerText = "$0";
  } else {
    myCart = JSON.parse(myCart);
    let sum = 0;
    for (let i = 0; i < myCart.length; i++) {
      sum +=
        parseFloat(myCart[i].price.substring(1, myCart[i].price.length)) *
        myCart[i].quantity;
    }
    totalPrice.innerText = "$" + sum;
  }
}

// SHOW ANIMATION WHEN CHECKOUT
function showAnimation() {
  let lottie = document.getElementById("lottie");
  lottie.style.display = "block";
  setTimeout(() => {
    lottie.style.display = "none";
  }, 4000);
  document.getElementById("checkoutBtn").classList.add("disable");
  clearCart();
  document.getElementById("checkoutBtn").style.display = "none";
}
