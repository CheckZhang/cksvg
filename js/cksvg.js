var cksvg;
(function (cksvg) {
    function supportsSvg() {
        var svg = "http://www.w3.org/TR/SVG11/feature#Shape";
        return document.implementation.hasFeature(svg, "1.0") || document.implementation.hasFeature(svg, "1.1");
    }
    cksvg.supportsSvg = supportsSvg;
    var formatRegExp = /\{(\d+)(:[^\}]+)?\}/g;
    function format(fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var values = arguments;
        return fmt.replace(formatRegExp, function (match, index, placeholderFormat) {
            var value = values[parseInt(index, 10) + 1];
            return value.toString();
        });
    }
    cksvg.format = format;
    function formatPoints(points) {
        var temp = [];
        for (var i in points) {
            var p = points[i];
            temp.push(p.join(" "));
        }
        return temp.join(",");
    }
    cksvg.formatPoints = formatPoints;
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
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
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
            this._localMatrix = null;
        }
        DisplayObject.prototype.render = function (gMatrix) {
            var matrix = mat2d.identity(this._matrix);
            mat2d.translate(matrix, matrix, vec2.fromValues(this.x, this.y));
            mat2d.rotate(matrix, matrix, this.rotation * Math.PI / 180);
            mat2d.scale(matrix, matrix, vec2.fromValues(this.scaleX, this.scaleY));
            if (this._localMatrix) {
                matrix = mat2d.multiply(matrix, matrix, this._localMatrix);
            }
            this._$dom.attr({
                transform: cksvg.format("matrix({0},{1},{2},{3},{4},{5})", this._matrix[0], this._matrix[1], this._matrix[2], this._matrix[3], this._matrix[4], this._matrix[5]),
                opacity: this.opacity == 1 ? null : this.opacity
            });
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
        DisplayObject.prototype.localMatrix = function (x) {
            if (x === void 0) {
                return this._localMatrix;
            }
            else {
                this._localMatrix = x;
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
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__DisplayObject.ts"/>
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
            if (d.parent)
                d.parent.removeChild(d);
            d.parent = this;
        };
        Container.prototype.addChildAt = function (d, i) {
            this._children.push(d);
            if (i > this.numChildren - 1) {
                this.addChild(d);
                return;
            }
            else if (i < 0) {
                i = 0;
            }
            d.dom().insertAfter(this._$dom.children().eq(i));
            if (d.parent) {
                d.parent.removeChild(d);
            }
            d.parent = this;
            this.numChildren = this._children.length;
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
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
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
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Polygon = (function (_super) {
        __extends(Polygon, _super);
        function Polygon(points, fill, stroke, strokeWidth) {
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("polygon")).attr({ points: cksvg.formatPoints(points) }).css({ fill: fill, stroke: stroke, "stroke-width": strokeWidth });
        }
        Polygon.prototype.setPoints = function (points) {
            this._$dom.attr({ points: cksvg.formatPoints(points) });
            return this;
        };
        return Polygon;
    })(cksvg.DisplayObject);
    cksvg.Polygon = Polygon;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line(x1, y1, x2, y2, stroke, strokeWidth) {
            if (stroke === void 0) { stroke = "#000"; }
            if (strokeWidth === void 0) { strokeWidth = 1; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("line")).attr({ x1: x1, y1: y1, x2: x2, y2: y2 }).css({ stroke: stroke, "stroke-width": strokeWidth, opacity: this.opacity == 1 ? null : this.opacity });
        }
        return Line;
    })(cksvg.DisplayObject);
    cksvg.Line = Line;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Rect = (function (_super) {
        __extends(Rect, _super);
        function Rect(width, height, fill, rx, ry, stroke, strokeWidth) {
            if (fill === void 0) { fill = "#BBBBBB"; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("rect")).attr({ width: width, height: height, rx: rx, ry: ry }).css({ fill: fill, stroke: stroke, "stroke-width": strokeWidth, opacity: this.opacity == 1 ? null : this.opacity });
        }
        return Rect;
    })(cksvg.DisplayObject);
    cksvg.Rect = Rect;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(r, cx, cy, fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "#BBBBBB"; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("circle")).attr({ r: r, cx: cx, cy: cy }).css({ fill: fill, stroke: stroke, "stroke-width": strokeWidth, opacity: this.opacity == 1 ? null : this.opacity });
        }
        return Circle;
    })(cksvg.DisplayObject);
    cksvg.Circle = Circle;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Ellipse = (function (_super) {
        __extends(Ellipse, _super);
        function Ellipse(rx, ry, cx, cy, fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "#BBBBBB"; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("ellipse")).attr({ rx: rx, ry: ry, cx: cx, cy: cy }).css({ fill: fill, stroke: stroke, "stroke-width": strokeWidth });
        }
        return Ellipse;
    })(cksvg.DisplayObject);
    cksvg.Ellipse = Ellipse;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Polyline = (function (_super) {
        __extends(Polyline, _super);
        function Polyline(points, fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "none"; }
            if (stroke === void 0) { stroke = "red"; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("polyline")).attr("points", cksvg.formatPoints(points)).css({ fill: fill, stroke: stroke, "stroke-width": strokeWidth });
        }
        return Polyline;
    })(cksvg.DisplayObject);
    cksvg.Polyline = Polyline;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Text = (function (_super) {
        __extends(Text, _super);
        function Text(text, fill, stroke, strokeWidth, letterSpacing, wordSpacing, writingMode) {
            if (fill === void 0) { fill = "red"; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("text")).text(text).css({ fill: fill, stroke: stroke, "stroke-width": strokeWidth, "letter-spacing": letterSpacing, "word-spacing": wordSpacing, "writing-mode": writingMode });
        }
        return Text;
    })(cksvg.DisplayObject);
    cksvg.Text = Text;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Group = (function (_super) {
        __extends(Group, _super);
        function Group() {
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("g"));
        }
        return Group;
    })(cksvg.Container);
    cksvg.Group = Group;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Image = (function (_super) {
        __extends(Image, _super);
        function Image(url, width, height) {
            _super.call(this);
            var temp = cksvg.makeSVG("image", { width: width, height: height });
            temp["href"].baseVal = url;
            this._$dom = $(temp);
        }
        return Image;
    })(cksvg.DisplayObject);
    cksvg.Image = Image;
})(cksvg || (cksvg = {}));
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var Path = (function (_super) {
        __extends(Path, _super);
        function Path(fill, stroke, strokeWidth) {
            if (fill === void 0) { fill = "blue"; }
            if (stroke === void 0) { stroke = "red"; }
            if (strokeWidth === void 0) { strokeWidth = 1; }
            _super.call(this);
            this._$dom = $(cksvg.makeSVG("path")).attr({ d: "" }).css({ fill: fill, stroke: stroke, strokeWidth: strokeWidth });
        }
        Path.prototype.clear = function () {
            this._$dom.attr("d", "");
            return this;
        };
        Path.prototype.moveTo = function (x, y) {
            this._$dom.attr("d", this._$dom.attr("d") + " M" + cksvg.formatPoints([[x, y]]));
            return this;
        };
        Path.prototype.lineTo = function (x, y) {
            this._$dom.attr("d", this._$dom.attr("d") + " L" + cksvg.formatPoints([[x, y]]));
            return this;
        };
        Path.prototype.ellipticalArc = function (rx, ry, x, y, xAxisRotation, largeArcFlag, sweepFlag) {
            if (xAxisRotation === void 0) { xAxisRotation = 0; }
            if (largeArcFlag === void 0) { largeArcFlag = false; }
            if (sweepFlag === void 0) { sweepFlag = true; }
            this._$dom.attr("d", this._$dom.attr("d") + " A" + rx + " " + ry + " " + xAxisRotation + " " + (largeArcFlag ? 1 : 0) + " " + (sweepFlag ? 1 : 0) + " " + x + " " + y);
            return this;
        };
        Path.prototype.curveTo = function (x1, y1, x2, y2, x, y) {
            this._$dom.attr("d", this._$dom.attr("d") + " C" + cksvg.formatPoints([[x1, y1], [x2, y2], [x, y]]));
            return this;
        };
        Path.prototype.smoothCurveTo = function (x2, y2, x, y) {
            this._$dom.attr("d", this._$dom.attr("d") + " S" + cksvg.formatPoints([[x2, y2], [x, y]]));
            return this;
        };
        Path.prototype.quadraticBelzierCurve = function (x1, y1, x2, y2, x, y) {
            this._$dom.attr("d", this._$dom.attr("d") + " Q" + cksvg.formatPoints([[x1, y1], [x2, y2], [x, y]]));
            return this;
        };
        Path.prototype.smoothQuadraticBelzierCurveTo = function (x1, y1, x2, y2, x, y) {
            this._$dom.attr("d", this._$dom.attr("d") + " T" + cksvg.formatPoints([[x1, y1], [x2, y2], [x, y]]));
            return this;
        };
        Path.prototype.horizontalLineTo = function (x) {
            this._$dom.attr("d", this._$dom.attr("d") + " H" + x);
            return this;
        };
        Path.prototype.verticalLineTo = function (y) {
            this._$dom.attr("d", this._$dom.attr("d") + " V" + y);
            return this;
        };
        Path.prototype.closePath = function () {
            this._$dom.attr("d", this._$dom.attr("d") + " Z");
            return this;
        };
        return Path;
    })(cksvg.DisplayObject);
    cksvg.Path = Path;
})(cksvg || (cksvg = {}));
//# sourceMappingURL=cksvg.js.map