var assert = require("assert"),
    randomFunctions = require("../lib/random_functions");

describe("randomFunctions", function() {

  describe("add", function() {
    it("adds two numbers", function() {
      assert.equal(randomFunctions.add(1, 10), 11);
    });
  });

  describe("multiply", function() {
    it("multiplies two numbers", function() {
      assert.equal(randomFunctions.multiply(8, 7), 56);
    });
  });

  describe("cheer", function() {

    describe("name given", function() {
      it("cheers the name", function() {
        assert.equal(randomFunctions.cheer("Tagboard"), "Hooray, Tagboard");
      });
    })

    describe("no name given", function() {
      it("cheers for beer", function() {
        assert.equal(randomFunctions.cheer(), "Hooray, beer");
      });
    })

  });
});
