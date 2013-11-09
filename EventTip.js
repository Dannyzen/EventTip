Games= new Meteor.Collection('games');

if (Meteor.isClient) {

  Template.games.events({
    'keyup input#mygame': function(evt) {
        if (evt.keyCode == 13){
            var game_name = $('#mygame').val().trim();
            Games.insert({name:game_name});
            console.log('save');
            $('#mygame').val('');
        }
    }
  });

  Template.games.helpers({
    getGames: function() {
      return Games.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('games', function () {
    return Lists.find();
  });
}
