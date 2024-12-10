function processProducts(products) {
    // Step 1: Use map() to create a new array of product names
    const productNames = products.map(product => product.name);
  
    // Step 2: Use forEach() to log messages based on price
    products.forEach(product => {
      if (product.price > 50) {
        console.log(`${product.name} is above $50`);
      } else {
        console.log(`${product.name} is below $50`);
      }
    });
  
    // Step 3: Return the array of product names
    return productNames;
  }
  
  // Example Input
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  // Call the function and log the output
  const result = processProducts(products);
  console.log(result); // Output: ["Laptop", "Mouse"]
  