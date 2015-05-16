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
//# sourceMappingURL=c5__Rect.js.map