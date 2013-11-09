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

  Template.create_game.helpers({
    name: function() {
      return Games.findOne({_id:Session.get("currentGame")}).name;
    },
    getReqs: function() {
      return Games.findOne({_id:Session.get("currentGame")}).reqs;
    }
  });

  Template.create_game.events({
    'keyup input.game_num_input': function(evt) {
        if (evt.keyCode == 13){
            var num = $('.game_num_input').val().trim();
            Games.update({_id:Session.get("currentGame")}, {$set:{num_people:num}});
            console.log('update');
            $('input.game_num_input').val(num);
        }
    },

    'keyup input.game_req_input': function(evt) {
        if (evt.keyCode == 13){
            var req = $('.game_req_input').val().trim();
            Games.update({_id:Session.get("currentGame")}, {$addToSet: {reqs: {name: req}}});
            console.log('update');
        }
    },

    'keyup input.game_desc_input': function(evt) {
        if (evt.keyCode == 13){
            var desc = $('.game_desc_input').val().trim();
            Games.update({_id:Session.get("currentGame")}, {$set:{desc: desc}});
            console.log('update');
        }
    }
  });
}

if (Meteor.isServer) {
}
