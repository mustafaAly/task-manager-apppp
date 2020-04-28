const doWorkCallBack = (callback) => {
     setTimeout(() => {
        callback('This is Error', undefined)
    }, 0);
 }
doWorkCallBack((error,result)=>{
    if(error) return console.log(error)
    console.log(result)
})
