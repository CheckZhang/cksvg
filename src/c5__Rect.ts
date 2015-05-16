/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Rect extends cksvg.DisplayObject{
        constructor(width:number,height:number,fill:string="#BBBBBB",rx?:number,ry?:number,stroke?:string,strokeWidth?:number){
            super();
            this._$dom = $(cksvg.makeSVG("rect")).attr({width:width,height:height,rx:rx,ry:ry}).css({fill:fill,stroke:stroke,"stroke-width":strokeWidth,opacity:this.opacity==1?null:this.opacity});
        }
    }
}
