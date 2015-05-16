var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Chack on 2015/3/15.
 */
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
//# sourceMappingURL=c90__Text.js.map