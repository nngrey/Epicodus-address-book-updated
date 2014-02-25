describe("Contact", function() {
  describe("fullName", function() {
    it("should return the first and last name with a space in between", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "John";
      testContact.lastName = "Smith";
      testContact.fullName().should.equal("John Smith");
    });
  });
});

describe("Address", function() {
  describe("fullAddress", function() {
    it("should return the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 5th Avenue";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("123 5th Avenue, Portland, Oregon");
    });
  });
});

describe("Numbers", function() {
  describe("phoneNumbers", function() {
    it("should return all of the users numbers and types", function() {
      var testNumbers = Object.create(Numbers);
      testNumbers.phoneNumber = "555-555-5555";
      testNumbers.kind = "Cell";
      testNumbers.phoneNumbers().should.equal("Cell: 555-555-5555");
    });
  });
});

