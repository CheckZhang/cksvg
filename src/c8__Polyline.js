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
//# sourceMappingURL=c8__Polyline.js.map