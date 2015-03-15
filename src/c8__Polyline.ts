/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Polyline extends DisplayObject{
        constructor(points:number[][],fill:string="none",stroke:string="red",strokeWidth?:number){
            super();
            this._$dom = $(cksvg.makeSVG("polyline")).attr("points",cksvg.formatPoints(points)).css({fill:fill,stroke:stroke,"stroke-width":strokeWidth});
        }
    }
}
