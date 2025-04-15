function createCartManager() {
    let cartItems = [];
  
    function addToCart(product) {
      const existing = cartItems.find(item => item.productId === product.productId);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        cartItems.push(product);
      }
    }
  
    function removeFromCart(productId) {
      cartItems = cartItems.filter(item => item.productId !== productId);
    }
  
    function getCartItems() {
      return cartItems;
    }
  
    return { addToCart, removeFromCart, getCartItems };
  }
  
  const myCart2 = createCartManager();
  myCart2.addToCart({ productId: 1, name: 'Book', quantity: 1, price: 100 });
  myCart2.addToCart({ productId: 2, name: 'Pen', quantity: 3, price: 10 });
  myCart2.removeFromCart(1);
  console.log(myCart2.getCartItems());
  