/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
module cksvg{
    export class DisplayObject{
        protected _$dom:JQuery;
        public x:number = 0;
        public y:number = 0;
        public rotation:number = 0;
        public opacity:number = 1;
        public scaleX = 1;
        public scaleY = 1;
        protected _matrix:Mat2d = mat2d.create();
        protected _sumMatrix:Mat2d = mat2d.create();

        public render(gMatrix?:Mat2d):void{
            var matrix = mat2d.identity(this._matrix);
            mat2d.translate(matrix,matrix,vec2.fromValues(this.x,this.y));
            mat2d.rotate(matrix,matrix,this.rotation*Math.PI/180);
            mat2d.scale(matrix,matrix,vec2.fromValues(this.scaleX,this.scaleY));
            if(gMatrix) mat2d.multiply(this._sumMatrix,gMatrix,this._matrix);
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
    }
}
