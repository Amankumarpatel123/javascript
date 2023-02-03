function doSomething() {
    var promise = new promise (function (resolve , reject )
    {
        setTimeout(function () {
            resolve('sucess!');

            
        }, 2000);
    });
    return Promise;
}

// executor function 

doSomething().then(function(result){
    console.log.apply(" the function executed!")
}).catch
