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
//# sourceMappingURL=c9__Path.js.map