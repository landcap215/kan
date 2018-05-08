var x= new Array('150','450','750','1050');
var y= new Array('150','450','750');
var c=new Array('#F21111','#F211BE','#D711F2','#D711F2','#5711F2','#2611F2','#1174F2','#11BFF2','#11F2DD','#11F2A1','#11F25E','#7DF211','#C4F211','#EEF211','#F2E711','#F2AB11','#F27311','#F23E11');
var r=150;
var frame=1;

function kandinsky()
{
 for(var i=0;i<4;i++)
  {
    for(var j=0;j<3;j++)
    {
      fill(c[int(random(0,18))]);
      rect(x[i],y[j],300,300);
      var r=280;
      for(var k=0;k<4;k++)
      {
        fill(c[int(random(0,18))]);
        ellipse(x[i],y[j],r+int(random(-20,20)),r+int(random(-20,20)));
       r-=60;
      }
    }
  } 
}
function setup()
{
 createCanvas(1200,900);
 background(255);
 rectMode(CENTER);
 kandinsky();
}
function draw()
{
  frameRate(frame);
}

function keyPressed()
{
 kandinsky();
}