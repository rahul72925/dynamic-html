function fetchProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((result) => productsRenderer(result))
    .catch((error) => {
      console.log("error", error);
    });
}

fetchProducts();

function productsRenderer(data) {
  const productListRendererContainer = document.querySelector("#products_list");

  data.forEach((eachProduct) => {
    const productContainer = createElementWithClass(
      "div",
      "productCard_container"
    );
    const anchorTag = createElementWithClass("a", "product_card_anchor");
    anchorTag.href = `/productInfo.html?id=${eachProduct.id}`;
    anchorTag.style.color = "inherit";
    anchorTag.style.textDecoration = "inherit";
    const productImage = createElementWithClass("img", "productCard_image");
    const productDetails = createElementWithClass("div", "productCard_details");
    const productTitle = createElementWithClass("span", "productCard_title");
    const productPrice = createElementWithClass("span", "productCard_price");
    const productRating = createElementWithClass("span", "productCard_rating");
    const productDescription = createElementWithClass(
      "p",
      "productCard_description"
    );
    productImage.src = eachProduct.image;
    productTitle.textContent = eachProduct.name;
    productPrice.textContent = `Rs ${eachProduct.price}`;
    productDescription.textContent = eachProduct.description;
    productRating.textContent = `Rating ${eachProduct.rating.rate} (${eachProduct.rating.count})`;

    productContainer.appendChild(productImage);
    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productRating);
    productDetails.appendChild(productDescription);

    productContainer.appendChild(productDetails);
    anchorTag.appendChild(productContainer);
    productListRendererContainer.appendChild(anchorTag);
  });
}

function createElementWithClass(elementType, className) {
  const element = document.createElement(elementType);
  element.className = className;
  return element;
}
