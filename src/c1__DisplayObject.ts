/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class DisplayObject{
        public parent:Container;
        protected _$dom:JQuery;
        public x:number = 0;
        public y:number = 0;
        public rotation:number = 0;
        public opacity:number = 1;
        public scaleX = 1;
        public scaleY = 1;
        protected _matrix:Mat2d = mat2d.create();
        protected _sumMatrix:Mat2d = mat2d.create();
        protected _localMatrix:Mat2d = null;

        public render(gMatrix?:Mat2d):void{
            var matrix = mat2d.identity(this._matrix);
            mat2d.translate(matrix,matrix,vec2.fromValues(this.x,this.y));
            mat2d.rotate(matrix,matrix,this.rotation*Math.PI/180);
            mat2d.scale(matrix,matrix,vec2.fromValues(this.scaleX,this.scaleY));
            if(this._localMatrix){
                matrix = mat2d.multiply(matrix,matrix,this._localMatrix);
            }
            //if(gMatrix) mat2d.multiply(this._sumMatrix,gMatrix,this._matrix);
            this._$dom.attr({
                transform:cksvg.format("matrix({0},{1},{2},{3},{4},{5})",this._matrix[0],this._matrix[1],this._matrix[2],this._matrix[3],this._matrix[4],this._matrix[5]),
                opacity:this.opacity==1?null:this.opacity
            });
        }

        public dom():JQuery{
            return this._$dom;
        }

        public matrix():Mat2d;
        public matrix(max:Mat2d):void;
        public matrix(x?:Mat2d):any{
            if(x === void 0){
                return this._matrix;
            }else{
                this._matrix = x;
            }
        }

        public localMatrix():Mat2d;
        public localMatrix(m:Mat2d):void;
        public localMatrix(x?:Mat2d):any{
            if(x === void 0){
                return this._localMatrix;
            }else{
                this._localMatrix = x;
            }
        }
    }
}
