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
var stage = new cksvg.Stage($("#stage"));
var polygon = new cksvg.Polygon([[0, 0], [100, 0], [100, 100], [0, 100]], "#ff0000", "#00ff00", 2);
polygon.x = 100;
polygon.y = 100;
polygon.rotation = 30;
polygon.scaleX = polygon.scaleY = 1.2;
stage.addChild(polygon);
var line = new cksvg.Line(0, 0, 100, 100, "#0000FF", 2);
stage.addChild(line);
var rect = new cksvg.Rect(100, 100);
rect.x = 200;
rect.y = 200;
rect.opacity = 0.3;
stage.addChild(rect);
var circle = new cksvg.Circle(50, 50, 50);
circle.x = 300;
circle.y = 0;
stage.addChild(circle);
var ellipse = new cksvg.Ellipse(50, 20, 50, 20);
ellipse.x = 300;
ellipse.y = 100;
stage.addChild(ellipse);
var polyline = new cksvg.Polyline([[0, 0], [50, -30], [100, 30]]);
polyline.x = 300;
polyline.y = 200;
stage.addChild(polyline);
var path = new cksvg.Path();
path.moveTo(0, 0).lineTo(50, 50).lineTo(100, 50).closePath();
stage.addChild(path);
//other styles example
path.dom().css("color", "#FFF");
stage.render();
//# sourceMappingURL=DisplayObjectsTest.js.map