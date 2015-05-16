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
//# sourceMappingURL=c3__Polygon.js.map