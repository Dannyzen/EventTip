if (Meteor.isClient) {
  Template.create.helpers({
    
  });

  Template.join.helpers({
    eachEvent: function() {
      return [0, 1, 2, 3];
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
