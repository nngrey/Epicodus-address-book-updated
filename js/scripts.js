var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};

var Numbers = {
  phoneNumbers: function() {
    return this.kind + ": " + this.phoneNumber;
  }
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control new-state">' +
                                '</div>' +
                              '</div>');
  });

  $("#add-number").click(function() {
    $("#new-numbers").append('<div class="new-number">' +
                              '<div class="form-group">' +
                                '<label for="new-phone-number">Phone Number</label>' +
                                '<input type="text" class="form-control new-phone-number">' +
                                '<select id="number-kind">' +
                                  '<option value="Home">Home</option>' +
                                  '<option value="Work">Work</option>' +
                                  '<option value="Cell">Cell</option>' +
                                  '<option value="Other">Other</option>' +
                                '</select>' +
                              '</div>' +
                            '</div>');
  });
  
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedNumberKind = $("select#number-kind").val();
    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.addresses = [];
    newContact.numbersArray = [];

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      newContact.addresses.push(newAddress);
    });

    $(".new-number").each(function() {
      var inputtedPhoneNumber = $(this).find("input.new-phone-number").val();
      var inputtedNumberKind = $(this).find("select#number-kind").val();

      var newNumber = Object.create(Numbers);
      newNumber.phoneNumber = inputtedPhoneNumber;
      newNumber.kind = inputtedNumberKind;
      console.log(newContact.numbersArray);
      newContact.numbersArray.push(newNumber);
    });
    
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

      $("ul#numbers").text("");
      newContact.numbersArray.forEach(function(number) {
        $("ul#numbers").append("<li>" + number.phoneNumbers() + "</li>");
      });
    });

    this.reset();
  });
});
