/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Line extends cksvg.DisplayObject{
        public x1:number = 0;
        public y1:number = 0;
        public x2:number = 0;
        public y2:number = 0;
        public stroke:string;
        public strokeWidth:number;
        private _start:Vec2 = vec2.create();
        private _end:Vec2 = vec2.create();

        constructor(x1:number,y1:number,x2:number,y2:number,stroke:string="#000",strokeWidth:number=1){
            super();
            this.x1=x1;
            this.y1=y1;
            this.x2=x2;
            this.y2=y2;
            this.stroke=stroke;
            this.strokeWidth=strokeWidth;
            this._$dom = $(cksvg.makeSVG("line"));
        }

        render(gMatrix?:Mat2d):void{
            super.render(gMatrix);
            this._start[0] = this.x1;
            this._start[1] = this.y1;
            this._end[0] = this.x2;
            this._end[1] = this.y2;
            vec2.transformMat2d(this._start,this._start,this._sumMatrix);
            vec2.transformMat2d(this._end,this._end,this._sumMatrix);
            this._$dom.attr({x1:this._start[0],y1:this._start[1],x2:this._end[0],y2:this._end[1]}).css({stroke:this.stroke,"stroke-width":this.strokeWidth,opacity:this.opacity});
        }
    }
}
