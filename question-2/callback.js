const delayedSuccess = () => {
    return new Promise(function (resolve){
        const functionToResolve = setTimeout(() => {
            let success = {'message': 'delayed success!'}
            console.log(success);
        }, 500)
        resolve(functionToResolve);
    })
    
}

const delayedException = () => {
    return new Promise(function (reject){
        const functionToReject = setTimeout(() => {
            try{
                throw new Error('error: delayed exception!');
            }catch(e){
                console.error(e);
            }
        }, 500)
        reject(functionToReject);

    })
    
}

delayedSuccess()
delayedException()