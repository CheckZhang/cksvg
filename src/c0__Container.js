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
///<reference path="c1__DisplayObject.ts"/>
var cksvg;
(function (cksvg) {
    var Container = (function (_super) {
        __extends(Container, _super);
        function Container() {
            _super.apply(this, arguments);
            this._children = [];
            this.numChildren = 0;
        }
        Container.prototype.addChild = function (d) {
            this._children.push(d);
            this.numChildren = this._children.length;
            this._$dom.append(d.dom());
            if (d.parent)
                d.parent.removeChild(d);
            d.parent = this;
        };
        Container.prototype.addChildAt = function (d, i) {
            this._children.push(d);
            if (i > this.numChildren - 1) {
                this.addChild(d);
                return;
            }
            else if (i < 0) {
                i = 0;
            }
            d.dom().insertAfter(this._$dom.children().eq(i));
            if (d.parent) {
                d.parent.removeChild(d);
            }
            d.parent = this;
            this.numChildren = this._children.length;
        };
        Container.prototype.removeChild = function (d) {
            var index = this.indexOf(d);
            if (index >= 0) {
                this._children.splice(index, 1);
                return true;
            }
            return false;
        };
        Container.prototype.indexOf = function (d) {
            return this._children.indexOf(d);
        };
        Container.prototype.render = function (gMatrix) {
            _super.prototype.render.call(this, gMatrix);
            for (var i in this._children) {
                var dis = this._children[i];
                dis.render(this._sumMatrix);
            }
        };
        return Container;
    })(cksvg.DisplayObject);
    cksvg.Container = Container;
})(cksvg || (cksvg = {}));
//# sourceMappingURL=c0__Container.js.map