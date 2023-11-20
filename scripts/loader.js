function loaderRenderer() {
  const loader = document.querySelector("._loader");
  fetch("elements/loader.html")
    .then((response) => response.text())
    .then((data) => {
      console.log("data", data, loader);
      loader.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading loader:", error);
    });
}

loaderRenderer();
