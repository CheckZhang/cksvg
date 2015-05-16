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
//# sourceMappingURL=c7__Ellipse.js.map