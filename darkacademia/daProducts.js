"use strict";
(function () {
    // "products" is js array imported from products.js file
  const daProducts = products.darkAcademia;

  // shopping cart vars
  let cartItems = [];
  let cartQty = 0;
  let cartTotal = 0;  

  window.addEventListener("load", init);

  function init() {
    populateProducts();

    let addToCartBtns = document.querySelectorAll(".DA-btn");
    for (let btn of addToCartBtns) {
      btn.addEventListener("click", addToCart);
    }

    document.getElementById("cart-btn").addEventListener("click", toggleCart);
    document
      .getElementById("exit-cart-btn")
      .addEventListener("click", toggleCart);
  }

  // populate page with chosen products
  function populateProducts() {
    for (let i = 0; i < daProducts.length; i++) {
      let product = daProducts[i];

      let productHeader = document.createElement("h2");
      productHeader.innerText = "Product #" + (i + 1);
      productHeader.classList.add("DA-Font", "product-header");
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

      let productNameDiv = document.createElement("div");
      productNameDiv.classList.add("prod-desc-div");
      let productName = document.createElement("h3");
      productName.classList.add("DA-Font", "product-desc");
      productName.innerText = product.name;
      productNameDiv.appendChild(productName);
      productInfo.appendChild(productNameDiv);

      let addToCart = document.createElement("button");
      addToCart.classList.add("DA-btn");
      addToCart.innerText = "ADD TO CART";
      productInfo.appendChild(addToCart);

      productContainer.appendChild(productInfo);

      document
        .getElementById("products-container")
        .appendChild(productContainer);

      if (i != daProducts.length - 1) {
        let downArrow = document.createElement("p");
        downArrow.classList.add("arrow", "down");
        document.getElementById("products-container").appendChild(downArrow);
      }
    }
    let upArrow = document.createElement("p");
    upArrow.classList.add("arrow", "up");
    let upArrowContainer = document.createElement("div");
    upArrowContainer.setAttribute("id", "up-arrow-container");
    upArrowContainer.appendChild(upArrow);
    document.getElementById("products-container").appendChild(upArrowContainer);
    arrowScroll();
  }

  function toggleCart(e) {
    e.stopPropagation();
    let cart = document.getElementById("cart-window");
    cart.classList.toggle("hidden");
    if (!cart.classList.contains("hidden")) {
      document.addEventListener("click", closeCart);
    }
  }

  function closeCart(e) {
    // add event listener to document for "click anywhere outside of cart to close" functionality
    if (!document.getElementById("cart-window").contains(e.target)) {
      document.getElementById("cart-window").classList.add("hidden");
      document.removeEventListener("click", closeCart);
    }
  }

  function addToCart() {
    let product =
      daProducts[this.parentElement.parentElement.dataset["prodnum"]];

    let cartItem = cartItems.find((i) => i.name === product.name);
    if (cartItem != undefined) {
      cartItem.qty += 1;
      document.getElementById(
        "prod-" + this.parentElement.parentElement.dataset["prodnum"] + "qty"
      ).innerText = "Quantity: " + cartItem.qty;
    } else {
      cartItems.push({ name: product.name, qty: 1 });
      let productList = document.createElement("div");
      productList.classList.add("cart-product");
      productList.setAttribute("data-prodnum", this.parentElement.parentElement.dataset["prodnum"]);

      let productImg = document.createElement("img");
      productImg.src = "../" + product.product_img;
      productImg.classList.add("cart-product-img");
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
      productQty.setAttribute(
        "id",
        "prod-" + this.parentElement.parentElement.dataset["prodnum"] + "qty"
      );
      productQty.innerText = "Quantity: 1";
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("cart-delete-btn");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", deleteCartItem);

      productInfo.appendChild(productQty);
      productInfo.appendChild(deleteBtn);
      productList.appendChild(productLink);
      productList.appendChild(productInfo);
      document.getElementById("cart-list").appendChild(productList);
    }
    cartTotal += product.price;
    cartQty++;

    document.getElementById("subtotal-price").innerText = "$" + cartTotal.toFixed(2);
    document.getElementById("cart-count").innerText = cartQty;
  }

  function deleteCartItem(e) {
    let product = daProducts[this.parentElement.parentElement.dataset["prodnum"]];
    // find item in items array and delete/decrease quantity accordingly
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]["name"] === product.name) {
        if (cartItems[i]["qty"] <= 1) {
          cartItems.splice(i, i + 1);
          this.parentElement.parentElement.remove();
          break;
        } else {
          cartItems[i]["qty"]--;
          this.previousElementSibling.innerText = "Quantity: " + cartItems[i]["qty"];
        }
      }
    }
    document.getElementById("cart-count").innerText = --cartQty;
    cartTotal -= product.price;
    document.getElementById("subtotal-price").innerText = "$" + cartTotal.toFixed(2);
    e.stopPropagation();
  }

  function arrowScroll() {
    let pLocation = document.getElementsByClassName("product-header");
  
    let arrows = document.querySelectorAll(".down");

    for (let p = 0; p < pLocation.length - 1; p++) {
      arrows[p].addEventListener("click", function() {pLocation[p + 1].scrollIntoView()});
    }

    let upArrow = document.getElementsByClassName("up");
    upArrow[0].addEventListener("click", function() {pLocation[0].scrollIntoView()})
  }
})();