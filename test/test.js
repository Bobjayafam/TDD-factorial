import { assert } from "chai";

import computeFactorial from "../src/main";

describe("factorial", () => {
  describe("handle valid input", () => {
    it("should return 6 as factorial for 3", () => {
      assert.equal(computeFactorial(3), 6);
    });
    it("should return 120 as factorial for 5", () => {
      assert.equal(computeFactorial(5), 120);
    });
  });
  describe("handle invalid input", () => {
    it("should return undefined as factorial for -5", () => {
      assert.equal(computeFactorial(-5), "undefined");
    });
    it("should return undefined as factorial for 'demo'", () => {
      assert.equal(computeFactorial("demo"), "undefined");
    });
  });
});
