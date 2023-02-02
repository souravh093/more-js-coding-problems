const names = ['abul', 'abul', 'abul', 'dabul', 'babul', 'mokbul', 'sabul', 'dabul', 'nabul', 'sobul', 'mokbul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);