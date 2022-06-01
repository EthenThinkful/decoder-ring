// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let rowObject = {
    1: ["A", "B", "C", "D", "E"],
    2: ["F", "G", "H", "I", "J", "K"],
    3: ["L", "M", "N", "O", "P"],
    4: ["Q", "R", "S", "T", "U"],
    5: ["V", "W", "X", "Y", "Z"],
  };
  let columnObject = {
    1: ["A", "F", "L", "Q", "V"],
    2: ["B", "G", "M", "R", "W"],
    3: ["C", "H", "N", "S", "X"],
    4: ["D", "I", "J", "O", "T", "Y"],
    5: ["E", "K", "P", "U", "Z"],
  };

  function getPolybiusNumber(object, object2, value) {
    return (
      Object.keys(object).find((key) => object[key].includes(value)) +
      "" +
      Object.keys(object2).find((key) => object2[key].includes(value))
    );
  }

  const _ignoreSpacing = (input) => {
    let myString = input;
    let remText = myString.replace(/ /g, "");
    let length = remText.length;

    let remainderVal = length % 2;
    return remainderVal;
  };

  function polybius(input, encode = true) {
    if (encode === true) {
      let result = "";
      let upperCasedInput = input.toUpperCase();
      for (let i = 0; i < upperCasedInput.length; i++) {
        if (upperCasedInput[i] === " ") {
          result += " ";
        } else {
          let keyValue = getPolybiusNumber(
            columnObject,
            rowObject,
            upperCasedInput[i]
          );
          result += keyValue;
        }
      }

      return result;
    } else {
      if (_ignoreSpacing(input) === 1) return false;

      let result2 = "";

      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          result2 += " ";
          i--;
        } else if (`${input[i]}${input[i + 1]}` === "42") {
          result2 += "(i/j)";
        } else {
          let numValue = columnObject[input[i]];
          let numValue2 = rowObject[input[i + 1]];

          let foundVal = numValue.find((num) => numValue2.includes(num));

          result2 += foundVal;
        }
      }

      return result2.toLowerCase();
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
