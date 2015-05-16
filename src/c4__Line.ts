/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Line extends cksvg.DisplayObject{
        constructor(x1:number,y1:number,x2:number,y2:number,stroke:string="#000",strokeWidth:number=1){
            super();
            this._$dom = $(cksvg.makeSVG("line")).attr({x1:x1,y1:y1,x2:x2,y2:y2}).css({stroke:stroke,"stroke-width":strokeWidth,opacity:this.opacity==1?null:this.opacity});
        }
    }
}
