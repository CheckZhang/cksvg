cksvg
================
A javascript libary for SVG graphics;

Base on jquery;

example:
```
//create stage
var stage = new cksvg.Stage($("#stage"));

//polygon example
var polygon = new cksvg.Polygon([[0,0],[100,0],[100,100],[0,100]],"#ff0000","#00ff00",2);
polygon.x=100;
polygon.y=100;
polygon.rotation = 30;
polygon.scaleX = polygon.scaleY = 1.2;
stage.addChild(polygon);

//line example
var line = new cksvg.Line(0,0,100,100,"#0000FF",2);
stage.addChild(line);

//rect example
var rect = new cksvg.Rect(100,100);
rect.x = 200;
rect.y = 200;
rect.opacity = 0.3;
stage.addChild(rect);

//circle example
var circle = new cksvg.Circle(50,50,50);
circle.x = 300;
circle.y = 0;
stage.addChild(circle);

//ellipse example
var ellipse = new cksvg.Ellipse(50,20,50,20);
ellipse.x = 300;
ellipse.y = 100;
stage.addChild(ellipse);

//polyline example
var polyline = new cksvg.Polyline([[0,0],[50,-30],[100,30]]);
polyline.x = 300;
polyline.y = 200;
stage.addChild(polyline);

//path example
var path = new cksvg.Path();
path.moveTo(0,0).lineTo(50,50).lineTo(100,50).closePath();
stage.addChild(path);

//other styles example
path.dom().css("color","#FFF");

stage.render();
```
