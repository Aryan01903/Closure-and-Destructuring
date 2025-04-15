function createCartManager() {
    let cartItems = [];
  
    function addToCart(product) {
      const existingProduct = cartItems.find(item => item.productId === product.productId);
  
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        cartItems.push(product);
      }
    }
  
    function getCartItems() {
      return cartItems;
    }
  
    return { addToCart, getCartItems };
  }
  
  const myCart = createCartManager();
  myCart.addToCart({ productId: 1, name: 'Book', quantity: 1, price: 100 });
  myCart.addToCart({ productId: 1, name: 'Book', quantity: 2, price: 100 });
  console.log(myCart.getCartItems());
  