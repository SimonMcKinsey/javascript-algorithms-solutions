function myPromiseAll(promises) {
    let result = [];
    let promiseCounter = 0;
    
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then((res) => {
                result.push(res);
                if(promises.length - 1 === promiseCounter) {
                    resolve(result);
                }
                promiseCounter++;
            }).catch(err => reject(err));
        });
    });
}

myPromiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(res => console.log(res)); // [1,2,3]

myPromiseAll([
    Promise.resolve(1),
    Promise.reject('Failed'),
    Promise.resolve(3),
]).then(res => console.log(res)); // Error: Failed
