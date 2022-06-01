// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    let message = input.toLowerCase();

    let result = "";

    let newShift = shift;

    if (
      typeof shift === "undefined" ||
      shift < -25 ||
      shift > 25 ||
      shift === 0
    ) {
      return false;
    }

    encode ? newShift : (newShift *= -1);

    for (let i = 0; i < message.length; i++) {
      let newMessage = message[i].charCodeAt();
      let numCode = newMessage + newShift;
      if (newMessage < 97 || newMessage > 122) {
        result += String.fromCharCode(newMessage);
      } else if (numCode < 97) {
        numCode += 26;
        result += String.fromCharCode(numCode);
      } else if (numCode > 122) {
        numCode -= 26;
        result += String.fromCharCode(numCode);
      } else if (numCode >= 97 && numCode <= 122) {
        result += String.fromCharCode(numCode);
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
