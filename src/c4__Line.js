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
//# sourceMappingURL=c4__Line.js.map