class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200 && keyCode!==32){
    var pos=[this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
    }

    for(var i=0;i<this.trajectory.length;i++){
       //imageMode (CENTER);
       image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1],20,20);
    }
  }
}
