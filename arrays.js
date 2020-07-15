var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, el) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  newArr.unshift(el);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el);
}

function addElementToEndOfArray(arr, el) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  newArr.push(el);
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, index) {

  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(arr) {
  var resArr = [...arr];
  return resArr.pop()
}
