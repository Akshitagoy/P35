class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visibility = 255;
  }


  display()
{
  //console.log(this.body.)
if((this.body.speed)<6.5)
{super.display();
}else
{
World.remove(world,this.body)  

push();
this.Visiblity=this.Visiblity-3;
tint(255,this.Visiblity)

//do nothing
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();
}}

};
