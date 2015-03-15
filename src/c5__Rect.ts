/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Rect extends cksvg.DisplayObject{
        public width:number = 0;
        public height:number = 0;
        public rx:number = 0;
        public ry:number = 0;
        public fill:string;
        public stroke:string;
        public strokeWidth:number;
        private _pos:Vec2 = vec2.create();

        constructor(width:number,height:number,fill:string="#BBBBBB",rx?:number,ry?:number,stroke?:string,strokeWidth?:number){
            super();
            this.width = width;
            this.height = height;
            this.rx = rx;
            this.ry = ry;
            this.stroke=stroke;
            this.strokeWidth=strokeWidth;
            this._$dom = $(cksvg.makeSVG("rect"));
        }

        render(gMatrix?:Mat2d):void{
            super.render(gMatrix);
            this._pos[0] = this.x;
            this._pos[1] = this.y;
            vec2.transformMat2d(this._pos,this._pos,gMatrix);
            this._$dom.attr({width:this.width,height:this.height,x:this._pos[0],y:this._pos[1],rx:this.rx,ry:this.ry}).css({fill:this.fill,stroke:this.stroke,"stroke-width":this.strokeWidth,opacity:this.opacity});
        }
    }
}
