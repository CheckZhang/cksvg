/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="../src/c2__Stage.ts"/>
///<reference path="../src/c3__Polygon.ts"/>
///<reference path="../src/c4__Line.ts"/>
///<reference path="../src/c5__Rect.ts"/>
///<reference path="../src/c6__Circle.ts"/>
///<reference path="../src/c7__Ellipse.ts"/>
///<reference path="../src/c8__Polyline.ts"/>
///<reference path="../src/c9__Path.ts"/>
///<reference path="../src/c90__Text.ts"/>
///<reference path="../src/c91__Group.ts"/>
///<reference path="../src/c92__Image.ts"/>
//first, create stage using jquery
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
path.moveTo(0,0).lineTo(20,20).curveTo(90,40,130,40,180,20).smoothCurveTo(250,60,280,20).ellipticalArc(100,50,300,50)
path.y = 300;
path.x = 20;
stage.addChild(path);

//text example
var text = new cksvg.Text("This is test text.");
text.x = 500;
text.y = 20;
stage.addChild(text);

//image example
var image = new cksvg.Image("http://jenkov.com/images/layout/top-bar-logo.png",340,340);
stage.addChild(image);

//group example
var g = new cksvg.Group();
var rect1 = new cksvg.Rect(100,50);
g.addChild(rect1);
var text1 = new cksvg.Text("This is Group test.");
text1.y = 60;
g.addChild(text1);
g.x = 500;
g.y = 100;
g.rotation = 30;
stage.addChild(g);

//render finally
stage.render();

