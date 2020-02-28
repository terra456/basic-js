module.exports = function countCats(arr) {

  var quantityOfCats = 0;
  if (!arr || arr.length == 0) {
    return 0;
  } else {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      if (Array.isArray(element)) {
        newArr = newArr.concat(element);        
      }    
    }
    for (let j = 0; j < newArr.length; j++) {
      const newElement = newArr[j];
      if (newElement == "^^") {
        quantityOfCats = quantityOfCats+1;
      }
    }
  }
return quantityOfCats;
};
