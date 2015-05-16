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
//# sourceMappingURL=c91__Group.js.map