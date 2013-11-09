Games= new Meteor.Collection('games');

if (Meteor.isClient) {

  Template.games.events({
    'keyup input#mygame': function(evt) {
        if (evt.keyCode == 13){
            var game_name = $('#mygame').val().trim();
            var id = Games.insert({name:game_name});
            Session.set("currentGame", id);
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

  Template.active_game.helpers({
    currentGame: function() {
      return Session.get("currentGame");
    },
    name: function() {
      return Games.findOne({_id:Session.get("currentGame")}).name;
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('games', function () {
    return Lists.find();
  });
}
