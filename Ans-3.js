function createCart() {
    let cartItems = [];
  
    return {
      getCartItems: function() {
        return cartItems;
      }
    };
  }
  
  const cart = createCart();
  console.log(cart.getCartItems()); // []
  