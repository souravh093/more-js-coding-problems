const phones = [
    {
        name: 'Samsung',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'black'
    },
    {
        name: 'Walton',
        camera: 10,
        storage: '16gb',
        price: 26000,
        color: 'sliver'
    },
    {
        name: 'Apple',
        camera: 12,
        storage: '64gb',
        price: 60000,
        color: 'blue'
    },
    {
        name: 'oppo',
        camera: 48,
        storage: '64gb',
        price: 24000,
        color: 'green'
    },
    {
        name: 'vivo',
        camera: 108,
        storage: '64gb',
        price: 40000,
        color: 'yellow'
    },
    {
        name: 'Oneplus',
        camera: 48,
        storage: '64gb',
        price: 36000,
        color: 'black'
    }
    
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
