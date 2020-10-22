function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  // constructor function methods
  this.veto = () => "No, I must disagree"
  this.approve = function() {return "You can do that!"}
  this.doCharity = () => "I like to help people."
  this.releasePressStatement = () => "You will see great things from Scuber."
}

// using prototype to create a constructor function method, sayHi()
BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}
