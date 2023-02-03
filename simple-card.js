const shoppingCart = [
    {
        name: 'shoe',
        price: 1200,
    }, 
    {
        name: 'shirt',
        price: 2200,
    }, 
    {
        name: 'pant',
        price: 3700,
    },
    {
        name: 'belt',
        price: 400,
    }
];

function totalPrice(products) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = products[i];
        sum += product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalPrice(shoppingCart);
console.log('Total expense: ' + expense);