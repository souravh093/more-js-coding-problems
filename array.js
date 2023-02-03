const country = 'bangladesh';
const age = 53;
const isIndependent = true;
const student = {
    id: 123,
    class: 14,
    name: 'Sourav'
}

const friends = [13, 42, 28, 39, 89, 73];
function add(num1, num2) {
    return num1, num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// 
console.log(Array.isArray(friends)) // important
console.log(typeof add)

// ============================ ** ===========================

console.log(friends.includes(40));

if (friends.indexOf(28) !== -1) {
    console.log("input Asa")
}else {
    console.log("input nai")
}

// concat : 
const newFriendAge = [12, 20, 21, 19, 17];
const allFriends = newFriendAge.concat(friends); // important
console.log(allFriends)

