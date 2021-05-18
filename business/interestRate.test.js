const interests = require("./interestRate")
const expect = require("chai").expect

describe("interest module", () => {
  it("calculate compound interest", () => {
    const test1010 = interests.calculateInterest(1000, 0.01, 1)
    expect(test1010).to.equal(1010)
  })
})
