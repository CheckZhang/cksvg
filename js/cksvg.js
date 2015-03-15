/**
 * Created by Chack on 2015/3/14.
 */
var cksvg;
(function (cksvg) {
    var formatRegExp = /\{(\d+)(:[^\}]+)?\}/g;
    function format(fmt) {
        var values = arguments;
        return fmt.replace(formatRegExp, function (match, index, placeholderFormat) {
            var value = values[parseInt(index, 10) + 1];
            return value.toString();
        });
    }
    cksvg.format = format;
    var SVG_NS = "http://www.w3.org/2000/svg";
    var XLINK_NS = "http://www.w3.org/1999/xlink";
    var ATTR_MAP = {
        "className": "class",
        "svgHref": "href"
    };
    var NS_MAP = {
        "svgHref": XLINK_NS
    };
    function makeSVG(tag, attributes) {
        var elem = document.createElementNS(SVG_NS, tag);
        for (var attribute in attributes) {
            var name = (attribute in ATTR_MAP ? ATTR_MAP[attribute] : attribute);
            var value = attributes[attribute];
            if (attribute in NS_MAP)
                elem.setAttributeNS(NS_MAP[attribute], name, value);
            else
                elem.setAttribute(name, value);
        }
        return elem;
    }
    cksvg.makeSVG = makeSVG;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
var cksvg;
(function (cksvg) {
    var DisplayObject = (function () {
        function DisplayObject() {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.opacity = 1;
            this.scaleX = 1;
            this.scaleY = 1;
            this._matrix = mat2d.create();
            this._sumMatrix = mat2d.create();
        }
        DisplayObject.prototype.render = function (gMatrix) {
            var matrix = mat2d.identity(this._matrix);
            mat2d.translate(matrix, matrix, vec2.fromValues(this.x, this.y));
            mat2d.rotate(matrix, matrix, this.rotation * Math.PI / 180);
            mat2d.scale(matrix, matrix, vec2.fromValues(this.scaleX, this.scaleY));
            if (gMatrix)
                mat2d.multiply(this._sumMatrix, gMatrix, this._matrix);
        };
        DisplayObject.prototype.dom = function () {
            return this._$dom;
        };
        DisplayObject.prototype.matrix = function (x) {
            if (x === void 0) {
                return this._matrix;
            }
            else {
                this._matrix = x;
            }
        };
        return DisplayObject;
    })();
    cksvg.DisplayObject = DisplayObject;
})(cksvg || (cksvg = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__DisplayObject.ts"/>
var cksvg;
(function (cksvg) {
    var Container = (function (_super) {
        __extends(Container, _super);
        function Container() {
            _super.apply(this, arguments);
            this._children = [];
            this.numChildren = 0;
        }
        Container.prototype.addChild = function (d) {
            this._children.push(d);
            this.numChildren = this._children.length;
            this._$dom.append(d.dom());
        };
        Container.prototype.removeChild = function (d) {
            var index = this.indexOf(d);
            if (index >= 0) {
                this._children.splice(index, 1);
                return true;
            }
            return false;
        };
        Container.prototype.indexOf = function (d) {
            return this._children.indexOf(d);
        };
        Container.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            for (var i in this._children) {
                var dis = this._children[i];
                dis.render(this._sumMatrix);
            }
        };
        return Container;
    })(cksvg.DisplayObject);
    cksvg.Container = Container;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Stage = (function (_super) {
        __extends(Stage, _super);
        function Stage($dom) {
            _super.call(this);
            this._$dom = $dom;
            $dom.resize(this.onResize);
            this.onResize();
        }
        Stage.prototype.onResize = function () {
            this.stageWidth = this._$dom.width();
            this.stageHeight = this._$dom.height();
            this.render();
        };
        Stage.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this.dom().css("zoom", 1);
        };
        return Stage;
    })(cksvg.Container);
    cksvg.Stage = Stage;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Polygon = (function (_super) {
        __extends(Polygon, _super);
        function Polygon(points, fill, stroke, strokeWidth) {
            _super.call(this);
            this.points = [];
            this.points = points;
            this.fill = fill;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("polygon"));
        }
        Polygon.prototype.formatPoints = function () {
            var temp = [];
            for (var i in this.points) {
                var p = this.points[i];
                var v = vec2.fromValues(p[0], p[1]);
                vec2.transformMat2d(v, v, this._sumMatrix);
                temp.push(v[0] + "," + v[1]);
            }
            return temp.join(" ");
        };
        Polygon.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._$dom.attr("points", this.formatPoints()).css({ fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Polygon;
    })(cksvg.DisplayObject);
    cksvg.Polygon = Polygon;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line(x1, y1, x2, y2, stroke, strokeWidth) {
            if (stroke === void 0) { stroke = "#000"; }
            if (strokeWidth === void 0) { strokeWidth = 1; }
            _super.call(this);
            this.x1 = 0;
            this.y1 = 0;
            this.x2 = 0;
            this.y2 = 0;
            this._start = vec2.create();
            this._end = vec2.create();
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("line"));
        }
        Line.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._start[0] = this.x1;
            this._start[1] = this.y1;
            this._end[0] = this.x2;
            this._end[1] = this.y2;
            vec2.transformMat2d(this._start, this._start, this._sumMatrix);
            vec2.transformMat2d(this._end, this._end, this._sumMatrix);
            this._$dom.attr({ x1: this._start[0], y1: this._start[1], x2: this._end[0], y2: this._end[1] }).css({ stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Line;
    })(cksvg.DisplayObject);
    cksvg.Line = Line;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Rect = (function (_super) {
        __extends(Rect, _super);
        function Rect(width, height, fill, rx, ry, stroke, strokeWidth) {
            if (fill === void 0) { fill = "#BBBBBB"; }
            _super.call(this);
            this.width = 0;
            this.height = 0;
            this.rx = 0;
            this.ry = 0;
            this._pos = vec2.create();
            this.width = width;
            this.height = height;
            this.rx = rx;
            this.ry = ry;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("rect"));
        }
        Rect.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._pos[0] = this.x;
            this._pos[1] = this.y;
            vec2.transformMat2d(this._pos, this._pos, gMatrix);
            this._$dom.attr({ width: this.width, height: this.height, x: this._pos[0], y: this._pos[1], rx: this.rx, ry: this.ry }).css({ fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Rect;
    })(cksvg.DisplayObject);
    cksvg.Rect = Rect;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(r, cx, cy, fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "#BBBBBB"; }
            _super.call(this);
            this.cx = 0;
            this.cy = 0;
            this._pos = vec2.create();
            this.r = r;
            this.cx = cx;
            this.cy = cy;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("circle"));
        }
        Circle.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._pos[0] = this.cx;
            this._pos[1] = this.cy;
            vec2.transformMat2d(this._pos, this._pos, this._sumMatrix);
            this._$dom.attr({ r: this.r, cx: this._pos[0], cy: this._pos[1] }).css({ fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Circle;
    })(cksvg.DisplayObject);
    cksvg.Circle = Circle;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Ellipse = (function (_super) {
        __extends(Ellipse, _super);
        function Ellipse(rx, ry, cx, cy, fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "#BBBBBB"; }
            _super.call(this);
            this.cx = 0;
            this.cy = 0;
            this._pos = vec2.create();
            this.rx = rx;
            this.ry = ry;
            this.cx = cx;
            this.cy = cy;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("ellipse"));
        }
        Ellipse.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._pos[0] = this.cx;
            this._pos[1] = this.cy;
            vec2.transformMat2d(this._pos, this._pos, this._sumMatrix);
            this._$dom.attr({ rx: this.rx, ry: this.ry, cx: this._pos[0], cy: this._pos[1] }).css({ fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Ellipse;
    })(cksvg.DisplayObject);
    cksvg.Ellipse = Ellipse;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Polyline = (function (_super) {
        __extends(Polyline, _super);
        function Polyline(points, fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "none"; }
            if (stroke === void 0) { stroke = "red"; }
            _super.call(this);
            this.points = [];
            this.points = points;
            this.fill = fill;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("polyline"));
        }
        Polyline.prototype.formatPoints = function () {
            var temp = [];
            for (var i in this.points) {
                var p = this.points[i];
                var v = vec2.fromValues(p[0], p[1]);
                vec2.transformMat2d(v, v, this._sumMatrix);
                temp.push(v[0] + "," + v[1]);
            }
            return temp.join(" ");
        };
        Polyline.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._$dom.attr("points", this.formatPoints()).css({ fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Polyline;
    })(cksvg.DisplayObject);
    cksvg.Polyline = Polyline;
})(cksvg || (cksvg = {}));
/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Graphic = (function () {
        function Graphic(type, points) {
            this.type = type;
            this.points = points;
        }
        Graphic.prototype.toString = function () {
            for (var i in this.points) {
                var p = this.points[i];
                return this.type + p[0] + " " + p[1];
            }
        };
        return Graphic;
    })();
    var Path = (function (_super) {
        __extends(Path, _super);
        function Path(fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "blue"; }
            if (stroke === void 0) { stroke = "red"; }
            if (strokeWidth === void 0) { strokeWidth = 1; }
            _super.call(this);
            this._graphics = [];
            this.fill = fill;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("path"));
        }
        Path.prototype.formatPoints = function () {
            var temp = [];
            for (var i in this._graphics) {
                var c = this._graphics[i];
                temp.push(c.toString());
            }
            return temp.join(" ");
        };
        Path.prototype.moveTo = function (x, y) {
            this._graphics.push(new Graphic("M", [vec2.fromValues(x, y)]));
            return this;
        };
        Path.prototype.lineTo = function (x, y) {
            this._graphics.push(new Graphic("L", [vec2.fromValues(x, y)]));
            return this;
        };
        Path.prototype.curveTo = function (x1, y1, x2, y2, x3, y3) {
            this._graphics.push(new Graphic("C", [vec2.fromValues(x1, y1), vec2.fromValues(x2, y2), vec2.fromValues(x3, y3)]));
            return this;
        };
        Path.prototype.smoothCurveTo = function (x1, y1, x2, y2, x3, y3) {
            this._graphics.push(new Graphic("S", [vec2.fromValues(x1, y1), vec2.fromValues(x2, y2), vec2.fromValues(x3, y3)]));
            return this;
        };
        Path.prototype.quadraticBelzierCurve = function (x1, y1, x2, y2, x3, y3) {
            this._graphics.push(new Graphic("Q", [vec2.fromValues(x1, y1), vec2.fromValues(x2, y2), vec2.fromValues(x3, y3)]));
            return this;
        };
        Path.prototype.smoothQuadraticBelzierCurveTo = function (x1, y1, x2, y2, x3, y3) {
            this._graphics.push(new Graphic("T", [vec2.fromValues(x1, y1), vec2.fromValues(x2, y2), vec2.fromValues(x3, y3)]));
            return this;
        };
        Path.prototype.closePath = function () {
            this._graphics.push(new Graphic("Z", []));
            return this;
        };
        Path.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            this._$dom.attr("d", this.formatPoints()).css({ fill: this.fill, stroke: this.stroke, "stroke-width": this.strokeWidth, opacity: this.opacity });
        };
        return Path;
    })(cksvg.DisplayObject);
    cksvg.Path = Path;
})(cksvg || (cksvg = {}));
//# sourceMappingURL=cksvg.js.map