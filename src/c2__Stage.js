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
//# sourceMappingURL=c2__Stage.js.map