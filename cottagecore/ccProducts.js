"use strict";
(function () {
  // "products" is js array imported from products.js file
  const ccProducts = products.cottagecore;

  // shopping cart vars
  let cartItems = [];
  let cartTotal = 0;

  window.addEventListener("load", init);

  function init() {
    // console.log(ccProducts); //test
    populateProducts();

    let addToCartBtns = document.querySelectorAll(".CC-btn");
    for (let btn of addToCartBtns) {
      btn.addEventListener("click", addToCart);
    }

    document.getElementById("cart-btn").addEventListener("click", toggleCart);
    document
      .getElementById("exit-cart-btn")
      .addEventListener("click", closeCart);
  }

  function populateProducts() {
    for (let i = 0; i < ccProducts.length; i++) {
      let product = ccProducts[i];

      let productHeader = document.createElement("h2");
      productHeader.innerText = "Product #" + (i + 1);
      productHeader.classList.add("CC-Font");
      document.getElementById("products-container").appendChild(productHeader);

      let productContainer = document.createElement("div");
      productContainer.classList.add("product");
      productContainer.setAttribute("data-prodnum", i);

      let productImg = document.createElement("img");
      productImg.src = "../" + product.product_img;
      productImg.alt = product.name;
      productImg.classList.add("product-img");
      productContainer.appendChild(productImg);

      let productInfo = document.createElement("div");
      productInfo.classList.add("prod-info-container");

      let brandLogo = document.createElement("img");
      brandLogo.src = "../" + product.brand_logo;
      brandLogo.classList.add("brand-logo");
      productInfo.appendChild(brandLogo);

      let productName = document.createElement("h3");
      productName.classList.add("CC-Font", "product-desc");
      productName.innerText = product.name;
      productInfo.appendChild(productName);

      let addToCart = document.createElement("button");
      addToCart.classList.add("CC-btn");
      addToCart.innerText = "ADD TO CART";
      productInfo.appendChild(addToCart);

      productContainer.appendChild(productInfo);

      document
        .getElementById("products-container")
        .appendChild(productContainer);

      if (i != ccProducts.length - 1) {
        let downArrow = document.createElement("p");
        downArrow.classList.add("arrow", "down");
        document.getElementById("products-container").appendChild(downArrow);
      }
    }
    scrollNext();
  }

  function toggleCart() {
    document.getElementById("cart-window").classList.toggle("hidden");
  }

  function closeCart() {
    document.getElementById("cart-window").classList.add("hidden");
  }

  function addToCart() {
    let product = ccProducts[this.parentElement.parentElement.dataset["prodnum"]];

    let cartItem = cartItems.find((i) => i.name === product.name);
    if (cartItem != undefined) {
      cartItem.qty += 1;
      console.log(cartItems);
    }
    // TODO: finish building out quantity functionality
    cartItems.push({name: product.name, qty: 1});
    console.log(cartItems); //test

    let productList = document.createElement("div");
    productList.classList.add("cart-product");

    let productImg = document.createElement("img");
    productImg.src = "../" + product.product_img;
    productImg.setAttribute("id", "product1-img");
    let productLink = document.createElement("a");
    productLink.href = product.link;
    productLink.appendChild(productImg);

    let productInfo = document.createElement("div");
    productInfo.classList.add("cart-product-info");
    let productBrand = document.createElement("p");
    productBrand.classList.add("cart-product-brand");
    productBrand.innerText = product.brand;
    productInfo.appendChild(productBrand);

    let productName = document.createElement("a");
    productName.href = product.link;
    productName.innerText = product.name;
    productName.classList.add("cart-product-name");
    productInfo.appendChild(productName);

    if (product.category != null) {
      let productDetails = document.createElement("p");
      productDetails.innerText = product.category;
      productDetails.classList.add("cart-product-details");
      productInfo.appendChild(productDetails);
    }

    let productPrice = document.createElement("p");
    productPrice.classList.add("cart-product-price");
    productPrice.innerText = "$" + product.price.toFixed(2);
    productInfo.appendChild(productPrice);

    let productQty = document.createElement("p");
    productQty.classList.add("cart-product-qty");
    productQty.innerText = "Quantity: 1";
    productInfo.appendChild(productQty);

    productList.appendChild(productLink);
    productList.appendChild(productInfo);

    document.getElementById("cart-list").appendChild(productList);
    document.getElementById("subtotal-price").innerText = "$22.00";
    document.getElementById("cart-count").innerText = "1";
  }

  function scrollNext() {
    let pLocation = document.getElementsByClassName("product");
    // let p = 1;
  
    let arrows = document.querySelectorAll(".arrow");
    // for (let arrow of arrows) {
    //     arrow.addEventListener("click", function() {console.log("hello")});
  
    // }
    // console.log(p);
    // for (let arrow of arrows) {
    for (let p = 0; p < pLocation.length - 1; p++) {
      arrows[p].addEventListener("click", function() {
        document.getElementById("products-container").scrollTo({
          top: pLocation[p + 1].offsetTop,
          behavior: "smooth"
        });
      });
      // p++;
    }
  
    // for (let arrow of arrows) {
    //   arrow.addEventListener("click", function () {
    //     // window.scrollTo({
    //     //   top: pLocation[p].offsetTop,
    //     //   behavior: "smooth"
    //     // })
    //     console.log("hello");
    //   });
    //   // p += 1;
    // } ​​​​​​​​
  }
})();

