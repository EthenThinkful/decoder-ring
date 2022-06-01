// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined || alphabet.length != 26) {
      return false;
    } else {
      let checkedAlphabet = alphabet.split("");
      for (let i = 0; i < alphabet.length; i++) {
        if (
          checkedAlphabet.filter((letter) => letter === alphabet[i]).length > 1
        ) {
          return false;
        }
      }
    }

    let actualAlphabet = "abcdefghijklmnopqrstuvwxyz";

    if (encode === true) {
      let newInput = input.toLowerCase();
      let encodedMessage = "";

      for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] === " ") encodedMessage += " ";
        else encodedMessage += alphabet[actualAlphabet.indexOf(newInput[i])];
      }
      return encodedMessage;
    } else {
      let decodedMessage = "";

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") decodedMessage += " ";
        else decodedMessage += actualAlphabet[alphabet.indexOf(input[i])];
      }
      return decodedMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
