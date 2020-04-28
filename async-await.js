const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);

    })
}
//await make promise state is resolved
const doWork = async () => {
    const sum1 =await add(1, 99)
    const sum2 =await add(sum1, 50)
    const sum3 =await add(sum2, 3)
    return  sum3

}
doWork().then(r => { console.log("result", r) }).catch(m => { console.log(m) })