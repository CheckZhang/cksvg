/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Ellipse extends cksvg.DisplayObject{
        constructor(rx:number,ry:number,cx:number,cy:number,fill:string="#BBBBBB",stroke?:string,strokeWidth?:number){
            super();
            this._$dom = $(cksvg.makeSVG("ellipse")).attr({rx:rx,ry:ry,cx:cx,cy:cy}).css({fill:fill,stroke:stroke,"stroke-width":strokeWidth});
        }
    }
}
