/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
var cksvg;
(function (cksvg) {
    var DisplayObject = (function () {
        function DisplayObject() {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.opacity = 1;
            this.scaleX = 1;
            this.scaleY = 1;
            this._matrix = mat2d.create();
            this._sumMatrix = mat2d.create();
            this._localMatrix = null;
        }
        DisplayObject.prototype.render = function (gMatrix) {
            var matrix = mat2d.identity(this._matrix);
            mat2d.translate(matrix, matrix, vec2.fromValues(this.x, this.y));
            mat2d.rotate(matrix, matrix, this.rotation * Math.PI / 180);
            mat2d.scale(matrix, matrix, vec2.fromValues(this.scaleX, this.scaleY));
            if (this._localMatrix) {
                matrix = mat2d.multiply(matrix, matrix, this._localMatrix);
            }
            //if(gMatrix) mat2d.multiply(this._sumMatrix,gMatrix,this._matrix);
            this._$dom.attr({
                transform: cksvg.format("matrix({0},{1},{2},{3},{4},{5})", this._matrix[0], this._matrix[1], this._matrix[2], this._matrix[3], this._matrix[4], this._matrix[5]),
                opacity: this.opacity == 1 ? null : this.opacity
            });
        };
        DisplayObject.prototype.dom = function () {
            return this._$dom;
        };
        DisplayObject.prototype.matrix = function (x) {
            if (x === void 0) {
                return this._matrix;
            }
            else {
                this._matrix = x;
            }
        };
        DisplayObject.prototype.localMatrix = function (x) {
            if (x === void 0) {
                return this._localMatrix;
            }
            else {
                this._localMatrix = x;
            }
        };
        return DisplayObject;
    })();
    cksvg.DisplayObject = DisplayObject;
})(cksvg || (cksvg = {}));
//# sourceMappingURL=c1__DisplayObject.js.map