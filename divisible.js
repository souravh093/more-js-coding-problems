/**
 * 1. show output from: 1-50
 * 2. if the number is divisible by 3 then instead of the number show 'foo'
 * 2. if the number is divisible by 5 then instead of the number show 'bar'
 * 2. if the number is divisible by 5 and 3 then instead of the number show 'forBar'
 *
 */

// function fooBar() {
  
// }

// fooBar();

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // i = 'FooBar';
        console.log("FooBar");
    }else if (i % 3 === 0) {
      // i = 'Foo';
      console.log("Foo");
    } else if (i % 5 === 0) {
      // i = 'Bar';
      console.log("Bar");
    } else {
      console.log(i);
    }
  }
