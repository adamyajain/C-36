class Form{
 constructor(){
 this.input  = createInput("name");
 this.button = createButton('play');
 this.greeting = createElement('h1');
 }
 hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
 }
 display(){
  var title = createElement('h1'); 
  fill("blue");
  stroke(20)
  this.title.html("MULTIPLAYER GAME");
  this.title.position(130,0);
  fill("blue");
  this.input.position(130,160);
  this.button.position(250,200);
  this.button.mousePressed(() =>{
      this.input.hide();
     this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("welcome"+player.name);
      this.greeting.position(130,160);
  })
 }
}