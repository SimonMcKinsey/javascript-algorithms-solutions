function add() {
    let args = [...arguments];

    function addReturn() {
        const args1 = [...arguments];
        return add(...args, ...args1);
    }

    addReturn.value = args.reduce((acc, current) => acc + current);
    
    return addReturn;
}

console.log(add(1,2,3,4).value); // 10
console.log(add(1)(2)(3)(4).value); // 10
console.log(add(1,2,3,4,5)(2,3)(3)(4).value); // 27