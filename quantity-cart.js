const shoppingCart = [
    {
        name: 'shoe',
        price: 1200,
        quantity: 5
    }, 
    {
        name: 'shirt',
        price: 2200,
        quantity: 4
    }, 
    {
        name: 'pant',
        price: 3700,
        quantity: 3
    },
    {
        name: 'belt',
        price: 400,
        quantity: 2
    }
];

function totalPrice(products) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum += productTotal;
    }
    return sum;
}

const expense = totalPrice(shoppingCart);
console.log('Total expense: ' + expense);