const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

const lowerCaseWords = (array) => {
  const checkNotString = (name) => {
    return typeof name == "string";
  };

  return new Promise(function (resolve, reject) {
    if (array.some(checkNotString)) {
      const getOnlyWords = array.filter(
        (element) => typeof element == "string"
      );
      
      resolve(getOnlyWords);
    } else {
      reject(new Error("There are no words to return."));
    }
  });
};

const lowerCaseArray = (lowerCaseWords) => {
  return new Promise(function (resolve) {
    const lcWords = lowerCaseWords.map((word) => word.toLowerCase());
    resolve(lcWords)
  })
};

lowerCaseWords(mixedArray)
  .then(lowerCaseArray)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
