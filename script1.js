// Sample data for products
const products = [
    { id: 1, name: "Bread", price: 1.99 },
    { id: 2, name: "JasmineRice", price: 12.99 },
    //will add more products...
  ];
  const cart = [];
// Function to handle menu selection
function selectMenu() {
    const menuDropdown = document.getElementById("menuDropdown");
    const selectedOption = menuDropdown.value;
    console.log(`Selected menu option: ${selectedOption}`);
  
    switch (selectedOption) {
      case "myOrders":
        console.log("Navigating to My Orders page");
        break;
  
      case "offers":
        console.log("Navigating to Offers page");
        break;
  
      case "dairy":
        console.log("Displaying Dairy products");
        break;
  
      case "meat":
        console.log("Displaying Meat products");
        break;
  
      default:
        console.log("Invalid menu option selected");
    }
  }
  
  
  // Function to handle adding products to the cart
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
  
    if (selectedProduct) {
      const existingItem = cart.find(item => item.id === productId);
  
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: 1,
        };
  
        cart.push(newItem);
      }
      updateCartUI();
    }
  }
  function proceedToPurchase(){
    window.location.href = "purchase.html";
  }
  // Function to remove a product from the cart
  function removeFromCart(productId) {
    const indexToRemove = cart.findIndex(item => item.id === productId);
  
    if (indexToRemove !== -1) {
      cart.splice(indexToRemove, 1);
      updateCartUI();
    }
  }
  
  function updateCartUI() {
    console.log("Updating cart UI...");
    console.log("Cart contents:", cart);
  }
  
  function searchProducts() {
    const searchInput = document.querySelector(".search-box input");
    const searchTerm = searchInput.value.trim().toLowerCase();
  
    if (searchTerm !== "") {
      const matchingProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  
      if (matchingProducts.length > 0) {
        console.log(`Found matching products: `, matchingProducts);
        
        const searchResultsContainer = document.getElementById("searchResults");
      
        searchResultsContainer.innerHTML = "";
      
        matchingProducts.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("search-result-item");
      
          productElement.innerHTML = `
            <span>${product.name}</span>
            <span>Price: $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
          searchResultsContainer.appendChild(productElement);
        });
      } else {
        console.log(`No matching products found.`);
        const searchResultsContainer = document.getElementById("searchResults");
        searchResultsContainer.innerHTML = `<p>No matching products found.</p>`;
      } 
      
  }
} 
