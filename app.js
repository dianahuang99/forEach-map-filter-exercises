// const numbers = [3, 5, 10];
// const strings = ["roar", "meow", "moo", "baa", "buzz"];
// const objs = [
//   { first: "Elie", age: 18, last: "Smith", isCatOwner: true },
//   { first: "Tim", age: 17, last: "Lee" },
//   { first: "Matt", age: 32, last: "Chen", isCatOwner: true },
//   { first: "Colt", age: 26, last: "Wang" },
// ];

// function doubleValues(arr) {
//   let newArray = [];
//   arr.forEach(function (val) {
//     newArray.push(val * 2);
//   });
//   return newArray;
// }

// function onlyEvenValues(arr) {
//   let newArray = [];
//   arr.forEach(function (val) {
//     if (val % 2 === 0) {
//       newArray.push(val);
//     }
//   });
//   return newArray;
// }

// function showFirstAndLast(arr) {
//   let newArray = [];
//   arr.forEach(function (val) {
//     newArray.push(`${val[0]}${val[val.length - 1]}`);
//   });
//   return newArray;
// }

// function addKeyAndValue(arr, key, value) {
//   arr.forEach(function (val) {
//     val[key] = value;
//   });
//   return arr;
// }
// //don't understand this one
// function vowelCount(str) {
//   let splitArr = str.split("");
//   //split returns an array
//   let obj = {};
//   const vowels = "aeiou";

//   splitArr.forEach(function (letter) {
//     let lowerCasedLetter = letter.toLowerCase();
//     if (vowels.indexOf(lowerCasedLetter) !== -1) {
//       //are we checking if there are vowels or are we checking if there are lowercased letters?
//       if (obj[lowerCasedLetter]) {
//         obj[lowerCasedLetter]++;
//       } else {
//         obj[lowerCasedLetter] = 1;
//       }
//     }
//   });
//   return obj;
// }

// //map

// function doubleValuesWithMap(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }

// function valTimesIndex(arr) {
//   return arr.map(function (val, index) {
//     return val * index;
//   });
// }

// function extractKey(arr, key) {
//   return arr.map(function (obj) {
//     return obj[key];
//   });
// }

// function extractFullName(arr) {
//   return arr.map(function (obj) {
//     return `${obj.first} ${obj.last}`;
//   });
// }

// //filter

// function filterByValue(arr, key) {
//   return arr.filter(function (val) {
//     return val[key] !== undefined;
//   });
// }

// function find(arr, value) {
//   return arr.filter(function (val) {
//     return val === value;
//   })[0];
// }

// function findInObj(arr, key, value) {
//   return arr.filter(function (val) {
//     return val[key] === value;
//   })[0];
// }
// //i dont understand
// function removeVowels(str) {
//   const vowels = "aeiou";
//   str
//     .toLowerCase()
//     .split("") //remember
//     .filter(function (val) {
//       return vowels.indexOf(val) === -1;
//     })
//     .join(""); //puts whatever's left and puts it into a new string
//   return str;
// }

// function funcName(val) {
//   return val[key] === value;
// }

// const funcName = (val) => {
//   return val[key] === value;
// };

const numbers = [3, 5, 10, 22, 34, 6, 7];
const strings = ["roar", "meow", "moo", "baa", "buzz"];
const objs = [
  { first: "Elie", age: 18, last: "Smith", isCatOwner: true },
  { first: "Tim", age: 17, last: "Lee" },
  { first: "Matt", age: 32, last: "Chen", isCatOwner: true },
  { first: "Colt", age: 26, last: "Wang" },
];

function doubleValues(arr) {
  const doubledArr = [];
  arr.forEach(function (val) {
    return doubledArr.push(val * 2);
  });
  return doubledArr;
}

function onlyEvenValues(arr) {
  const onlyEven = [];
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      onlyEven.push(num);
    }
  });
  return onlyEven;
}

function showFirstAndLast(arr) {
  const firstAndLast = [];
  arr.forEach(function (str) {
    firstAndLast.push(str[0] + str[str.length - 1]);
  });
  return firstAndLast;
}

function addKeyAndValue(arr, key, val) {
  arr.forEach(function (obj) {
    obj[key] = val;
  });
  return arr;
}

function vowelCount(str) {
  let strArr = Array.from(str);
  let vowels = "aeiou";
  let obj = {};
  strArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

function doubleValuesWithMap(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (num, idx) {
    return num * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function (obj) {
    return obj[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (obj) {
    return obj.first + " " + obj.last;
  });
}

function filterByValue(arr, key) {
  return arr.filter(function (obj) {
    return obj[key] !== undefined;
  });
}

function find(arr, val) {
  return arr.filter(function (num) {
    return val === num;
  })[0];
}

function findInObj(arr, key, value) {
  return arr.filter(function (obj) {
    return obj[key] === value;
  })[0];
}

function removeVowels(str) {
  let lowerCasedStr = str.toLowerCase();
  let strArray = lowerCasedStr.split("");
  let vowels = "aeiou";
  let noVowelString = strArray.filter(function (letter) {
    return vowels.indexOf(letter) === -1;
  });
  return noVowelString.join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (number) {
      return number % 2 !== 0;
    })
    .map(function (oddNumber) {
      return oddNumber * 2;
    });
}
