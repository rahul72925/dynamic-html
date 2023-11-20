function fetchProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  console.log("blr");
  fetch(`https://fakestoreapi.com/products/${+productId}`)
    .then((res) => res.json())
    .then((result) => {
      productRenderer(result);
    })
    .catch((error) => console.log("error", error));
}

function productRenderer(product) {
  const productImage = document.querySelector(".product_image");
  const productTitle = document.querySelector(".product_title");
  const productPrice = document.querySelector(".product_price");
  const productRating = document.querySelector(".product_rating");
  const productDescription = document.querySelector(".product_description");
  const productCategory = document.querySelector(".product_category");

  productImage.src = product.image;
  productTitle.textContent = product.title;
  productPrice.textContent = `Rs ${product.price}`;
  productDescription.textContent = product.description;
  productRating.textContent = `${product.rating.rate} (${product.rating.count})`;
  productCategory.textContent = product.category;
}

fetchProduct();
