// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution function", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(l");

    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let actual = substitution(
      "You shall not pass",
      "#zert$uioaqsdfghj(lmwxcvbn"
    );
    let expected = "bgw li#ss fgm h#ll";

    expect(actual).to.equal(expected);
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let actual = substitution(
      "You shall not pass",
      "#zert$uioaqsdfghj(lmwxcvbb"
    );

    expect(actual).to.be.false;
  });

  it("should spaces in the message, before and after encoding or decoding.", () => {
    let actual = substitution(
      "You shall not pass",
      "#zert$uioaqsdfghj(lmwxcvbn"
    );
    let expected = "bgw li#ss fgm h#ll";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    let actual = substitution(
      "You shall not pass",
      "#zert$uioaqsdfghj(lmwxcvbn"
    );
    let expected = "bgw li#ss fgm h#ll";

    expect(actual).to.equal(expected);
  });
});
