var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Chack on 2015/3/16.
 */
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
//# sourceMappingURL=c92__Image.js.map