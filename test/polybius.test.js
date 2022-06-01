// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius function", () => {
  it("When encoding, translates the letters i and j to 42", () => {
    let actual = polybius(
      "There is more to life than meets the eye",
      (encode = true)
    );
    const expected =
      "4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551";
    expect(actual).to.equal(expected);
  });
});

describe("Decoding Process", () => {
  it("When decoding, should translate 42 to (i/j)", () => {
    let actual = polybius(
      "4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551",
      !encode
    );
    const expected = "there (i/j)s more to l(i/j)fe than meets the eye";
    expect(actual).to.equal(expected);
  });
});

describe("Ignoring capital letters", () => {
  it("Should ignore capital letters", () => {
    let actual = polybius(
      "There is more to life than meets the eye",
      (encode = true)
    );
    const expected =
      "4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551";
    expect(actual).to.equal(expected);
  });
});

describe("Maintaining spaces in message", () => {
  it("Should maintain spaces in the message, before and after encoding or decoding", () => {
    let actual = polybius(
      "There is more to life than meets the eye",
      (encode = true)
    );
    const expected =
      "4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551";
    expect(actual).to.equal(expected);
  });
});
