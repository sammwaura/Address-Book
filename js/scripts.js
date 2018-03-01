// business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}
  Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


// user Interface Logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    eventpreventDefault

    var inputtedfirstName = $("input#new-firstName").val();
    var inputtedlastName = $("input#new-lastName").val();

    var newContact = newContact(firstName, lastName);
    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName + "<li></span>");

    $("input-first-name").val("");
    $("input-last-name").val("");

    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });
  });
});

$(document).ready(function() {
  $("#add-address").onClick(function() {
    $("#new-address").append('<div class="new-address">' +
                              '<div class="form-group">'+
                              '<label for="new-street">Street</label>'+
                              '<input type="text" class="form-control new-street">'+
                              '</div>'+
                              '<div class="form-group">'+
                              '<label for="new-city">City</label>'+
                              '<input type="text" class="form-control new-city">'+
                              '</div>'+
                              '<div class=form-group">'+
                              '<label for="new-county">County</label>'+
                              '<input type="text" class="form-control new-county">'+
                              '</div>'
                            '</div>');
  });
});
