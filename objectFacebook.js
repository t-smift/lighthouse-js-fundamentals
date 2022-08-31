var facebookProfile = {
  name: "Taylor Smith",
  numFriends: 500,
  messages: ["Hi team!"],
  postMessage: function(message){
    facebookProfile.messages.push(message)
  },
  deleteMessage: function(index){
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(){
    numFriends = numFriends + 1
  },
  removeFriend: function(){
    numFriends = numFriends - 1
  }
}
//facebookProfile.postMessage("Hi team!");
facebookProfile.deleteMessage(0)
console.log(facebookProfile);