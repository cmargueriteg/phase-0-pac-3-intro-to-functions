function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  
  console.log(say("Howdy", "partner"));