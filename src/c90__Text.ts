/**
 * Created by Chack on 2015/3/15.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Text extends DisplayObject{
        constructor(text:string,fill:string="red",stroke?:string,strokeWidth?:number,letterSpacing?:number,wordSpacing?:number,writingMode?:string){
            super();
            this._$dom = $(cksvg.makeSVG("text")).text(text).css({fill:fill,stroke:stroke,"stroke-width":strokeWidth,"letter-spacing":letterSpacing,"word-spacing":wordSpacing,"writing-mode":writingMode});
        }
    }
}