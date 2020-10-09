const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (array) => {
    const checkNotString = (name) => {
      return typeof name == "string";
    };
  
    return new Promise(function (resolve, reject) {
      if (array.some(checkNotString)) {
        const lowerCaseArray = array.map((name) => {
            if(typeof name == "string"){
                return name.toLowerCase();
            }
        });
            
        resolve(lowerCaseArray);
      } else {
        reject(new Error("There are no words to return."));
      }
    });
  };

  const removeUndefined = (lowerCaseArray) => {
      return new Promise(function (resolve){
          const onlyWords = lowerCaseArray => {
            let newArray = []  
            for (let index = 0; index < lowerCaseArray.length; index++) {
                if(typeof array[index] != "undefined"){
                    newArray.push(array[index]);
                }
            }
            return newArray;
          }
          resolve(onlyWords);
      })
  }
  
  lowerCaseWords(mixedArray)
    .then(removeUndefined)
    .then((result) => console.log(result))
    //.catch((error) => console.log(error));
  
  