// const doworkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("things went Wrong")
//         //resolve([1, 2, 3, 4])
//     }, 2000);
// })
// doworkPromise.then((result) => {
//     console.log("Sucsses", result)
// }).catch(r => { console.log("Error!", r) })
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);

    })
}
// add(2, 4).then(r => {
//     console.log(r)
//     add(r,4).then(r => {
//         console.log(r)
//     }
//     ).catch(r => { console.log(r) })
// }
// ).catch(r => { console.log(r) })
//promise chainig 
add(2, 4).then(r => {
    console.log(r)
    return add(r,4)
}
).then(sum2=>{
    console.log(sum2);
}).catch(r=>{console.log(r)})