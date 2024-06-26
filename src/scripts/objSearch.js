function getValue(path='', obj={}) {
    // Check for empty or undefined string possibility
    if (!path) {
        return 'Requested path is empty or undefined.';
    }

    const pathArr = path.split('.');

    let currentObj = obj;

    for (const prop of pathArr) {
        if (!Object.hasOwn(currentObj, prop)) {
            return 'Requested property not detected.';
        }
        currentObj = currentObj[prop];
    }

    return currentObj;

}

let targetObj = { name: 'Megaport', address: { office: { unit: 'Level 3', street: '825 Ann Street', suburb: 'Fortitude Valley', city:
'Brisbane', state: 'Queensland', postcode: 4006, }, }, industry: { type: 'Internet and telecommunications',
asxListed: true, }, };

let srcPath1 = 'address.office.suburb';
let srcPath2 = 'industry.asxListed';

const suburbValue = getValue(srcPath1, targetObj);
const asxListedValue = getValue(srcPath2, targetObj);

console.log("Value for " + srcPath1 + ": " + suburbValue);
console.log("Value for " + srcPath2 + ": " + asxListedValue);