 function BoardMember(name, homeState, training) {
   this.name = name
   this.homeState = homeState
   this.training = training
 }

 BoardMember.prototype.veto = function() {
     return "No I must disagree"
 }

 veto, approve, doCharity, releasePressStatement, sayHi