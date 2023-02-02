const friends = [13, 22, 32, 17, 19, 92, 88, 12, 21];

const partial = friends.splice(2, 6, 99, 12, 92); // start index and how many element we delete in this element 
console.log(partial);
console.log(friends);
