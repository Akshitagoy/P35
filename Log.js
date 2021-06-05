class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/leaf.jpg");
    Matter.Body.setAngle(this.body, angle);
    this.Visibility = 255;
  }

  display()
{
  //console.log(this.body.)
if((this.body.speed)<5.5)
{super.display();
}else
{
World.remove(world,this.body)  

push();
this.Visiblity=this.Visiblity-1;
tint(255,this.Visiblity)

//do nothing
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();
}}
}