function createCounter() {
    let count = 0;
    return function() {
      count++;
      console.log(`Button clicked ${count} times`);
      return count;
    };
  }
  
  const counter = createCounter();
  counter(); // Button clicked 1 times
  counter(); // Button clicked 2 times
  