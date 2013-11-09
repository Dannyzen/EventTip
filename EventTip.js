Events= new Meteor.Collection('events');

if (Meteor.isClient) {
  Template.input_field.events({
    'keyup input#myevent': function(evt) {
        if (evt.keyCode == 13){
            var event_name = $('#myevent').val().trim();
            Events.insert({name:event_name});
            console.log('save')
        }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
