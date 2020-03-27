class Form{
 constructor(){

 }
 display(){
    
  var title = createElement('h1');
  fill("blue");
  stroke(20)
  title.html("MULTIPLAYER GAME");
  title.position(130,0);
  fill("blue");
  var input = createInput("name");
  var button = createButton('play');
  input.position(130,160);
  button.position(250,200);
  button.mousePressed(function(){
      input.hide();
      button.hide();
      var name = input.value();
      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);
      var greeting = createElement('h1');
      greeting.html("welcome"+name);
      greeting.position(130,160);
  })
 }
}