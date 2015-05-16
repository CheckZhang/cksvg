/**
 * Created by Chack on 2015/3/16.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Image extends cksvg.DisplayObject{
        constructor(url:string,width?:number,height?:number){
            super();
            var temp = cksvg.makeSVG("image",{width:width,height:height});
            temp["href"].baseVal=url;
            this._$dom = $(temp);
        }
    }
}