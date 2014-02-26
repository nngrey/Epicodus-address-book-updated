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
  describe("valid", function() {
    it("should determine if the address is valid or invalid", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 5th Avenue";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.valid().should.equal(true);
    });
  });
});

describe("PhoneNumber", function() {
  describe("fullPhoneNumber", function() {
    it("should return all of the users numbers and types", function() {
      var testNumber = Object.create(PhoneNumber);
      testNumber.digits = "555-555-5555";
      testNumber.kind = "Cell";
      testNumber.fullPhoneNumber().should.equal("Cell: 555-555-5555");
    });
  });
  describe("valid", function() {
    it("should determine if the phone number is valid or invalid", function() {
      var testNumber = Object.create(PhoneNumber);
      testNumber.digits = "5555555555";
      testNumber.kind = "Cell";
      testNumber.valid().should.equal(true);
    });
  });
});

