/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Circle extends cksvg.DisplayObject{
        constructor(r:number,cx:number,cy:number,fill:string="#BBBBBB",stroke?:string,strokeWidth?:number){
            super();
            this._$dom = $(cksvg.makeSVG("circle")).attr({r:r,cx:cx,cy:cy}).css({fill:fill,stroke:stroke,"stroke-width":strokeWidth,opacity:this.opacity==1?null:this.opacity});
        }
    }
}
