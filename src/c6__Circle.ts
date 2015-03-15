/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Circle extends cksvg.DisplayObject{
        public r:number;
        public cx:number =0;
        public cy:number =0;
        public fill:string;
        public stroke:string;
        public strokeWidth:number;
        private _pos:Vec2 = vec2.create();

        constructor(r:number,cx:number,cy:number,fill:string="#BBBBBB",stroke?:string,strokeWidth?:number){
            super();
            this.r = r;
            this.cx = cx;
            this.cy = cy;
            this.stroke=stroke;
            this.strokeWidth=strokeWidth;
            this._$dom = $(cksvg.makeSVG("circle"));
        }

        render(gMatrix?:Mat2d):void{
            super.render(gMatrix);
            this._pos[0] = this.cx;
            this._pos[1] = this.cy;
            vec2.transformMat2d(this._pos,this._pos,this._sumMatrix);
            this._$dom.attr({r:this.r,cx:this._pos[0],cy:this._pos[1]}).css({fill:this.fill,stroke:this.stroke,"stroke-width":this.strokeWidth,opacity:this.opacity});
        }
    }
}
