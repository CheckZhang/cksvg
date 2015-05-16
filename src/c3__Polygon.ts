/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    interface PolygonConfig{
        width:number;
        height:number;
    }
    export class Polygon extends DisplayObject{
        constructor(points:number[][],fill?:string,stroke?:string,strokeWidth?:number){
            super();
            this._$dom = $(cksvg.makeSVG("polygon")).attr({points:cksvg.formatPoints(points)}).css({fill:fill,stroke:stroke,"stroke-width":strokeWidth});
        }
        setPoints(points:number[][]):Polygon{
            this._$dom.attr({points:cksvg.formatPoints(points)});
            return this;
        }
    }
}
